<template>
  <div class="mb-8">
    <div class="border-b border-lighten mb-1 pb-2">
      <div v-if="fileCount <= 0" class="flex items-center text-light">
        <span class="material-icons"> folder_open </span>
        <span class="ml-2"> {{ directoryCount }} Verzeichnisse gefunden</span>
      </div>
      <div v-else-if="fileCount > 0" class="flex items-center text-light">
        <span class="material-icons"> image </span>
        <span class="ml-2"> {{ fileCount }} Bilder gefunden</span>
      </div>
    </div>
    <div v-if="directoryDataHistory.length > 1">
      <div class="flex items-center text-lighter">
        <span class="material-icons"> location_on </span>
        <span class="ml-2">{{
          directoryDataHistory[directoryDataHistory.length - 1].path.split(
            "/"
          )[2]
        }}</span>
      </div>
      <div class="text-light">
        <a
          class="flex items-center"
          :href="`${config.baseUrl}/download/${
            directoryDataHistory[directoryDataHistory.length - 1].path.split(
              '/'
            )[2]
          }`"
          target="_blank"
        >
          <span class="material-icons"> download </span>
          <span class="ml-2">Download Folder</span>
        </a>
      </div>
    </div>
    <div v-else class="h-12"></div>
  </div>
</template>

<script setup>
import { sharedState } from "../state/state";
import { config } from "../config";
import { computed } from "@vue/runtime-core";

const directoryDataHistory = sharedState.getDirectoryDataHistory;
const directoryCount = computed(() => {
  let count = 0;
  if (
    directoryDataHistory.value[directoryDataHistory.value.length - 1]?.children
      .length > 0
  ) {
    directoryDataHistory.value[
      directoryDataHistory.value.length - 1
    ].children.forEach((el) => {
      if (el.type === "directory") count++;
    });
  }
  return count;
});
const fileCount = computed(() => {
  let count = 0;
  if (
    directoryDataHistory.value[directoryDataHistory.value.length - 1]?.children
      .length > 0
  ) {
    directoryDataHistory.value[
      directoryDataHistory.value.length - 1
    ].children.forEach((el) => {
      if (el.type === "file" && el.extension != ".json") count++;
    });
  }
  return count;
});
</script>
