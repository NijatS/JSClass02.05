function compareArray(array1, array2) {
    let status = true;
    array1 = sortArray(array1);
    array2 =  sortArray(array2);
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] != array2[i]) {
            return false;
        }
    }
    return true;
}

function sortArray(array){
    for (let i = 0; i < array.length; i++) {
        if(array[i] > array[i-1]){
           a = array[i];
           array[i] = array[i-1];
           array[i-1] = a;
        }
    }
    return array;
}

let arr1 = [1,2];
let arr2 = [1,2,3];
console.log(compareArray(arr1, arr2));