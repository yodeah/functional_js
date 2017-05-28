/**
 * Created by root on 2017. 04. 19..
 */

nums = [1,2,3,4,5];

function isEven(x){
    if(x%2==0){
        return x + " is an even number";
    }else{
        return x + " is an odd number";
    }
}

nums.map(isEven)

// returns
// [ '1 is an odd number',
// '2 is an even number',
// '3 is an odd number',
// '4 is an even number',
// '5 is an odd number' ]
