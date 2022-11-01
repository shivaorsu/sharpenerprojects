// Interview question;
   //Const name = (arr)=>{}

  //let fun = name(["Ram","Shyam"]);

//fun()// Print Hello Ram

//fun()//print Hello Shyam

const fun = (arr)=>{
    var count =0;
    return ()=>{
        console.log("hello"+arr[count])
        count++
    }
  }

const king =fun (["Ram","Shyam",]);

king();// Print Hello Ram

king()//print Hello Shyam
