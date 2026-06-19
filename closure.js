function outer(){
    let count=0
    console.log(count)
    return function inner(){
        ++count;
        console.log(count)
    }
}

const counter=outer()
counter() //1
counter() //2  in this what will happen is first outer func is checked and as we have written console.log after that so 0 will bw counted then inner part me we jump 
// output will be 0,1,2