<template>
  <el-form
    ref="formRef"
    :model="form"
    :label-width="isMobile ? 'auto' : '92px'"
    :label-position="isMobile ? 'top' : 'right'"
    class="chart-form"
    :class="{ 'is-h5-form': isMobile }"
    @submit.prevent
  >
    <el-form-item :label="display('公曆生辰', false)" required>
      <SheetDatePicker
        v-if="isMobile"
        v-model="form.solarDate"
        :title="display('公曆生辰', false)"
        :placeholder="display('選擇公曆日期', false)"
        :cancel-text="display('取消', false)"
        :confirm-text="display('確定', false)"
        :year-unit="display('年', false)"
        :month-unit="display('月', false)"
        :day-unit="display('日', false)"
        format="loose"
      />
      <el-date-picker
        v-else
        v-model="form.solarDate"
        type="date"
        value-format="YYYY-M-D"
        :placeholder="display('選擇公曆日期', false)"
        style="width: 100%"
      />
    </el-form-item>
    <el-form-item :label="display('鐘錶時刻', false)">
      <SheetTimePicker
        v-if="isMobile"
        v-model="form.clock"
        :title="display('鐘錶時刻', false)"
        :placeholder="display('用於真太陽時', false)"
        :cancel-text="display('取消', false)"
        :confirm-text="display('確定', false)"
        :hour-unit="display('時', false)"
        :minute-unit="display('分', false)"
      />
      <el-time-picker
        v-else
        v-model="form.clock"
        format="HH:mm"
        value-format="HH:mm"
        :placeholder="display('用於真太陽時', false)"
        style="width: 100%"
      />
    </el-form-item>
    <el-form-item :label="display('出生時辰', false)" required>
      <SheetSelect
        v-if="isMobile"
        v-model="form.timeIndex"
        :options="timeOptions"
        :title="display('出生時辰', false)"
        :placeholder="display('請選擇時辰', false)"
        :cancel-text="display('取消', false)"
      />
      <el-select v-else v-model="form.timeIndex" class="w-full">
        <el-option
          v-for="(label, idx) in TIME_INDEX_LABELS"
          :key="idx"
          :label="display(label, false)"
          :value="idx"
        />
      </el-select>
    </el-form-item>
    <el-form-item :label="display('性別', false)">
      <el-radio-group v-model="form.gender">
        <el-radio value="男">{{ display('男', false) }}</el-radio>
        <el-radio value="女">{{ display('女', false) }}</el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item :label="display('出生地', false)">
      <SheetCascader
        v-if="isMobile"
        v-model="form.areaPath"
        :options="placeOptions"
        :title="display('出生地', false)"
        :placeholder="display('省 / 市 / 區', false)"
        :cancel-text="display('取消', false)"
        :confirm-text="display('確定', false)"
        @change="handlePlace"
      />
      <el-cascader
        v-else
        v-model="form.areaPath"
        class="w-full"
        filterable
        :options="placeOptions"
        :props="cascaderProps"
        separator=" / "
        :placeholder="display('省 / 市 / 區', false)"
        @change="handlePlace"
      />
      <p v-if="coordHint" class="coord-hint">{{ coordHint }}</p>
    </el-form-item>
    <el-form-item :label="display('真太陽時', false)">
      <el-switch v-model="form.useTrueSolar" />
      <p class="coord-hint">
        {{
          display(
            '關閉時按上方所選時辰排盤。開啟後用鐘錶時刻與出生地經度校正均時差，把地方視太陽時再換成時辰；時辰交界可能因此變一格。須先填鐘錶時刻與出生地。',
            false,
          )
        }}
      </p>
    </el-form-item>
    <div class="form-actions">
      <el-button type="primary" :loading="loading" @click="handleSubmit">{{ display('生成命盤', false) }}</el-button>
      <el-button @click="handleReset">{{ display('重置表單', false) }}</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watch, type PropType } from 'vue';
import type { CascaderProps } from 'element-plus';
import { TIME_INDEX_LABELS, clockToTimeIndex } from '@/utils/trueSolar';
import {
  BIRTHPLACE_TREE,
  DEFAULT_BIRTHPLACE_PATH,
  findPlaceByPath,
  getDefaultBirthplace,
  type BirthplaceNode,
} from '@/data/birthplaces';
import { useDisplayText } from '@/composables/useDisplayText';
import { useDevice } from '@/composables/useDevice';
import SheetSelect from '@/components/sheet/SheetSelect.vue';
import SheetCascader, { type SheetCascaderOption } from '@/components/sheet/SheetCascader.vue';
import SheetDatePicker from '@/components/sheet/SheetDatePicker.vue';
import SheetTimePicker from '@/components/sheet/SheetTimePicker.vue';

