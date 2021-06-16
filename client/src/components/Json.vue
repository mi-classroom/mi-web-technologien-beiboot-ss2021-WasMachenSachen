<template>
    <div class="p-1 font-mono">
      <div v-if="typeof value === 'object'">
        <button class="flex items-center" @click="open = !open">
          "{{ name }}"<span>: {</span>
        </button>
        <ul
          v-if="open"
          class="pl-1"
          :class="{ 'ml-2.5 border-l border-dotted': open }"
        >
          <li v-for="(item, key) in value">
            <Json :value="item" :name="key" :open="false" />
          </li>
        </ul>
        <span class="pl-2">}</span>
      </div>
      <div
        v-else
        class="flex ml-4"
      >
        <span class="font-bold text-gray-500">"{{ name }}":</span>
        <span class="ml-4 text-gray-500">{{ value }}</span>
      </div>
    </div>
</template>

<script>
import { ref } from "@vue/reactivity";

export default {
  props: {
    name: { required: true },
    value: { required: true },
    open: { type: Boolean, default: false },
  },
  components: {},
  setup(props) {
    const open = ref(props.open);

    return { open };
  },
};
</script>
