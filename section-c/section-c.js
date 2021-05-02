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
    let result = y;
    for(var i = y - 1; i <= 0; i--){
        result += result * i;
    };
    return;
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}