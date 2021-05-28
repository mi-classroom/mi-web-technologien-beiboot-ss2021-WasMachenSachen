<template>
  <div>
    <div>
      <div class="flex items-center">
        <p class="mr-2">Nach Dateien suchen</p>
        <button title="Hilfe anzeigen">
          <QuestionMarkCircleIcon
            class="w-5 h-5 text-blue-500"
            @click="showHelp = !showHelp"
          />
        </button>
      </div>
      <label for="file-search" class="sr-only">Nach Dateien suchen</label>
      <div class="relative mt-1 rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none "
        >
          <SearchIcon class="w-5 h-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          type="text"
          name="file-search"
          id="file-search"
          class="block w-full px-10 border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="dateiname"
          v-model.trim="searchPattern"
          @focus.once="initiateSearch"
        />
        <button
          class="absolute inset-y-0 right-0 px-3"
          @click="resetSearch"
          v-show="searchPattern != ''"
        >
          <XCircleIcon class="w-5 h-5 text-gray-400" />
        </button>
      </div>
    </div>
    <!-- Help Section -->
    <SearchBarHelp v-show="showHelp" />
  </div>
</template>

<script>
import {
  SearchIcon,
  QuestionMarkCircleIcon,
  XCircleIcon,
} from "@heroicons/vue/solid";
import SearchBarHelp from "./SearchBarHelp.vue";

import { watch, ref } from "vue";
import Fuse from "fuse.js";
import axios from "axios";

import { sharedState } from "../state/state";
import { config } from "../config";
import { searchOptions } from "../helper/fuse.js";

export default {
  components: {
    SearchIcon,
    QuestionMarkCircleIcon,
    XCircleIcon,
    SearchBarHelp,
  },
  setup(props) {
    var showHelp = ref(false);
    var searchPattern = ref("");
    var fuseDirectory, fuseFiles;

    function resetSearch() {
      searchPattern.value = "";
      sharedState.resetDirectoryData();
    }
    async function initiateSearch() {
      const directoryList = sharedState.getDirectoryData;
      fuseDirectory = new Fuse(directoryList.value.children, searchOptions);
      const fileList = await loadFileData();
      fuseFiles = new Fuse(fileList, searchOptions);
    }
    async function loadFileData() {
      try {
        const response = await axios.get(
          `${config.baseUrl}/dir-structure/file-list`
        );
        console.log("File structure loaded");
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
    watch(searchPattern, (currentValue, oldValue) => {
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
        sharedState.setDirectoryData(directoryData);
      } else if (searchResult.length <= 0 && currentValue === "") {
        sharedState.resetDirectoryData();
      }
      let tempSearchResult2 = fuseFiles.search(currentValue);
      let searchResult2 = [];
      tempSearchResult2.forEach((e) => {
        searchResult2.push(e.item);
      });
      if(searchResult2.length > 0){
        sharedState.setFileList(searchResult2);
      }
    });
    return { showHelp, searchPattern, resetSearch, initiateSearch };
  },
};
</script>
