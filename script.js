
function getrest(){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Found Resturant")
    },1000)
})
}


function takeorder(){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Taken The Order")
    },1000)
})
}


function preparefood(){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Food Is Cooking")
    },1000)
})
}
function deliverfood(){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("Food Is Onthe Way")
    },1000)
})
}
function thanku(){
return new Promise((resolve,reject)=>{

    setTimeout(()=>{
        resolve("FOOD DELIVERED THANK YOU")
    },1000)
})
}

const promiseOutput = typeof document === "undefined" ? null : document.querySelector("#promise-output")

getrest().then((food)=>{
    console.log(food)
    if(promiseOutput){
        const message = document.createElement("li")
        message.textContent = `${food} - ${new Date().toLocaleTimeString()}`
        promiseOutput.append(message)
    }
    return takeorder(food)
}).then((food)=>{
    console.log(food)
    if(promiseOutput){
        const message = document.createElement("li")
        message.textContent = `${food} - ${new Date().toLocaleTimeString()}`
        promiseOutput.append(message)
    }
    return preparefood(food)
}).then((food)=>{
    console.log(food)
    if(promiseOutput){
        const message = document.createElement("li")
        message.textContent = `${food} - ${new Date().toLocaleTimeString()}`
        promiseOutput.append(message)
    }
    return deliverfood(food)
}).then((food)=>{
    console.log(food)
    if(promiseOutput){
        const message = document.createElement("li")
        message.textContent = `${food} - ${new Date().toLocaleTimeString()}`
        promiseOutput.append(message)
    }
    return thanku(food)
}).then((food)=>{console.log(food)
    if(promiseOutput){
        const message = document.createElement("li")
        message.textContent = `${food} - ${new Date().toLocaleTimeString()}`
        promiseOutput.append(message)
    }
})
