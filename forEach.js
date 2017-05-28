/**
 * Created by root on 2017. 04. 19..
 */

nums = [1,2,3,4,5];

printDouble = function(k){
    console.log(k*2);
}

function forEach(array, functionToRunOnEveryElement){
    for(x=0;x<array.length;x++){
        functionToRunOnEveryElement(array[x]);
    }
}

forEach(nums,printDouble);

// output:
// 2
// 4
// 6
// 8
// 10
