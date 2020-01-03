let text = "felipe";

const replace = (string, range) => {
  let stringModified = "";
  for (let i = 0; i < string.length; i++) {
    if (string.substr(i, 1) == range.substr(0, 1)) {
      while (true) {
        i++;
        if (string.length == i) {
          stringModified += string.substr(i - 1, 1);
          break;
        }
        stringModified += "#";
        if (string.substr(i, 1) == range.substr(2, 1)) {
          stringModified += "#";
          i++;
          break;
        }
      }
    }
    stringModified += string.substr(i, 1);
  }
  console.log(stringModified);
};

replace(text, "e-i");
