// function understandLet(){
//     var x=10;
//     console.log("Var x="+x);
//     var y= true;
//     if(y){
//         let x=20;
//         console.log("let x ="+x);
//     }
//     console.log("final x="+x);
// }

// understandLet();


var myName="siri";
var promise=new Promise((resolve,reject)=>{
 if(myName=="siri"){
 	resolve("myName is siri");
 }
 	else{
 		reject("myName is renu");
 	}
 
});
console.log("understand");
promise.then((x)=>{
	console.log(x);
})
.catch((y)=>{
	console.log(y);
});