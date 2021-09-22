<template>
  <div>
    <div class="my-5" v-if="!initalLoadingSuccess">
      <p>
        Fehler beim Laden der Ordnerstruktur!
        <button
          @click="reload()"
          class="
            inline-flex
            items-center
            px-3
            py-1.5
            border border-transparent
            text-xs
            font-medium
            rounded-full
            shadow-sm
            text-white
            bg-indigo-600
            hover:bg-indigo-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-indigo-500
          "
        >
          Retry
        </button>
      </p>
    </div>
    <!-- Back Button -->
    <div>
      <button
        @click="back"
        v-if="directoryDataHistory.length > 1"
        class="flex items-center"
      >
        <span class="material-icons text-accent"> chevron_left </span
        ><span class="pl-2">...</span>
      </button>
      <span v-else class="h-5 block"></span>
    </div>

    <Directory
      v-for="(child, index) in dirStructure.children"
      :key="index"
      :data="dirStructure.children[index]"
    ></Directory>
  </div>
</template>

<script setup>
import { sharedState } from "../state/state";
import { ref } from "@vue/reactivity";
import emitter from "tiny-emitter/instance";

let resultSize = ref(0);
let initalLoadingSuccess = ref(true);
/* Initiate loading of directory Structure */
async function initalDirectoryLoading() {
  initalLoadingSuccess.value = await sharedState.loadDirectoryData();
}
initalDirectoryLoading();

const dirStructure = sharedState.getDirectoryData;
const directoryDataHistory = sharedState.getDirectoryDataHistory;

function reload() {
  location.reload();
}
function back() {
  emitter.emit("changeSideBar", "empty");
  emitter.emit("closeImageViewer");
  sharedState.removeDirectoryDataHistory();
  sharedState.setDirectoryData(
    directoryDataHistory.value[directoryDataHistory.value.length - 1]
  );
}
</script>
