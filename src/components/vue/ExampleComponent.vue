<script setup>
import { onMounted } from 'vue';
import { useSomeStore } from '@/components/vue/stores/store.ts';
const props = defineProps({
  message: {
    type: String,
    default: ''
  }
});
const store = useSomeStore();
store.updateMessage('vue.js state updated.');
onMounted(() => {
  console.log(store.getMessage);
});
</script>

<template>
  <p>{{ props.message }}</p>
</template>
