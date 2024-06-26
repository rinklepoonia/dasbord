// ==========toogleBtn
const toogleBtn = document.getElementById("toogleBtn")
toogleBtn.addEventListener("click", function () {
    toogleBtn.classList.toggle("justify-content-end")
})
// ============dropdown
function toggleClass() {
    const btnn = document.getElementById('btnn');
    btnn.classList.toggle("active");
}
// ===========menuicon
function openNav() {
    document.getElementById("navbar").classList.toggle("start-0");
    document.body.classList.toggle("overFlowHidden");
    document.querySelector(".menuIcon").classList.toggle("cross")
    document.querySelector(".menuIcon").classList.toggle("show")
}
function toggle() {
    const btnn2 = document.getElementById('btnn2');
    btnn2.classList.toggle("active");
}

$('.dasbord_slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: ".prev",
    nextArrow: ".next",
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});
