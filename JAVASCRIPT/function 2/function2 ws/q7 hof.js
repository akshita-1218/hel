const hof = (a,b,fn) => fn(a,b)
const add = (x,y) => x+y
console.log(hof(8,2,add))
