const checkDogs = (dogsJulia, dogsKate) => {
  const dogsJuliaNew = dogsJulia.slice(1, -2);
  const allDogs = dogsJuliaNew.concat(dogsKate); // nối mảng
  allDogs.forEach((age, index) => {
    if (age >= 3) {
      console.log(
        `Dog number ${index + 1} is an adult, and is ${age} years old`
      );
    } else {
      console.log(`Dog number ${index + 1} is still a puppy 🐶`);
    }
  });
};
const data1Julia = [3, 5, 2, 12, 7];
const data1Kate = [4, 1, 15, 8, 3];
const data2Julia = [9, 16, 6, 8, 3];
const data2Kate = [10, 5, 6, 1, 4];

checkDogs(data1Julia, data1Kate);
checkDogs(data2Julia, data2Kate);
