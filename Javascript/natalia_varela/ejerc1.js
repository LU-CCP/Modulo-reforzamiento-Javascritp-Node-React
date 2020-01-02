const Array = [1, 2, 3, 4, 5, 6, 7, 8];

function ejercicio1(Array, n) {
  if (n == null) {
    n = 1;
  }
  for (let i = 0; i < Array.length; i++) {
    if (i == n) {
      break;
    }
    console.log(Array[i]);
  }
}

ejercicio1(Array, 7);
