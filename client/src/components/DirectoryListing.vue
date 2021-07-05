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
    <Divider v-if="fileList.length > 0" text="Ordner" />
    <Directory
      v-for="(child, index) in dirStructure.children"
      :key="index"
      :data="dirStructure.children[index]"
      :isOpen="false"
    ></Directory>
    <div v-if="fileList.length > 0">
      <Divider text="Bilder" />
      <File v-for="n in resultSize" :data="fileList[n - 1]" :key="n"></File>
      <div class="flex justify-between mt-5">
        <p>{{ resultSize }} von {{ fileList.length }} Ergebnissen</p>
        <button @click="increaseResultList(10)">Mehr anzeigen</button>
      </div>
    </div>
  </div>
</template>

<script>
import Directory from "./Directory.vue";
import File from "./File.vue";
import Divider from "./Divider.vue";
import { sharedState } from "../state/state";
import { ref } from "@vue/reactivity";
import { watch } from "@vue/runtime-core";

export default {
  components: { Directory, File, Divider },
  setup() {
    const fileList = sharedState.getFileList;
    let resultSize = ref(0);
    let initalLoadingSuccess = ref(true);
    /* Initiate loading of directory Structure */
    async function initalDirectoryLoading() {
      initalLoadingSuccess.value = await sharedState.loadDirectoryData();
    }
    initalDirectoryLoading();
    const dirStructure = sharedState.getDirectoryData;

    function increaseResultList(addition) {
      let newResultSize =
        resultSize.value + addition > fileList.value.length
          ? fileList.value.length
          : resultSize.value + addition;
      resultSize.value = newResultSize;
    }
    watch(fileList, (currentValue, oldValue) => {
      if (
        currentValue.length &&
        currentValue.length > 0 &&
        resultSize.value === 0
      ) {
        increaseResultList(40);
      }
    });
    function reload() {
      location.reload();
    }
    return {
      dirStructure,
      fileList,
      resultSize,
      increaseResultList,
      reload,
      initalLoadingSuccess,
    };
  },
};
</script>
