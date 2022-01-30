const arr = [[[[[]]]]];
function summ(arr){
    if(typeof arr != 'object') {
        throw new Error ('parameter type should be an array');
    }

    return arr.reduce(function(sum, current){
    if(current[0]){ 
    return sum+summ(current)
} else {
    if(current == 0) {
    return 0
    }

    if(typeof current != 'number') {
        throw new Error ('no number in array');
    }

    return sum+current
}
},0)};
console.log(summ(arr))