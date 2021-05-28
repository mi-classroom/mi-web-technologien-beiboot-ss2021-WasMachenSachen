import { ref, computed } from "vue";
import axios from "axios";
import { config } from "../config";

const state = ref({
  directoryData: {},
  fileList: [],
});
/* STRUCTURE */
/* directoryData: {
  path: "../data",
  name: "data",
  children: [...directoryData],
  type: "directory",
}; */
/* fileList: [
  {
    path: "../data",
    name: "data",
    type: "file",
  },
]; */

const defaultDirectoryData = { directoryData: {} };

function setDirectoryData(directoryData) {
  state.value.directoryData = directoryData;
  /* save original data structure to reset later if needed */
  if (
    Object.getOwnPropertyNames(defaultDirectoryData.directoryData).length <= 0
  ) {
    defaultDirectoryData.directoryData = directoryData;
  }
}

function setFileList(fileList) {
  state.value.fileList = fileList;
}
function resetDirectoryData() {
  setDirectoryData(defaultDirectoryData.directoryData);
}
async function loadDirectoryData() {
  try {
    const response = await axios.get(`${config.baseUrl}/dir-structure/base`);
    console.log("Directory structure loaded");
    setDirectoryData(response.data);
  } catch (error) {
    console.error(error);
  }
}

const getDirectoryData = computed(() => state.value.directoryData);

const getFileList = computed(() => state.value.fileList);

export const sharedState = {
  setDirectoryData,
  loadDirectoryData,
  getDirectoryData,
  resetDirectoryData,
  setFileList,
  getFileList,
};
