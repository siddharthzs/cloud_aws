function flip(arr) {
  let ipos = 0;
  let jpos = 0;
  let count1s = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] == "1") count1s++;
  let curCount = count1s;
  let maxCount = count1s;
  let res = [];
  console.log(count1s);
  while (ipos <= jpos && jpos < arr.length) {
    if (arr[jpos] == "0") curCount++;
    else curCount--;

    if (curCount < count1s) {ipos = jpos + 1; curCount = count1s}
    else if (curCount > maxCount) {
      maxCount = curCount;
      res = [ipos + 1, jpos + 1];
    }

    jpos++;
  }

  return res;
}


function Nsort(A){
    A = A.sort((a,b)=>{ if(+a < +b) return -1; else return 1;});
    let start = 0;
    let end = A.length-1;
    console.log(A.length);
    for(let i = 0; i < A.length; i++){
        if(A[i] == A.length-i-1 && A[i] != 0)
        {
            console.log(A[i], A.length-i-1);
            return 1;

        }
        console.log(A[i]);
    }

    return -1;

}


 function  wave(A){
    console.log(A);
    A.sort();
    console.log(A);
    A.sort((a,b)=> a-b);
    console.log(A)
    A.sort((a,b)=> b-a);
    console.log(A)

}


 function hotel (A, B, C){
    allBooking = [];
    for(let i = 0; i < A.length; i++)
        allBooking.push([A[i],'A']);

    for(let i = 0; i < B.length; i++)
        allBooking.push([B[i],'D']);

    allBooking.sort((a,b)=>{
        if(a[0] == b[0]){
            if(a[1] == 'D')
                return -1;
            return 1;
        }
        return a[0] - b[0];
    });
    console.log(allBooking);

    let maxBook = 0;
    let curBook = 0;
    for(let i = 0; i < allBooking.length; i++){
        if(allBooking[i][1] == 'D' && curBook > 0)
            curBook--;
        else if(allBooking[i][1] == 'A')
            curBook++;
        maxBook = Math.max(curBook, maxBook);
    }

    if(maxBook > C)
        return 0;
    return 1;


}


// r = flip("010");
// console.log(r);

// s = wave([2,3,4,11])
// console.log(s)

h = hotel([ 1, 2, 3 ], [2,3,4],1);