/*
cited: JavaScriptのasync/await 理解してますか？ 説明できますか？ クイズに答えてもらって良いですか？ - YouTube
https://www.youtube.com/watch?v=T-_0Pc5P12U
*/


// sample 1: using Promise and async/await in the sub function
/*
const test = async () => {
  console.log(11);
  await new Promise((resolve) => {
    setTimeout(() => {
      console.log(12);
      resolve();
    }, 1000);
  });
};
const main = async () => {
  await test();
  console.log(13);
};
main();
*/


// sample 2: not using await in the sub function
/*
const test = async () => {
  console.log(21);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(22);
      resolve();
    }, 1000);
  });
};
const main = async () => {
  await test();
  console.log(23);
};
main();
*/


// sample 3: not using await in the main function
/*
const test = async () => {
  console.log(31);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(32);
      resolve();
    }, 1000);
  });
};
const main = async () => {
  test().then(() => {
    console.log(33);
  });
};
main();
*/


// arrange 1: ★
const sleep = async (milliseconds) => {
  console.log(42);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(43);
      resolve();
    }, milliseconds);
  });
};
const main = async () => {
  console.log(41);
  sleep(200)
  .then(() => {
    console.log(44);
  });
};
main();
