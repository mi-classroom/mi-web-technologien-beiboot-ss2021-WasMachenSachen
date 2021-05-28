const searchOptions = {
  // isCaseSensitive: true,
  shouldSort: true,
  minMatchCharLength: 2,
  useExtendedSearch: false,
  // includeScore: false,
  // includeMatches: false,
  /* When true, each record in the result set will include the indices of the matched characters. These can consequently be used for highlighting purposes.*/
  // findAllMatches: false,
  // location: 0,
  // threshold: 0.6,
  // distance: 100,
  // ignoreLocation: false,
  // ignoreFieldNorm: false,
  keys: ["name"],
};

export { searchOptions };
