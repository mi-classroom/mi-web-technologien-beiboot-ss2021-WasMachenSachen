<template>
  <button class="flex items-center" @click="setImageViewer">
    <PhotographIcon class="w-5 h-5 text-blue-500" />
    <span class="pl-1">
      {{ data.name }}
    </span>
  </button>
</template>

<script>
import { PhotographIcon } from "@heroicons/vue/outline";
import emitter from "tiny-emitter/instance";
import { config } from "../config";

export default {
  components: {
    PhotographIcon,
  },
  props: {
    data: Object,
  },
  setup(props) {
    function setImageViewer() {
      let imgUrl = `${config.baseUrl}${props.data.path.substring(2)}`;
      emitter.emit("updateImageViewer", imgUrl);
    }
    return { setImageViewer };
  },
};
</script>
