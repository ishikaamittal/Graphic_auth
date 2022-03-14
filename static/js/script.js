let allimages = document.querySelectorAll(".image");
for(let i=0;i<allimages.length;i++){
    allimages[i].innerHTML = allimages[i].id;
}
for(let i=0;i<allimages.length;i++){
    let image = allimages[i];
    image.addEventListener("click" , ()=>{
        image.classList.add("selected");
    })
}