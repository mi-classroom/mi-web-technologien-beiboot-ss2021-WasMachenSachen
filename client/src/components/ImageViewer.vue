<template>
  <div>
    <img :src="newImgUrl" alt="" class="max-h-96" />
    <ul class="mt-5">
      <li v-for="(value, name, index) in imgTags.value" :key="index">
        {{ name }}: {{ value }}
      </li>
    </ul>
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
