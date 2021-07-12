<template>
  <div class="grid grid-rows-3" v-if="newImgUrl != ''">
    <div class="row-span-2">
      <img :src="newImgUrl" alt="" class="w-auto max-h-full mx-auto" />
    </div>
    <div class="flex justify-between" v-if="editMode === false">
      <ul class="mt-5">
        <li v-for="(value, name, index) in imgTags.value" :key="index">
          {{ name }}: {{ value }}
        </li>
      </ul>
      <div class="mt-5">
        <button @click="editMode = true">
          <PencilAltIcon class="w-5 h-5 text-blue-500" />
        </button>
      </div>
    </div>
    <div v-else>
      <form novalidate @submit.prevent="submitEdits">
        <template v-for="(value, name, index) in imgTags.value" :key="index">
          <ImageViewerEditMetaInput
            :metaName="name"
            :metaValue="value"
            :inputId="index"
          />
        </template>
        <div class="flex justify-end">
          <button
            class="inline-flex items-center px-3 py-2 mr-1 text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            type="submit"
          >
            Speichern
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import exifr from "exifr/dist/full.esm.mjs";
import { ref, reactive } from "vue";
import emitter from "tiny-emitter/instance";
import { config } from "../config";
import { PencilAltIcon } from "@heroicons/vue/outline";
import axios from "axios";

export default {
  components: { PencilAltIcon },
  setup() {
    let newImgUrl = ref("");
    let imgTags = reactive({});
    const editMode = ref(false);
    const editUrl = ref("");
    async function parseImageTags(url) {
      imgTags.value = await exifr.parse(url, {
        iptc: { pick: [...config.imgTags] },
        exif: { pick: [...config.imgTags] },
      });
    }
    function composeImageFolderPath(path) {
      let newPath = path.split("/");
      return newPath[2];
    }
    function setImageFolderPath(path) {
      editUrl.value = config.baseUrl + "/edit/" + composeImageFolderPath(path);
    }
    emitter.on("updateImageViewer", function (url, path) {
      newImgUrl.value = url;
      parseImageTags(url);
      setImageFolderPath(path);
    });
    async function submitEdits(submitEvent) {
      /* get form values */
      const params = Object.fromEntries(
        new FormData(submitEvent.srcElement).entries()
      );
      /* send form values via query params e.g: /edit/artefaktId?param=value */
      try {
        const url = editUrl.value;
        const response = await axios.post(url, null, { params });
        console.log(response);
        editMode.value = false;
      } catch (error) {
        console.log(error);
      }
    }
    return {
      parseImageTags,
      newImgUrl,
      imgTags,
      editMode,
      editUrl,
      submitEdits,
    };
  },
};
</script>
