
function curry(...args){
    let total = args.reduce((acc, val)=> acc+val,0);
    
    function curry2(...newargs){
        if(newargs.length > 0){
            total += newargs.reduce((acc,val)=>acc+val,0);
            return curry2; // return function for further chaining
        }
        return total; // if there is no newargs, then return accumulated total
    }
    return curry2; // return curry2 for chaining after 1st parameter.
}

console.log(curry(1,2)(4)(5)()) // 12 -> At last you have to invoke function to give final results hence last ().
console.log(curry(1,2)(4,1)(5)()) // 13
