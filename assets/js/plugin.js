//SIdebar Tab
var tabButtons=document.querySelectorAll(".tab-wrap .tab-btn button");
var tabPanels=document.querySelectorAll(".tab-wrap .tab-panel");

function showPanel(panelIndex,colorCode){
    tabButtons.forEach(function(node){
        node.style.backgroundColor="";
        node.style.color="";
    });
    tabButtons[panelIndex].style.backgroundColor=colorCode;
    tabButtons[panelIndex].style.color="#fff";

    //For Panel
    tabPanels.forEach(function(node){
        node.style.display="none";
    });

    tabPanels[panelIndex].style.display="block";
    //tabPanels[panelIndex].style.backgroundColor=colorCode;

}
showPanel(0, '#e83737')

//Scroll-to-Top













