<template>
  <div>
    <Divider v-if="fileList.length > 0" text="Ordner" />
    <Directory
      v-for="(child, index) in dirStructure.children"
      :key="index"
      :data="dirStructure.children[index]"
      :isOpen="false"
    ></Directory>
    <div v-if="fileList.length > 0">
      <Divider text="Bilder" />
      <File v-for="n in resultSize" :data="fileList[n]" :key="n"></File>
      <div class="flex justify-between mt-5">
        <p>{{ resultSize }} von {{ fileList.length }} Ergebnissen</p>
        <button @click="increaseResultList">Mehr anzeigen</button>
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

export default {
  components: { Directory, File, Divider },
  setup() {
    const fileList = sharedState.getFileList;
    let resultSize = ref(40);
    /* Initiate loading of directory Structure */
    sharedState.loadDirectoryData();
    const dirStructure = sharedState.getDirectoryData;

    function increaseResultList() {
      let newResultSize =
        resultSize.value + 10 > fileList.value.length
          ? fileList.value.length - 1
          : resultSize.value + 10;
      resultSize.value = newResultSize;
    }
    return { dirStructure, fileList, resultSize, increaseResultList };
  },
};
</script>
