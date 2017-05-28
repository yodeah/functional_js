/**
 * Created by root on 2017. 04. 19..
 */

nums = [1,2,3,4,5];

function createPrintMultiply(a){
    return function(x){
        console.log(x*a);
    }
}

printDouble = createPrintMultiply(2)

nums.forEach(printDouble);
