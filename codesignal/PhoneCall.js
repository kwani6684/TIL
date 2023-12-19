function solution(min1, min2_10, min11, s) {
    let res =0;
    while(s>=0){
        if(res===0){
            s-=min1;        
        }
        else if(res<=9){
            s-=min2_10;
        }else{
            s-=min11;
        }
        res++;
    }
    return res-1;
}
