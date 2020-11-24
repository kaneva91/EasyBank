function toggleNavigationMobile() {
    let navMainvEl = document.getElementById("topnav");
    if (navMainvEl.className == "main-sections") {
        navMainvEl.className = "mobile";
    } else {
        navMainvEl.className = "main-sections";
    }
}