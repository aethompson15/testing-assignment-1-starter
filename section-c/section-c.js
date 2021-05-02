function mysteryFunction(x) {
    // prime=true, not=false
    if(x === 2){
        return true;
    }
    if(x < 2){
        return false;
    }
    for(var i = 2; i < x; i++){
        if(x % i === 0) {
            return false;
            break;
        }
    }
    return true;
}

function mysteryFunction2(y) {
    // coding and coding here
    return;
}

module.exports = {
    mysteryFunction,
    mysteryFunction2
}