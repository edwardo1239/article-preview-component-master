var acc = document.getElementById("button_share");
var acc2 = document.getElementById("button_share_back");
var share = document.getElementById("share_panel");
var perfil = document.getElementById("perfil_panel");
var triangle = document.getElementById("triangle_bottom");




acc.addEventListener("click", function() {
    var screenx = window.innerWidth;
    if(screenx < 825){
        if (share.style.display == "none") {
            
                share.style.display = "grid"; 
                
                perfil.style.display = "none";
            
            
        }
        else {
            share.style.display = "none";

            
        }
    }
    else{
        if (share.style.display == "none") {
            
            share.style.display = "grid"; 
            triangle.style.display = "block";
        
            
        
        
    }
    else {
        share.style.display = "none";
        triangle.style.display = "none";

        
    }
    }
})


acc2.addEventListener("click", function(){

    if (share.style.display == "none") {
        share.style.display = "grid";
        perfil.style.display = "none";
        
    }
    else {
        share.style.display = "none";
        perfil.style.display = "grid";

        
    }
})