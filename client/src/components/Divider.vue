<template>
  <div class="relative my-0.5">
    <div class="absolute inset-0 flex items-center">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex justify-center">
      <span class="px-2 text-sm text-gray-500 bg-white"> {{ text }} </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
  },
};
</script>
