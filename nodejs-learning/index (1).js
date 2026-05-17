const waitfor5 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve("Hello")
    }, 5000);
})


console.log("Start")
waitfor5.then((value)=>{
    console.log(value)
})

waitfor5.catch((error)=>{
    console.log("Error: ", error)
})

console.log("End")
