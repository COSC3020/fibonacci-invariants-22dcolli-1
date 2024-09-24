//Note: I wrote this code from scratch and then confirmed it with my code from last semester, this time I was trying to be more concise with code
function fib(n) {
    let arr = [0,1]

    if (n==0){
        return[0];
    }
    else if(n==1){
        return arr;
    }
    else{
        for(let i=2;i<=n;i++){
              arr.push(arr[i-1]+arr[i-2])
            }
    }
    return arr;
}
