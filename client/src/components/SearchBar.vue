<template>
  <div>
    <div>
      <div class="flex items-center">
        <p class="mr-2">Nach Artefakten suchen</p>
        <button title="Hilfe anzeigen" @click="showHelp = !showHelp">
          <span class="material-icons text-accent"> help </span>
        </button>
      </div>
      <label for="file-search" class="sr-only">Nach Artefakten suchen</label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <div
          class="
            absolute
            inset-y-0
            left-0
            flex
            items-center
            pl-3
            pointer-events-none
          "
        >
          <span class="material-icons text-accent"> search </span>
        </div>
        <input
          type="text"
          name="file-search"
          id="file-search"
          class="
            block
            w-full
            px-10
            border-0 border-b-2 border-accent
            sm:text-sm
            bg-darker
          "
          placeholder="dateiname"
          v-model.trim="searchPattern"
          @focus.once="initiateSearch"
        />
        <button
          class="absolute inset-y-0 right-0 px-3"
          @click="resetSearch"
          v-show="searchPattern != ''"
        >
          <span class="material-icons text-gray-400">close</span>
        </button>
      </div>
    </div>
    <!-- Help Section -->
    <SearchBarHelp v-show="showHelp" />
  </div>
</template>

<script setup>
import { watch, ref } from "vue";
import Fuse from "fuse.js";
import { sharedState } from "../../state/state";
import { searchOptions } from "../../helper/fuse.js";

const showHelp = ref(false);
const searchPattern = ref("");
let fuseDirectory;

function resetSearch() {
  searchPattern.value = "";
  sharedState.resetDirectoryData();
  sharedState.resetDirectoryDataHistory();
}
async function initiateSearch() {
  const directoryList = sharedState.getDirectoryData;
  fuseDirectory = new Fuse(directoryList.value.children, searchOptions);
}
watch(searchPattern, (currentValue, oldValue) => {
  if (currentValue === "") {
    resetSearch();
  }
  let tempSearchResult = fuseDirectory.search(currentValue);
  let searchResult = [];
  tempSearchResult.forEach((e) => {
    searchResult.push(e.item);
  });
  let directoryData = {
    path: "../data",
    name: "data",
    children: [],
    type: "directory",
  };
  directoryData.children = searchResult;
  if (searchResult.length > 0) {
    sharedState.resetDirectoryDataHistory();
    sharedState.setDirectoryData(directoryData);
  } else if (searchResult.length <= 0 && currentValue === "") {
    sharedState.resetDirectoryData();
  }
});
</script>
