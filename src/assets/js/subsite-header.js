const tabletMenu = document.querySelector(".banner-cage-tablet-dropmenu-section")
const downArrow = document.querySelector(".banner-container-subsites-tablet-down-arrow")
const upArrow = document.querySelector(".banner-container-subsites-tablet-up-arrow")

//banner dropdown arrow icons
downArrow.addEventListener("click", function(){
   downArrow.style.display = "none"
   upArrow.style.display = "block"
   tabletMenu.style.display = "block"
   closeLinks.style.display = "block"
   closeDrop.style.display = "block"
})

upArrow.addEventListener("click", function(){
   downArrow.style.display = "block"
   upArrow.style.display = "none"
   tabletMenu.style.display = "none"
   mykSites.style.display = "none"
})

//navbar dropdown
const openNavbar = document.querySelector(".navigation-container-right-navbar")
const closeNavbar = document.querySelector(".navigation-container-right-close")
const mobileNavbarMenu = document.querySelector(".navigation-cage-mobile")
//yonetim dropdown
const managementDrop = document.querySelector(".navigation-cage-mobile-main-dropmenu")
const managementCage = document.querySelector(".navigation-cage-mobile-managementcage")
const mainCage = document.querySelector(".navigation-cage-mobile-main")
//media dropdown
const mediaDrop = document.querySelector(".navigation-cage-mobile-media-dropmenu")
const mediaCage = document.querySelector(".navigation-cage-mobile-mediacage")

openNavbar.addEventListener("click", function(){
   openNavbar.style.display = "none"
   closeNavbar.style.display = "block"
   mobileNavbarMenu.style.display = "block"
})

closeNavbar.addEventListener("click", function(){
   openNavbar.style.display = "block"
   closeNavbar.style.display = "none"
   mobileNavbarMenu.style.display = "none"
   managementCage.style.display = "none"
   mediaCage.style.display = "none"
   mainCage.style.display = "block"
})

managementDrop.addEventListener("click", function(){
   managementCage.style.display = "block"
   mainCage.style.display = "none"
})

mediaDrop.addEventListener("click", function(){
    mediaCage.style.display = "block"
    mainCage.style.display = "none"
 })

//myk dropdown in banner 
const openMykDropdown = document.querySelector(".banner-cage-tablet-dropdown-myk");
const mykSites = document.querySelector(".banner-cage-tablet-dropmenu-myk");
const closeLinks = document.querySelector(".banner-cage-tablet-links")
const closeDrop = document.querySelector(".banner-cage-tablet-drop")

openMykDropdown.addEventListener("click", function(){
   mykSites.style.display = "block"
   closeLinks.style.display = "none"
   closeDrop.style.display = "none"
})
