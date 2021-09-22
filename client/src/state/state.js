import { ref, computed } from "vue";
import axios from "axios";
import { config } from "../config";

const state = ref({
  directoryData: {},
  directoryDataHistory: [],
});
/* STRUCTURE */
/* directoryData: {
  path: "../data",
  name: "data",
  children: [...directoryData],
  type: "directory",
}; */

const defaultDirectoryData = { directoryData: {} };

function setDirectoryData(directoryData) {
  state.value.directoryData = directoryData;
  setDirectoryDataHistory(directoryData);
  /* save original data structure to reset later if needed */
  if (
    Object.getOwnPropertyNames(defaultDirectoryData.directoryData).length <= 0
  ) {
    defaultDirectoryData.directoryData = directoryData;
  }
}
function setDirectoryDataHistory(directoryDataHistory) {
  /* prevent doubles in Histroy */
  if (
    state.value.directoryDataHistory.length > 0 &&
    state.value.directoryDataHistory[
      state.value.directoryDataHistory.length - 1
    ].path === directoryDataHistory.path
  )
    return;
  else {
    state.value.directoryDataHistory.push(directoryDataHistory);
  }
}
function removeDirectoryDataHistory() {
  state.value.directoryDataHistory.pop();
}

function resetDirectoryData() {
  setDirectoryData(defaultDirectoryData.directoryData);
}
function resetDirectoryDataHistory() {
  state.value.directoryDataHistory = [];
}
async function loadDirectoryData() {
  try {
    const response = await axios.get(`${config.baseUrl}/dir-structure/base`);
    setDirectoryData(response.data);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

const getDirectoryData = computed(() => state.value.directoryData);

const getDirectoryDataHistory = computed(
  () => state.value.directoryDataHistory
);

export const sharedState = {
  setDirectoryData,
  loadDirectoryData,
  resetDirectoryData,
  setDirectoryDataHistory,
  removeDirectoryDataHistory,
  resetDirectoryDataHistory,
  getDirectoryData,
  getDirectoryDataHistory,
};
