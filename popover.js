// slider of image 

let slideIndex = 0;
showSlides();

function showSlides(){
    let i;
    let slides = document.getElementsByClassName("image-item");
    for(i=0; i<slides.length;i++){
        slides[i].style.display="none";
    }
    slideIndex++
    if(slideIndex>slides.length){
        slideIndex=1;
    }
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides,5000);
}

// popover 

function showPopover() {
    document.getElementById("myPopover").style.display = "block";
}

function hidePopover() {
    document.getElementById("myPopover").style.display = "none";
}


// all menu button show 
const List = document.querySelector(".sidebar-container-navigation");
const showmorelistBtn = document.querySelector("#more-list");
const hidemenulistBtn = List.querySelector("#sidebar-navigation-close");

showmorelistBtn.addEventListener("click", () => {
    List.classList.toggle("slidebar-show");
    // add in List class toggle is add the class
  });

  hidemenulistBtn.addEventListener("click", () => {
    showmorelistBtn.click("");
  });
  

  //
  