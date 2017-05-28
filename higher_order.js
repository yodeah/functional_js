/**
 * Created by root on 2017. 04. 19..
 */

function createAdd(a){
    return function(x){
        return a+x;
    }
}

add3 = createAdd(3);

console.log(add3(5));
//output is 8

typeof add3