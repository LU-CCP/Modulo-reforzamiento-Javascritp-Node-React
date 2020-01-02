let object = {
  name: "MaximilianoG",
  age: 26
};

const getKey = object => {
  for (var key in object) {
    console.log(key);
  }
};

getKey(object);
