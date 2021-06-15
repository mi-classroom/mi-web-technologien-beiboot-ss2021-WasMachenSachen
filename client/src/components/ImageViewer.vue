<template>
  <div class="grid grid-rows-3">
    <div class="row-span-2"><img :src="newImgUrl" alt="" class="w-auto max-h-full mx-auto" /></div>
    <div>
      <ul class="mt-5">
        <li v-for="(value, name, index) in imgTags.value" :key="index">
          {{ name }}: {{ value }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import exifr from "exifr/dist/full.esm.mjs";
import { ref, reactive } from "vue";
import emitter from "tiny-emitter/instance";
import { config } from "../config";

export default {
  setup() {
    let newImgUrl = ref("");
    let imgTags = reactive({});
    async function parseImageTags(url) {
      imgTags.value = await exifr.parse(url, {
        iptc: true,
        pick: [...config.imgTags],
      });
    }
    emitter.on("updateImageViewer", function (url) {
      newImgUrl.value = url;
      parseImageTags(url);
    });
    return { parseImageTags, newImgUrl, imgTags };
  },
};
</script>
