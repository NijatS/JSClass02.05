function ReverseArray(array){
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.unshift(array[i]);
    }
    return newArray;
}

let arr = [1,2,3,4];
arr = ReverseArray(arr);
console.log(arr);