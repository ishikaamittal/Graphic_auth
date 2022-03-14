let allimages = document.querySelectorAll(".image");
let arr = [];
for(let i=0;i<allimages.length;i++){
    allimages[i].innerHTML = allimages[i].id;
}
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