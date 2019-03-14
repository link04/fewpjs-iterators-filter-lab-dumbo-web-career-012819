const findMatching = (array, string) => {
  array.filter(element => element.toLowerCase() == string.toLowerCase() );
};