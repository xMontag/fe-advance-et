const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("success!");
    }, 2000);
});

console.log("a");

promise
    .then(data => {
        console.log("inside promise .then");
        console.log(data);
    })
    .catch(err => {
        console.log(err);
    });

console.log("b");