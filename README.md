# CurryingInJavaScript

Currying is a concept where your code accepts parameters 1 by 1 returning functions for subsequent chaining and finally returns a value.

It is done for data encapsulation.

here is a simple example, inside repo is a more complex version.
```
function add(a){
  return function(b){
    return function(c){
      return a+b+c
    }
  }
}

console.log(sum(1)(2)(3)) // 6```
