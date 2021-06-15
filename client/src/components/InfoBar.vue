<template>
  <div class="absolute inset-x-0 bottom-0 w-full h-6 py-1 bg-white border-t-2">
    <div class="flex flex-wrap items-center max-w-full overflow-hidden">
      <span
        v-for="(item, index) in path"
        :key="index"
        class="flex items-center"
      >
        <FolderIcon
          class="w-4 h-4 text-blue-500"
          v-if="index != path.length - 1"
        />
        <PhotographIcon
          class="w-4 h-4 text-black"
          v-if="index == path.length - 1"
        />
        <span class="text-xs truncate">{{ item }}</span>
        <ChevronRightIcon
          class="w-4 h-4 text-black transform"
          v-if="index != path.length - 1"
        />
      </span>
    </div>
  </div>
</template>

<script>
import {
  FolderIcon,
  ChevronRightIcon,
  PhotographIcon,
} from "@heroicons/vue/solid";
import emitter from "tiny-emitter/instance";
import { ref } from "@vue/reactivity";

export default {
  components: { FolderIcon, ChevronRightIcon, PhotographIcon },
  setup() {
    let path = ref([]);
    emitter.on("updateInfoBar", function (url) {
      path.value = url.split("/");
    });
    return { path };
  },
};
</script>
