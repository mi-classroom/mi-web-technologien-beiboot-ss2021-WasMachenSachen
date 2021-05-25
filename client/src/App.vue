<template>
  <main ref="main" class="h-screen overflow-hidden">
    <header ref="header">
      <h1 class="text-xl text-center">Beiboot Client</h1>
      <!-- <SeachBar /> -->
    </header>
    <div class="grid grid-cols-2">
      <DirectoryListing
        class="overflow-y-scroll"
        :style="{ height: directoryHeight + 'px' }"
      ></DirectoryListing>
      <ImageViewer></ImageViewer>
    </div>
    <!-- <InfoBar /> -->
  </main>
</template>

<script>
import DirectoryListing from "./components/DirectoryListing.vue";
import ImageViewer from "./components/ImageViewer.vue";
// import SeachBar from "./components/SearchBar.vue";
// import InfoBar from "./components/InfoBar.vue";
import { ref, onMounted, onBeforeUnmount } from "vue";

export default {
  components: {
    DirectoryListing,
    ImageViewer,
  },
  setup() {
    const main = ref(null);
    const header = ref(null);
    let directoryHeight = ref(null);
    const delay = 250;
    let timeout = false;

    onMounted(() => {
      /* set the size of directoryListing based on viewport height minus the height of the heading */
      calculateDirectoryHeight();
      /* change directoryListing height if viewport is resized */
      window.addEventListener("resize", function () {
        clearTimeout(timeout);
        /*  debounce the calculation for performance reasons:
            https://bencentra.com/code/2015/02/27/optimizing-window-resize.html
        */
        timeout = setTimeout(calculateDirectoryHeight, delay);
      });
    });
    onBeforeUnmount(() => {
      window.removeEventListener("resize", calculateDirectoryHeight);
    });
    const calculateDirectoryHeight = () => {
      let mainHeight = main.value.clientHeight;
      let headerHeight = header.value.clientHeight;
      directoryHeight.value = mainHeight - headerHeight;
    };
    return { main, header, directoryHeight };
  },
};
</script>
