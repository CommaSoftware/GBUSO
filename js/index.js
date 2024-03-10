
let imagesRef = document.querySelectorAll(".image");
let overlayRef = document.querySelector(".overlay");
let overlayBgRef = document.querySelector(".overlay-bg");
let overlayImgWrapperRef = document.querySelector(".overlay-image-wrapper");
let overlayImgRef = document.querySelector(".overlay-img");
let overlayImgNameRef = document.querySelector(".overlay-img-name");

let navBtnRef = document.querySelector('.nav-btn');
let headerWrapperRef = document.querySelector(".header-wrapper");


let altImageName;
let openedImgPath;





// Image zoom effect (begin)
if(imagesRef.length){
    imagesRef.forEach(imageRef => {
        imageRef.addEventListener("click",(e)=>{
            console.log("Click");
            let childImg = imageRef.firstElementChild;
            openedImgPath = childImg.getAttribute("src");
            altImageName = childImg.getAttribute("alt");
            overlayImgRef.setAttribute("src", openedImgPath);
            overlayImgNameRef.textContent = altImageName;
            console.log(openedImgPath);
            showOverlay();
        })
    });
}


let showOverlay = () =>{
    if(overlayRef){
        overlayRef.classList.add("show");
    }
}
let hideOverlay = () =>{
    if(overlayRef){
        overlayRef.classList.remove("show");
    }
}

if(overlayBgRef){
    overlayBgRef.addEventListener("click", (e) => {
        hideOverlay();
    });
}
if(overlayImgWrapperRef){
    overlayImgWrapperRef.addEventListener("click", (e) => {
        hideOverlay();
    });
}
// Image zoom effect (end)


setTimeout(() => {
    if(!document.querySelector("#interactive-map")){
        document.querySelector("iframe").remove();
      }
}, 1000);






//Header button handler

navBtnRef.addEventListener("click",()=>{
    if(headerWrapperRef.classList.contains("show")){
        console.log("has");
        headerWrapperRef.classList.remove("show");
    }
    else{
        console.log("not has");
        headerWrapperRef.classList.add("show");
    }
});