// Navigation


// Variables
const subContainerOne = document.getElementById("exploreContainer");
const subContainerTwo = document.getElementById("dashboardContainer");
const navExploreBtn = document.getElementById("navExploreBtn");
const navDashboardBtn = document.getElementById("navDashboardBtn");
const introSocialWrapper = document.getElementById("introSocialWrapper");
const NavAccountBtn = document.getElementById("accountBtn");
const closeBtn1 = document.getElementById("closeBtn1");
const closeBtn2 = document.getElementById("closeBtn2");
// Events

// Functions
window.onload = () => {
    subContainerOne.style.display = "none";
    subContainerTwo.style.display = "none";
}
window.onclick = (ev) => {
    if (ev.target === subContainerOne || ev.target === navExploreBtn) {
        subContainerOne.style.display = "grid";
        subContainerTwo.style.display = "none";
        introSocialWrapper.style.display = "none";
    }
    else if (ev.target === subContainerTwo || ev.target === navDashboardBtn) {
        subContainerTwo.style.display = "grid";
        subContainerOne.style.display = "none";
        introSocialWrapper.style.display = "none";
    }
    else if (ev.target === introSocialWrapper || ev.target === NavAccountBtn) {
        introSocialWrapper.style.display = "grid";
        subContainerTwo.style.display = "none";
        subContainerOne.style.display = "none";
    }
    else if (ev.target === closeBtn1 || ev.target === closeBtn2) {
        subContainerOne.style.display = "none";
        subContainerTwo.style.display = "none";
    }

}