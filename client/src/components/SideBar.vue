<template>
  <ImageViewer v-show="currentView == 'image'" />
  <div class="overflow-y-scroll" v-show="currentView == 'json'">
    <JsonViewer />
  </div>
</template>

<script>
import JsonViewer from "./JsonViewer.vue";
import ImageViewer from "./ImageViewer.vue";
import { reactive, ref } from '@vue/reactivity';
import emitter from "tiny-emitter/instance";

export default {
  props: {},
  components: { JsonViewer, ImageViewer },
  setup(props) {
    const currentView = ref('image')
    emitter.on("changeSideBar", function (view) {
      currentView.value = view;
    });
    return {currentView};
  },
};
</script>
