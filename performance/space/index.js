const contar = (n) => {
    for (let index = 0; index < n; index++) {
        console.log(index);
        
    }
}

const repeat = (array) => {
    let arrayRepeated = array;
    return arrayRepeated;
}

const convertToString = (array) => {
    let result = array.map(element => element.toString());
    return result;
}

const twoDimensions = (value) => {
    let x = new Array(value);
    for (let index = 0; index < value; index++) {
        x[index] = new Array(value).fill(0);
    }
    return x;
}
console.log(twoDimensions(5));