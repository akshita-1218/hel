function containsHello(str){
    if(str.includes("hello")){
        return true
    }
    else{
        return false
    }
}
console.log(containsHello("hello everyone"))
console.log(containsHello("hi"))