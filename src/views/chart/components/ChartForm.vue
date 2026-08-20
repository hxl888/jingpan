<template>
  <el-form ref="formRef" :model="form" label-width="92px" class="chart-form" @submit.prevent>
    <el-form-item :label="display('公曆生辰', false)" required>
      <el-date-picker
        v-model="form.solarDate"
        type="date"
        value-format="YYYY-M-D"
        :placeholder="display('選擇公曆日期', false)"
        class="w-full"
      />
    </el-form-item>
    <el-form-item :label="display('鐘錶時刻', false)">
      <el-time-picker
        v-model="form.clock"
        format="HH:mm"
        value-format="HH:mm"
        :placeholder="display('用於真太陽時', false)"
        class="w-full"
      />
    </el-form-item>
    <el-form-item :label="display('出生時辰', false)" required>
      <el-select v-model="form.timeIndex" class="w-full">
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
      <el-cascader
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
    <div class="flex gap-2">
      <el-button type="primary" :loading="loading" @click="handleSubmit">{{ display('生成命盤', false) }}</el-button>
      <el-button @click="handleReset">{{ display('重置表單', false) }}</el-button>
    </div>
  </el-form>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, watch, type PropType } from 'vue';
import type { CascaderOption, CascaderProps } from 'element-plus';
import { TIME_INDEX_LABELS, clockToTimeIndex } from '@/utils/trueSolar';
import {
  BIRTHPLACE_TREE,
  DEFAULT_BIRTHPLACE_PATH,
  findPlaceByPath,
  getDefaultBirthplace,
  type BirthplaceNode,
} from '@/data/birthplaces';
import { useDisplayText } from '@/composables/useDisplayText';

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
    const formRef = ref();
    const defaults = (): ChartFormValue => {
      const place = getDefaultBirthplace();
      return {
        solarDate: '1990-1-1',
        clock: '12:00',
        timeIndex: 6,
        gender: '男',
        city: place.label,
        areaPath: [...DEFAULT_BIRTHPLACE_PATH],
        lng: place.lng,
        lat: place.lat,
        useTrueSolar: false,
      };
    };
    const form = reactive<ChartFormValue>(defaults());

    const mapPlaceTree = (nodes: BirthplaceNode[]): CascaderOption[] =>
      nodes.map((n) => ({
        value: n.name,
        label: display(n.name, false),
        children: n.children ? mapPlaceTree(n.children) : undefined,
      }));

    const placeOptions = computed(() => mapPlaceTree(BIRTHPLACE_TREE));
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
      TIME_INDEX_LABELS,
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
.chart-form :deep(.el-cascader) {
  width: 100%;
}
.coord-hint {
  margin: 6px 0 0;
  font-size: 12px;
  letter-spacing: 0.06em;
  color: var(--zw-muted);
}
</style>
