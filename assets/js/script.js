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
