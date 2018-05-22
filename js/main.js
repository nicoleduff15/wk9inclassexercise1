// console.log("connected");
var favs =["vanilla","chocolate","strawberry","cookie dough","pistachio","cotton candy","rainbow","coffee","rocky road","mint chip"];


for(var i = 0; i < favs.length; i++) {
     var myLi=document.createElement("li");
         myLi.innertext=favs[i];
     document.getElementById("list").appendChild(myLi);
}

//var myLi=document.createElement("li");
    //myLi.innertext="Ice Cream";//
