const express = require("express");
const router = express.Router();
const path = require("path");
const exiftool = require("node-exiftool");
const exiftoolBin = require("dist-exiftool");
const ep = new exiftool.ExiftoolProcess(exiftoolBin);

const getFileList = require("../helper");
const filePattern = ".(jpg|jpeg)";

/* stolen from here: https://coderwall.com/p/urxpsa/remove-falsy-values-or-empty-strings-from-javascript-objects */
const removeEmptyStrings = (obj) => {
  let newObj = {};
  Object.keys(obj).forEach((prop) => {
    if (obj[prop] !== "") {
      newObj[prop] = obj[prop];
    }
  });
  return newObj;
};

async function editImageData(imgUrls, data) {
  let editResult = [];
  await ep.open();
  try {
    for (let i = 0; i < imgUrls.length; i++) {
      const file = imgUrls[i];
      let result = await ep.writeMetadata(
        path.join(__dirname, `../${file.path}`),
        data,
        ["overwrite_original", "codedcharacterset=utf8"]
      );
      editResult.push(result);
    }
  } catch (error) {
    // editResult.push(error);
    console.log(error);
  }
  await ep.close();
  /* TODO: overview how many files have changed */
  return editResult;
}
function composeIptcDataObject(queryParams) {
  /* IPTC tag names are different then names readed by EXIFR, therefore we need to map these so we can change the IPTC values */
  /* IPTC tag names: https://www.sno.phy.queensu.ca/~phil/exiftool/TagNames/IPTC.html */
  const iptcTags = [
    { name: "Country", iptcName: "Country-PrimaryLocationName" },
    { name: "Writer", iptcName: "Writer-Editor" },
    { name: "ApplicationRecordVersion", iptcName: "ApplicationRecordVersion" },
  ];
  let iptcDataObject = {};
  Object.keys(queryParams).forEach(function (key) {
    /* check if queryParams key is in iptcTags */
    iptcTags.forEach((el) => {
      if (key === el.name) {
        /*
        build object with correct key and providet value
        from this: { Country: 'Germany', Writer: 'Mister X' }
        to this: {'Country-PrimaryLocationName': 'Germany', 'Writer-Editor': 'Mister X' }
        */
        iptcDataObject[el.iptcName] = queryParams[key];
      }
    });
  });
  return iptcDataObject;
}

router.post("/:artefaktId", async (req, res) => {
  const artefaktId = req.params.artefaktId;
  /* remove empty strings in queryParams */
  const queryParams = removeEmptyStrings(req.query);
  /* iptc-tag names */
  const data = composeIptcDataObject(queryParams);
  /* get all images in folder(name: artefaktId) and subfolders */
  const fileList = getFileList(`../data/${artefaktId}`, filePattern);
  const results = await editImageData(fileList, data);
  res.send(results);
});
module.exports = router;
