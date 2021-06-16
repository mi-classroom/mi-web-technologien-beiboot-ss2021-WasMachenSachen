<template>
  <Json v-for="(item, key) in json" :name="key" :value="item" :open="true" />
</template>

<script>
import Json from "./Json.vue";
import emitter from "tiny-emitter/instance";
import axios from "axios";
import { ref } from '@vue/reactivity';

export default {
  props: {
    open: { type: Boolean, default: false },
  },
  components: { Json },
  setup() {
    let json = ref();
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
    return { json };
  },
};
</script>
