'use strict'
$(function(){
var previousScrollPosition = window.pageYOffset; 
window.onscroll = function(){
    var currentScrollPosition = window.pageYOffset; 
    if(currentScrollPosition > previousScrollPosition) {
        document.getElementById("navbar").style.top = "-100px";
    }
    if(currentScrollPosition < previousScrollPosition){
        document.getElementById("navbar").style.top = "0";
    }
    previousScrollPosition = currentScrollPosition;

}
});