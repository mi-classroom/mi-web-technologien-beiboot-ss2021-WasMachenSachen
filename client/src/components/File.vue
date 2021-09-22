<template>
  <button
    class="flex items-center pr-1"
    @click="setJsonViewer"
    v-if="data.extension === '.json'"
  >
    <span class="material-icons text-accent"> description </span>
    <span class="pl-1 whitespace-nowrap">
      {{ data.name }}
    </span>
  </button>
  <button class="flex items-center pr-1" @click="setImageViewer" v-else>
    <span class="material-icons text-accent"> image </span>
    <span class="pl-1 whitespace-nowrap">
      {{ data.name }}
    </span>
  </button>
</template>

<script setup>
import emitter from "tiny-emitter/instance";
import { config } from "../config";

const props = defineProps({
  data: Object,
});

function setImageViewer() {
  let imgUrl = `${config.baseUrl}${props.data.path.substring(2)}`;
  emitter.emit("updateImageViewer", imgUrl, props.data.path);
  emitter.emit("changeSideBar", "image");
}
function setJsonViewer() {
  let jsonUrl = `${config.baseUrl}${props.data.path.substring(2)}`;
  emitter.emit("updateJsonViewer", jsonUrl);
  emitter.emit("changeSideBar", "json");
}
</script>
