function insertionSort(arr){
    for(let i =1; i<arr.length;i++){
        let cur =  arr[i];
        let pos = i;
        for(let j=i-1;j>=0 &&arr[j]>cur ;j-- ){
            arr[j+1] = arr[j]
            pos =j;
        }
        arr[pos] = cur;
        console.log(arr)
    }
    return arr;
}

console.log(insertionSort([5,3,4,1,2]))