function _comma(number) {
    let string1=number.toString();
    let arr=string1.split('');
    let arr1=arr.reverse();
    for(let i=3;i<arr1.length;i++){
        arr2=arr1.splice(i,0,',');
        i=i+3
    }
    // let arr2=arr1.splice(3,0,',');
    let arr3=arr1.reverse().join('');
    console.log(arr3)
    return arr3;
    // for(i=0;i<arr1.length;i++){
    //     arr1.splice(4,0,",")
    // }
}    
_comma(1230)