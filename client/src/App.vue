<template>
  <main>
    <h1 class="m-10 text-xl text-center">Beiboot Client</h1>
    <div class="grid grid-cols-2">
      <DirectoryListing></DirectoryListing>
      <ImageViewer></ImageViewer>
    </div>
  </main>
</template>

<script>
import DirectoryListing from "./components/DirectoryListing.vue";
import ImageViewer from "./components/ImageViewer.vue";

export default {
  components: {
    DirectoryListing,
    ImageViewer,
  },
};
</script>
