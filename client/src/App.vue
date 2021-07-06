<template>
  <main class="container h-screen mx-auto overflow-hidden">
    <header>
      <h1 class="text-xl text-center">Beiboot Client</h1>
      <SeachBar />
    </header>
      <div class="grid max-h-full grid-cols-1 grid-rows-2 pt-2 pb-32 md:grid-rows-1 md:grid-cols-3 lg:grid-cols-2">
        <DirectoryListing
          class="h-full overflow-y-scroll md:col-span-2 lg:col-span-1"
        ></DirectoryListing>
        <SideBar />
      </div>
    <InfoBar />
  </main>
</template>

<script>
import DirectoryListing from "./components/DirectoryListing.vue";
import SeachBar from "./components/Search/SearchBar.vue";
import InfoBar from "./components/InfoBar.vue";
import SideBar from "./components/SideBar.vue";

export default {
  components: {
    DirectoryListing,
    SideBar,
    SeachBar,
    InfoBar
  },
  setup() {

    return {};
  },
};
</script>
