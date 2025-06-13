window.onclick  = (e) =>{
const arkBtn = document.getElementById("ark-left-panel");
const denBtn = document.getElementById("den-left-panel");
const nolaBtn = document.getElementById("nola-left-panel");
const vegasBtn = document.getElementById("vegas-left-panel");
const seattleBtn = document.getElementById("seattle-left-panel");
const vanBtn = document.getElementById("van-left-panel");
const japanBtn = document.getElementById("japan-left-panel");
const koreaBtn = document.getElementById("korea-left-panel");
const arkSubCont = document.getElementById("ark-sub");
const denSubCont = document.getElementById("den-sub");
const nolaSubCont = document.getElementById("nola-sub");
const vegasSubCont = document.getElementById("vegas-sub");
const seattleSubCont = document.getElementById("seattle-sub");
const vanSubCont = document.getElementById("van-sub");
const japanSubCont = document.getElementById("japan-sub");
const koreaSubCont = document.getElementById("korea-sub");
if (e.target == arkBtn || e.target == arkSubCont ) {
    arkSubCont.classList.add("transition");
    arkSubCont.style.display = "flex";
    return arkSubCont;
}
else {
    arkSubCont.classList.remove("transition");
    arkSubCont.style.display = "none";
}

}