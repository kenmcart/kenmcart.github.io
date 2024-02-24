const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
slide = 1;

while (true)
{
    var timer = setTimeout(function() {
        const slideWidth = slide.clientWidth;
        slidesContainer.scrollLeft += slideWidth;
        slide++;

        if (slide > 6){
            slidesContainer.scrollRight -= slideWidth*5;
            slide = 1;
        }
    }, 3000);
}