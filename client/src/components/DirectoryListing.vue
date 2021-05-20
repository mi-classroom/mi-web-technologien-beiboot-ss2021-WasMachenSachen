<template>
  <Directory :data="dirStructure.data" :isOpen="true"></Directory>
</template>

<script>
import axios from "axios";
import { reactive } from "vue";
import { config } from "../config";
import Directory from "./Directory.vue";

export default {
  components: { Directory },
  setup() {
    const dirStructure = reactive({
      data: {
        path: "../data",
        name: "data",
        children: [],
        size: 0,
        type: "directory",
      },
    });
    async function getDirStructure() {
      try {
        const response = await axios.get(config.baseUrl);
        dirStructure.data = response.data;
      } catch (error) {
        console.error(error);
      }
    }
    getDirStructure();
    return { dirStructure, Directory };
  },
};
</script>
