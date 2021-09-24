<template>
  <div class="relative h-full">
    <div class="h-full">
      <img
        :src="newImgUrl"
        alt=""
        class="w-auto max-h-full mx-auto"
        id="imageWrapper"
        @load="parseImageSize"
      />
    </div>
    <div class="absolute w-full bg-dark bottom-0 px-5 pt-10 pb-5">
      <div class="text-light flex justify-between">
        <div>
          <span class="flex items-center">
            <span class="material-icons mr-2">crop_landscape</span>
            <span>Größe: {{ imgSize.x }}x{{ imgSize.y }}</span>
          </span>
          <span class="flex items-center"
            ><span class="material-icons mr-2 text-accent">list</span
            ><span>IPTC: -</span></span
          >
        </div>
        <div>
          <button
            class="material-icons"
            @click="editMode = true"
            v-show="!editMode"
          >
            edit
          </button>
        </div>
      </div>
      <div class="" v-if="editMode">
        <form novalidate @submit.prevent="submitEdits">
          <div class="grid grid-cols-2 gap-x-5">
            <template v-for="(imgTag, index) in imgData" :key="index">
              <InputCustom
                :inputName="imgTag.tag + '_de'"
                :inputTitle="imgTag.label.de"
                :inputMax="imgTag.max"
                :inputType="imgTag.max > 32 ? 'textfield' : 'text'"
                :inputContent="imgTag.content.de"
                @change="composeInputContent"
              />
              <InputCustom
                :inputName="imgTag.tag + '_en'"
                :inputTitle="imgTag.label.en"
                :inputMax="imgTag.max"
                :inputType="imgTag.max > 32 ? 'textfield' : 'text'"
                :inputContent="imgTag.content.en"
                @change="composeInputContent"
              />
            </template>
          </div>
          <footer class="mb-5 mt-5 flex justify-between">
            <!-- save button -->
            <button
              class="
                py-2
                px-4
                bg-accent
                text-darkest
                rounded-md
                flex
                items-center
              "
              type="submit"
              :disabled="loading"
              :class="{ 'cursor-not-allowed': loading }"
            >
              <span class="material-icons mr-2"> save </span>
              <span>speichern</span>
            </button>

            <button
              class="
                py-2
                px-4
                bg-accent
                text-darkest
                rounded-md
                flex
                items-center
              "
              @click.prevent="editMode = false"
            >
              <span class="material-icons mr-2"> cancel </span>
              <span>schließen</span>
            </button>
          </footer>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import exifr from "exifr/dist/full.esm.mjs";
import { ref, reactive } from "vue";
import emitter from "tiny-emitter/instance";
import { config } from "../config";
import axios from "axios";

let newImgUrl = ref("");
let imgTags = reactive({});
let imgData = ref(null);
let imgSize = ref({});
const editMode = ref(false);
const editUrl = ref("");
const loading = ref(false);

async function parseImageTags(url) {
  imgData.value = config.imgTags;
  let tags = imgData.value.map((a) => a.tag);
  imgTags.value = await exifr.parse(url, {
    iptc: { pick: tags },
    exif: { pick: tags },
  });
  imgData.value.forEach((el) => {
    el.content.de = "";
    el.content.en = "";
  });
  for (const [key, value] of Object.entries(imgTags.value)) {
    imgData.value.forEach((el) => {
      if (el.tag === key) {
        /* if it contains (valid) JSON, divide between languages. german at index 0, english at 1 */
        if (isValidJSON(value)) {
          el.content.de = JSON.parse(value)[0];
          el.content.en = JSON.parse(value)[1];
        } else {
          el.content.de = value;
          el.content.en = value;
        }
      }
    });
  }
}
function composeInputContent(val) {
  imgData.value.forEach((el) => {
    if (
      val &&
      el.tag === val.tag &&
      val.lang === "de" &&
      el.content.de === el.content.en
    ) {
      /* no difference between german and englisch, eg: englisch = german */
      el.content.en = val.content;
      el.content.de = val.content;
    } else if (val && el.tag === val.tag && val.lang === "en") {
      /* only englisch is changed, eg: englisch != german */
      el.content.en = val.content;
    } else if (val && el.tag === val.tag && val.lang === "de") {
      /* only german is changed, eg: englisch != german */
      el.content.de = val.content;
    }
  });
}
function parseImageSize() {
  let img = document.querySelector("#imageWrapper");
  if (img) {
    imgSize.value = { x: img.naturalWidth, y: img.naturalHeight };
  }
}
const isValidJSON = (str) => {
  if (typeof str !== "string") return false;
  try {
    const result = JSON.parse(str);
    const type = Object.prototype.toString.call(result);
    return type === "[object Object]" || type === "[object Array]";
  } catch (err) {
    return false;
  }
};
function composeImageFolderPath(path) {
  let newPath = path.split(/[\/,\\]+/);
  return newPath[2];
}
function getInputContent(tagName) {
  if (imgTags.value && imgTags.value.hasOwnProperty(tagName))
    return imgTags.value[tagName];
  else return "";
}
function setImageFolderPath(path) {
  editUrl.value = config.baseUrl + "/edit/" + composeImageFolderPath(path);
}
emitter.on("updateImageViewer", (url, path) => {
  newImgUrl.value = url;
  parseImageTags(url);
  setImageFolderPath(path);
});
emitter.on("closeImageViewer", () => {
  newImgUrl.value = "";
  imgTags.value = {};
  imgData.value = null;
  imgSize.value = {};
  editMode.value = false;
  editUrl.value = "";
});
async function submitEdits(submitEvent) {
  let params = {};
  imgData.value.forEach((el) => {
    if (el.content.de != el.content.en) {
      params[el.tag] = JSON.stringify([el.content.de, el.content.en]);
    } else {
      params[el.tag] = el.content.de;
    }
  });
  /* send form values via query params e.g: /edit/artefaktId?param=value */
  try {
    const url = editUrl.value;
    loading.value = true;
    const response = await axios.post(url, null, { params });
    loading.value = false;
    console.log(response);
    editMode.value = false;
  } catch (error) {
    loading.value = false;
    console.log(error);
  }
}
</script>
