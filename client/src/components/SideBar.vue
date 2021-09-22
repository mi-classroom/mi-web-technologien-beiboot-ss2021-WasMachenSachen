<template>
  <ImageViewer v-show="currentView === 'image'" />
  <div class="overflow-y-scroll p-5" v-show="currentView === 'json'">
    <JsonViewer />
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import emitter from "tiny-emitter/instance";

const currentView = ref("empty");
emitter.on("changeSideBar", function (view) {
  currentView.value = view;
});
</script>
