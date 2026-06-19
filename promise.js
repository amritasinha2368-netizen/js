console.log("start");

const sub = new Promise((resolve, reject) => {
  console.log("Promise <Pending>"); // 👈 yaha dikhega

  setTimeout(() => {
    const result = true;

    if (result) {
      resolve("Promise <Resolved>");
    } else {
      reject(new Error("Why aren't you subscribed?"));
    }
  }, 5000);
});

sub.then(res => console.log(res))
   .catch(err => console.error(err));

console.log("stop");