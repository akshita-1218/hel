(function (a){
    let factorial = 1
    for (let i=2; i<=a; i++){
        factorial*=i
    }
    console.log(factorial)
})(6)