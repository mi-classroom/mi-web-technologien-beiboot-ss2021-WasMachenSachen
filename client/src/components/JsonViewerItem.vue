<template>
  <div class="p-2 font-mono">
    <div v-if="typeof value === 'object'">
      <button class="flex items-center text-accent" @click="open = !open">
        "{{ name }}"<span>: {</span>
      </button>
      <ul
        v-if="open"
        class="pl-1"
        :class="{ 'ml-2.5 border-l border-dotted': open }"
      >
        <li v-for="(item, key, index) in value" :key="index">
          <Json :value="item" :name="key" :open="false" />
        </li>
      </ul>
      <span class="pl-2 text-accent">}</span>
    </div>
    <div v-else class="flex ml-4">
      <span class="font-bold text-gray-300">"{{ name }}":</span>
      <span class="ml-4 text-gray-300">{{ value }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const props = defineProps({
  name: { required: true },
  value: { required: true },
  open: { type: Boolean, default: false },
});

const open = ref(props.open);
</script>