export interface ChartFormValue {
  solarDate: string;
  clock: string;
  timeIndex: number;
  gender: '男' | '女';
  city: string;
  areaPath: string[];
  lng: number;
  lat: number;
  useTrueSolar: boolean;
}

export default defineComponent({
  name: 'ChartForm',
  components: { SheetSelect, SheetCascader, SheetDatePicker, SheetTimePicker },
  props: {
    loading: { type: Boolean, default: false },
    seed: { type: Object as PropType<ChartFormValue | null>, default: null },
  },
  emits: {
    submit: (_val: ChartFormValue) => true,
    reset: () => true,
  },
  setup(props, { emit }) {
    const { display } = useDisplayText();
    const { isMobile } = useDevice();
    const formRef = ref();
    const defaults = (): ChartFormValue => {
      const place = getDefaultBirthplace();
      const now = new Date();
      const h = now.getHours();
      const m = now.getMinutes();
      const clock = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;
      return {
        solarDate: `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`,
        clock,
        timeIndex: clockToTimeIndex(h, m),
        gender: '男',
        city: place.label,
        areaPath: [...DEFAULT_BIRTHPLACE_PATH],
        lng: place.lng,
        lat: place.lat,
        useTrueSolar: false,
      };
    };
    const form = reactive<ChartFormValue>(defaults());

    const mapPlaceTree = (nodes: BirthplaceNode[]): SheetCascaderOption[] =>
      nodes.map((n) => ({
        value: n.name,
        label: display(n.name, false),
        children: n.children ? mapPlaceTree(n.children) : undefined,
      }));

    const placeOptions = computed(() => mapPlaceTree(BIRTHPLACE_TREE));
    const timeOptions = computed(() =>
      TIME_INDEX_LABELS.map((label, idx) => ({
        label: display(label, false),
        value: idx,
      })),
    );
    const cascaderProps: CascaderProps = {
      expandTrigger: 'click',
    };

    const coordHint = computed(() => {
      if (!form.lng || !form.lat) return '';
      return display(`東經 ${form.lng.toFixed(2)}°　北緯 ${form.lat.toFixed(2)}°`, false);
    });

    watch(
      () => form.clock,
      (val) => {
        if (!val) return;
        const [h, m] = val.split(':').map(Number);
        form.timeIndex = clockToTimeIndex(h, m);
      },
    );

    const applyPlace = (path: string[]) => {
      const hit = findPlaceByPath(path);
      if (!hit) return;
      form.areaPath = [...hit.path];
      form.city = hit.label;
      form.lng = hit.lng;
      form.lat = hit.lat;
    };

    const handlePlace = (path: string[] | null) => {
      if (path?.length) applyPlace(path);
    };

    const handleSubmit = () => emit('submit', { ...form });
    const handleReset = () => {
      Object.assign(form, defaults());
      emit('reset');
    };

    const applySeed = (seed: ChartFormValue) => {
      form.solarDate = seed.solarDate;
      form.clock = seed.clock;
      form.timeIndex = seed.timeIndex;
      form.gender = seed.gender;
      form.city = seed.city;
      form.areaPath = [...seed.areaPath];
      form.lng = seed.lng;
      form.lat = seed.lat;
      form.useTrueSolar = seed.useTrueSolar;
    };

    onMounted(() => {
      if (props.seed) applySeed(props.seed);
    });

    return {
      formRef,
      form,
      display,
      isMobile,
      TIME_INDEX_LABELS,
      timeOptions,
      placeOptions,
      cascaderProps,
      coordHint,
      handlePlace,
      handleSubmit,
      handleReset,
    };
  },
});
</script>

<style scoped>
.chart-form :deep(.el-cascader),
.chart-form :deep(.el-select),
.chart-form :deep(.el-date-editor) {
  width: 100%;
  max-width: 100%;
}
.form-actions {
  display: flex;
  gap: 8px;
}
.coord-hint {
  margin: 6px 0 0;
  font-size: 12px;
  line-height: 1.55;
  letter-spacing: 0.06em;
  color: var(--zw-muted);
}
.chart-form.is-h5-form :deep(.el-form-item) {
  margin-bottom: 12px;
}
.chart-form.is-h5-form :deep(.el-form-item__label) {
  margin-bottom: 0;
  padding: 0 0 4px;
  line-height: 1.3;
  height: auto;
  font-size: 0.92em;
  letter-spacing: 0.06em;
  color: var(--zw-muted);
  justify-content: flex-start;
}
.chart-form.is-h5-form :deep(.el-form-item__content) {
  line-height: 1.4;
  min-width: 0;
}
.chart-form.is-h5-form .coord-hint {
  margin-top: 6px;
  font-size: 12px;
  line-height: 1.5;
}
.chart-form.is-h5-form .form-actions {
  gap: 10px;
  margin-top: 2px;
}
.chart-form.is-h5-form .form-actions .el-button {
  flex: 1;
  min-height: 38px;
}
</style>
