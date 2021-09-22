<template>
  <div class="flex flex-col my-4" v-if="inputType === 'text'">
    <input
      type="text"
      :name="inputName"
      :id="inputName"
      class="
        bg-medium
        border-0
        focus:outline-none focus:ring-transparent
        bg-no-repeat
        status-border
      "
      :maxlength="inputMax"
      v-model="inputContent"
      @change="emit('change')"
    />
    <label :for="inputName" class="text-light pt-2">{{ inputTitle }}</label>
  </div>
  <div class="flex flex-col my-4" v-else>
    <textarea
      :name="inputName"
      :id="inputName"
      class="
        bg-medium
        border-0
        focus:outline-none focus:ring-transparent
        bg-no-repeat
        status-border
      "
      :maxlength="inputMax"
      v-model="inputContent"
      @change="emit('change')"
    />
    <label :for="inputName" class="text-light pt-2">{{ inputTitle }}</label>
  </div>
</template>

<script setup>
import { defineProps, defineEmit, ref, watch } from "@vue/runtime-core";

const props = defineProps({
  inputName: String,
  inputTitle: String,
  inputMax: Number,
  inputType: { type: String, default: "text" },
  inputContent: { type: String },
});

const emit = defineEmit(["change"]);

const percentage = ref("0%");
const statusBorderColor = ref("var(--accent)");

/* watcher. syntax so strange da eine prop gewatched wird und keine ref. */
watch(
  () => props.inputContent,
  (newVal) => {
    composeInputBorder(newVal);
    emit("change", {
      content: newVal,
      tag: props.inputName.slice(0, props.inputName.length - 3),
      lang: props.inputName.slice(-2),
    });
  }
);
composeInputBorder(props.inputContent);
function composeInputBorder(content) {
  let tempPercentage = Math.round((100 * content.length) / props.inputMax);
  percentage.value = `${tempPercentage}%`;
  statusBorderColor.value =
    tempPercentage >= 95 ? "var(--error)" : "var(--accent)";
}
</script>

<style scoped>
.status-border {
  background-image: linear-gradient(
    to right,
    v-bind(statusBorderColor) v-bind(percentage),
    var(--light) 0%
  );
  background-position: 0 calc(100% + 3px), 0 0;
  background-size: 100% 6px;
}
</style>
