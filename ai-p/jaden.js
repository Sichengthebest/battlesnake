function jaden_getDirection(gridSize,snake,apples,direction){
    if (direction == "l") {
        if (snake[0]%gridSize==0){
            return "d";
        }
        return "l";
    }else if (direction == "d") {
        if (snake[0]%gridSize==0){
            return "r";
        }
        return "d";
    }else if (direction == "r") {
        if (snake[0]%gridSize==gridSize-1){
            return "u";
        }else{
            return "r";
        }
    }else if (direction == "u") {
        if (snake[0]%gridSize==gridSize-1){
            return "l";
        }
    }
}

function jaden_newGame(){
    return;
}

ais['jaden'] = {
    getDirection: jaden_getDirection,
    newGame: jaden_newGame
};