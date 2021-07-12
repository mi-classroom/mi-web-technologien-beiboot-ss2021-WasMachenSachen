<template>
  <div class="w-2/3 my-4">
    <!-- <label :for="inputId" class="block text-sm font-medium text-gray-700">
      {{inputId}}
    </label> -->
    <div class="flex mt-1 rounded-md shadow-sm">
      <span class="inline-flex items-center px-3 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
        {{metaName}}
      </span>
      <input type="text" :name="metaName" :id="metaName" class="flex-1 block w-full min-w-0 px-3 py-1.5 text-sm text-right border-gray-300 rounded-none rounded-r-md focus:ring-blue-500 focus:border-blue-500" :placeholder="metaValue" />
    </div>
  </div>
</template>


<script>
export default {
  props: {
    metaName: String,
    metaValue: String,
    inputId: Number,
  },
  components: {},
  setup(props) {
    return {};
  },
};
</script>
