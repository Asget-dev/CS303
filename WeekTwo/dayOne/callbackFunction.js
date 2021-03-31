// function f(g){// g type is function
//     g();// the reson we have () is because we are execting g the aargument is function
// }

// function f1(){
//     console.log("f1.......");
// }

// f(f1);


function f(g,index,obj){
    g(2,4);// calling happens here
    console.log(index);
    console.log(obj);
}

function add(x,y){
    console.log(x + y);
}

// f((x,y)=>console.log(x + y));
//f((m,n) => console.log(m-n),1,{x:1});
f(add,1,{x:1});

/****************************************************************** */
// fucntion add(x,y){
//     console.log(x+y);
// }
// fucntion multBy3(m){
//     console.log(m*3);
// }
// fucntion test(i,j){
//     console.log(i);
//     console.log(j)
//     j()==>NAN
// }
// test(true, add);
