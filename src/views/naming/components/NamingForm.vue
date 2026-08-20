<template>
  <form class="naming-form" @submit.prevent="handleSubmit">
    <label>
      {{ display('公曆日期', false) }}
      <input v-model="iso" type="date" required />
    </label>
    <label>
      {{ display('出生時辰', false) }}
      <select v-model.number="timeIndex">
        <option v-for="(label, idx) in timeLabels" :key="idx" :value="idx">
          {{ display(label, false) }}
        </option>
      </select>
    </label>
    <label>
      {{ display('姓氏（可選）', false) }}
      <input v-model="surname" type="text" maxlength="8" :placeholder="display('如：陳', false)" />
    </label>
    <label>
      {{ display('性別（僅展示，不參與用字）', false) }}
      <select v-model="gender">
        <option value="">{{ display('未填', false) }}</option>
        <option value="男">{{ display('男', false) }}</option>
        <option value="女">{{ display('女', false) }}</option>
      </select>
    </label>
    <button type="submit" class="submit">{{ display('起名', false) }}</button>
  </form>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue';
import { useDisplayText } from '@/composables/useDisplayText';
import { clockToTimeIndex, TIME_INDEX_LABELS } from '@/utils/trueSolar';
import { toIsoDate } from '@/utils/almanac';

export default defineComponent({
  name: 'NamingForm',
  emits: {
    submit: (_payload: {
      iso: string;
      timeIndex: number;
      surname: string;
      gender: string;
    }) => true,
  },
  setup(_props, { emit }) {
    const { display } = useDisplayText();
    const now = new Date();
    const _data = reactive({
      iso: toIsoDate(now),
      timeIndex: clockToTimeIndex(now.getHours(), now.getMinutes()),
      surname: '',
      gender: '',
    });
    const handleSubmit = () => {
      if (!_data.iso) return;
      emit('submit', {
        iso: _data.iso,
        timeIndex: _data.timeIndex,
        surname: _data.surname.trim(),
        gender: _data.gender,
      });
    };
    return {
      display,
      timeLabels: TIME_INDEX_LABELS,
      ...toRefs(_data),
      handleSubmit,
    };
  },
});
</script>

<style scoped>
.naming-form {
  display: grid;
  gap: 0.85rem;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  padding: 1rem 1.1rem;
  border: 1px solid var(--zw-line);
  border-radius: 12px;
  background: var(--zw-paper);
}
label {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  font-size: 0.85rem;
  color: var(--zw-ink-muted);
}
input,
select {
  padding: 0.45rem 0.55rem;
  border: 1px solid var(--zw-line);
  border-radius: 8px;
  background: var(--zw-bg);
  color: var(--zw-ink);
  font: inherit;
}
.submit {
  align-self: end;
  padding: 0.55rem 1rem;
  border: none;
  border-radius: 8px;
  background: var(--zw-primary);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.submit:hover {
  filter: brightness(1.05);
}
</style>
