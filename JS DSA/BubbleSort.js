

function bubbleSort(arr){
    for(let i = arr.length;i>0;i--){
        for(let j = 0;j<i-1;j++){
            if(arr[j+1]<arr[j]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
        }
        console.log('ONE CIRCLE')
    }
}

function nearlyBubbleSort(arr){
    for(let i = arr.length;i>0;i--){
        let noSwap = true;
        for(let j = 0; j<i-1;j++){
            if(arr[j]>arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwap = false;
            }
        }
        console.log('ONE CIRCLE')
        if(noSwap) break;
    }

}

let array = [1,3,48,36,4,9,26];
let nearlyArr = [2,1,3,4,5,6,7,8];

console.log(array);
// nearlyBubbleSort(array);
bubbleSort(array);
console.log(array);
// nearlyBubbleSort(nearlyArr);
bubbleSort(nearlyArr);
console.log(nearlyArr)
