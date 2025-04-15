let data = [0, 1, 2, 3, 4, 5];

let elem = 2;

for (let i = elem; i < data.length - 1; i++) {
  data[i] = data[i + 1];
}
data.length = data.length - 1;
console.log("data=>", data);

let newData = [0, 1, 2, 3, 4, 5];

let modifiedData =
  // The slice method returns a shallow copy of a portion of an array into a
  //  new array object selected from start to end (end not included).
  // Here, newData.slice(2, 4) will return elements from index 2 to index 3 (4 is not included).
  newData.slice(2, 4);
console.log("newData => ", modifiedData);
