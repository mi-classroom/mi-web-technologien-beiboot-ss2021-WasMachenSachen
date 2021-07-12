const fs = require("fs");

function getFileList(currentPath, filePattern) {
  let fileList = [];
  let pattern = filePattern;
  const files = fs.readdirSync(currentPath, { withFileTypes: true });
  files.forEach((file) => {
    const path = currentPath + "/" + file.name;
    const name = file.name;
    if (file.isDirectory()) {
      fileList.push(...getFileList(path));
    } else if (new RegExp(pattern).test(path)) {
      /* somehow .DS_Store is not removed based on RegExp.. hard coding it in for now */
      if (!name.includes(".DS_Store")) {
        fileList.push({ path, name, type: "file" });
      }
    }
  });
  return fileList;
}

module.exports = getFileList;
