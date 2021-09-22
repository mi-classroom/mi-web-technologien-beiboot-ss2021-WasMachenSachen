<template>
  <Json
    v-for="(item, key, index) in json"
    :name="key"
    :value="item"
    :open="true"
    :key="index"
  />
</template>

<script setup>
import emitter from "tiny-emitter/instance";
import axios from "axios";
import { ref } from "@vue/reactivity";

defineProps({
  open: { type: Boolean, default: false },
});

let json = ref(null);
async function getJson(url) {
  try {
    const response = await axios.get(url);
    json.value = response.data;
  } catch (error) {
    console.error(error);
  }
}
emitter.on("updateJsonViewer", function (url) {
  getJson(url);
});
</script>
