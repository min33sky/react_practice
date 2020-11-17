// export function callApiLike() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve, 1000);
//   });
// }

export function callApiLike() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() * 10 < 5) {
        resolve();
      }
      reject('callApiLike 실패');
    }, 1000);
  });
}
