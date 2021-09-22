<template>
  <div>
    <File v-if="data.type === 'file'" :data="data"></File>
    <button
      class="flex items-center pr-1"
      @click="getFolderContent(data.path, data.children)"
      v-else-if="data.type === 'directory'"
    >
      <span class="material-icons text-accent w-5 h-5"> folder_open </span>
      <span class="pl-2 whitespace-nowrap">
        {{ data.name }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { config } from "../config";
import axios from "axios";
import { sharedState } from "../state/state";

const props = defineProps({
  data: Object,
});

function openFolder() {
  sharedState.setDirectoryData(directoryData);
}
async function getFolderContent(path, childs) {
  if (childs.lenght > 0) sharedState.setDirectoryData(childs);
  else {
    try {
      const url = `${config.baseUrl}/dir-structure/custom?path=${path}`;
      const response = await axios.get(url);
      sharedState.setDirectoryData(response.data);
    } catch (error) {
      console.error(error);
    }
  }
}
</script>
