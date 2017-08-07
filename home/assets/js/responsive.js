/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementByClass("navbar");
    if (x.id === "topnav") {
        x.className += " responsive";
    } else {
        x.id = "topnav";
    }
}
