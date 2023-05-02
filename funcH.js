function ArrayChan(array){
    for (let i = 0; i < array.length; i++) {
        if(i == array.length-1) continue;
        a = array[i];
        array[i] = array[i+1];
        array[i+1]= a;
        i++;
    }
    return array;
}

let array = [1,2,3,4,5,6,8];
array = ArrayChan(array);
console.log(array);