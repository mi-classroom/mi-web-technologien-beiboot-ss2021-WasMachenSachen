<template>
  <main class="h-screen mx-auto overflow-hidden text-white font-primary">
    <div
      class="
        grid
        max-h-full
        grid-cols-1 grid-rows-2
        md:grid-rows-1 md:grid-cols-3
        lg:grid-cols-4
        h-full
        bg-darkest
      "
    >
      <div class="h-full md:col-span-1 px-4 bg-darker overflow-y-auto">
        <header>
          <h1 class="text-2xl text-accent font-light mt-6 mb-4">cda_</h1>
          <SearchBar class="mb-5" />
          <FolderStats />
        </header>
        <DirectoryListing class="overflow-y-auto pb-8"></DirectoryListing>
      </div>
      <div class="md:col-span-2 lg:col-span-3 overflow-y-scroll"><SideBar/></div>
    </div>
  </main>
</template>

<script setup>

</script>
