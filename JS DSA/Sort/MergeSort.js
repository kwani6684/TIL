function merge(a,b){
    let merged=[];
    let i =0;
    let j =0;
    while(i<a.length&&j<b.length){
        if(a[i]>b[j]){
            merged.push(b[j]);
            j++
        }else{
            merged.push(a[i]);
            i++;
        }
    }
    while(i<a.length){
        merged.push(a[i]);
        i++;
    }
    while(j<b.length){
        merged.push(b[j]);
        j++
    }
    return merged;

}
function mergeSort(arr){
    if(arr.length<=1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0,mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left,right);
}
console.log(mergeSort([1,4,48,29,174,87,23,45,3]))