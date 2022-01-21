function isEven(n) {
var result;
    if(typeof n === 'number') {
        if(n % 2 == 0) {
result = true;
} else {
    result = false;
}
    } else {
        throw new Error ('parameter type is not a Number');
    } 
return result;
}
isEven('Content');