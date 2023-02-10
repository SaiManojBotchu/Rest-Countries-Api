function sortJson(json) {
  return json.sort((a, b) => {
    if (a.name.common < b.name.common) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });
}

export default sortJson;
