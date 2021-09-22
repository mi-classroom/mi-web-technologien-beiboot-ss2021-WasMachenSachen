/* https://exiftool.org/TagNames/IPTC.html */
/*
multilanguage is saved via stringified array, therefore at least 9 chars are blocked:
'["...","..."]'
 */
const jsonStringifySize = 9;

export const config = {
  baseUrl: "http://localhost:3030",
  imgTags: [
    {
      tag: "Headline",
      label: { de: "Titel", en: "Title" },
      content: { de: "", en: "" },
      max: 256 - jsonStringifySize,
    },
    {
      tag: "ImageDescription",
      label: { de: "Dateiart / Beschreibung", en: "Type / Description" },
      content: { de: "", en: "" },
      max: 100 - jsonStringifySize,
    },
    {
      tag: "Writer",
      label: { de: "Autor / Rechte", en: "Author / Copyright" },
      content: { de: "", en: "" },
      max: 32 - jsonStringifySize,
    },
    {
      tag: "Source",
      label: { de: "Quelle", en: "Source" },
      content: { de: "", en: "" },
      max: 32 - jsonStringifySize,
    },
  ],
};
