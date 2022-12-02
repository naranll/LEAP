let entry = "12345678998765";
// let entry = "12_345_678_998_765";
console.log(entry.charAt(entry.length - 3));
console.log(entry.substring(1,5));

entry = entry.substring(0, entry.length - 3) + "_" + entry.substring(entry.length - 3, entry.length);

//loop to make the result

console.log(entry);