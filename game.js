var colors=[];
size=6;
for(var i=0;i<size;i++){
    colors.push("rgb("+String(pickindex(255))+","+String(pickindex(255))+","+String(pickindex(255))+")");
}
var box=document.querySelectorAll(".square");
var h1=document.querySelectorAll("h1");
var index=pickindex(5);
h1[1].innerHTML=colors[index];
function pickindex(x){
    return Math.floor(Math.random()*x+1);
}
for(var i=0;i<box.length;i++){
    box[i].style.background=colors[i];
    box[i].addEventListener("click",function()
    {   
        if(box[index].style.background===this.style.background)
        {
            for(var j=0;j<box.length;j++){
                box[j].style.background=colors[index];
            }
        }
        else{
            this.style.background="rgb(38, 38, 39)";
        }

    });
}

 