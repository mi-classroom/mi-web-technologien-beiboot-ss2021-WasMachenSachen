<template>
  <button
    class="flex items-center pr-1"
    @click="setJsonViewer"
    v-if="data.extension === '.json'"
  >
    <InformationCircleIcon class="w-5 h-5 text-blue-500" />
    <span class="pl-1 whitespace-nowrap">
      {{ data.name }}
    </span>
  </button>
  <button class="flex items-center pr-1" @click="setImageViewer" v-else>
    <PhotographIcon class="w-5 h-5 text-blue-500" />
    <span class="pl-1 whitespace-nowrap">
      {{ data.name }}
    </span>
  </button>
</template>

<script>
import { PhotographIcon, InformationCircleIcon } from "@heroicons/vue/outline";
import emitter from "tiny-emitter/instance";
import { config } from "../config";

export default {
  components: {
    PhotographIcon,
    InformationCircleIcon,
  },
  props: {
    data: Object,
  },
  setup(props) {
    function setImageViewer() {
      let imgUrl = `${config.baseUrl}${props.data.path.substring(2)}`;
      emitter.emit("updateImageViewer", imgUrl, props.data.path);
      emitter.emit("changeSideBar", "image");
      setInfoBarPath();
    }
    function setJsonViewer() {
      let jsonUrl = `${config.baseUrl}${props.data.path.substring(2)}`;
      emitter.emit("updateJsonViewer", jsonUrl);
      emitter.emit("changeSideBar", "json");
      setInfoBarPath();
    }
    function setInfoBarPath() {
      let type = props.data.extension;
      emitter.emit("updateInfoBar", props.data.path.substring(3), type);
    }
    return { setImageViewer, setJsonViewer };
  },
};
</script>
