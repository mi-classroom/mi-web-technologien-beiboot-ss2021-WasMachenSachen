<template>
  <div>
    <File v-if="data.type === 'file'" :data="data"></File>
    <button
      class="flex items-center"
      @click="isOpen = !isOpen"
      v-else-if="data.type === 'directory'"
    >
      <ChevronRightIcon
        class="w-5 h-5 text-blue-500 transform"
        :class="{ 'rotate-90': isOpen }"
      />
      <FolderIcon class="w-5 h-5 text-blue-500" />
      <span class="pl-1">
        {{ data.name }}
      </span>
    </button>
    <section v-show="isOpen" class="ml-5">
      <Directory
        v-for="(child, index) in data.children"
        :data="data.children[index]"
        :key="index"
      ></Directory>
    </section>
  </div>
</template>

<script>
import { FolderIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import { ref } from "@vue/reactivity";
import File from "./File.vue";

export default {
  components: {
    FolderIcon,
    ChevronRightIcon,
    File,
  },
  props: {
    data: Object,
  },
  setup() {
    var isOpen = ref(false);
    return {
      isOpen,
    };
  },
};
</script>
