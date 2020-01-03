let object = {
  name: "Felipe",
  age: 27
};

const getKey = object => {
  for (var key in object) {
    console.log(key);
  }
};

getKey(object);
