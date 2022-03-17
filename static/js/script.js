let allimages = document.querySelectorAll(".image");
let submitbutton = document.querySelector(".entervalue");

let ip = document.querySelector(".input");
let arr = [];
for(let i=0;i<allimages.length;i++){
    let image = allimages[i];
    image.addEventListener("click", ()=>{
        if(arr.includes(image.id)){
            let pos = arr.indexOf(image.id);
            arr.splice(pos,1);
        }
        else{
            arr.push(image.id);
        }    
        image.classList.toggle("selected");

        console.log(arr);
    })
}

// submitbutton.addEventListener("click",()=>{
    if(arr.length > 4){
        document.getElementById("password").value = arr.toString();
    }
//     console.log("clicked");
// })
function inputcheck(){
    // console.log("click");
    if(arr.length >= 4){
        ip.value = arr.toString();
    }
    // console.log(arr.toString());
    console.log(ip.value)
}
function refresh(){
    arr = [];
    console.log(arr);
    for(let i=0;i<allimages.length;i++){
        allimages[i].classList.remove("selected");
    }
}