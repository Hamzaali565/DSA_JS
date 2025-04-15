let data = [1, 2, 3, 4, 5, 6, 7, 8];
let newVal = 90;
let position = 4;

// here we use reverse loop
for (let i = data?.length - 1; i >= 0; i--) {
  console.warn(data[i]);
  if (i >= position) {
    data[i + 1] = data[i];
    if (i === position) {
      data[i] = newVal;
    }
  }
  //   data[i + 1] = i;
}
console.log(data);

// JS Method for acheiving same result

let newData = [0, 1, 2, 3, 4, 5, 6];

newData.splice(2, 1, 32);
console.log("newData =>", newData);
