function countElement(array,integer){
    let count=0;
    for (let i = 0; i < array.length; i++) {
        if(integer === array[i]){
            count++;
        }
    }
    return count;
}
console.log(countElement([1,2,3,4,99,1],99));
