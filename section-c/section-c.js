function mysteryFunction(x) {
    // prime=true, not=false
    if(x === 2){
        return true;
    };
    if(x < 2){
        return false;
    };
    for(var i = 2; i < x; i++){
        if(x % i === 0) {
            return false;
        };
    };
    return true;
}

function mysteryFunction2(y) {
    // multiplying the value by all values preceeding it
    if((y < 0) || (y > 12)){
        throw new Error("Out of range!");
    };
    if((y === 0) || (y === 1)){
        return 1;
    };
    if(y === 2){
        return 2;
    };
    let result = y;
    for(var i = y - 1; i > 1; i--){
        result = result * i;
    };
    return result;
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}