// Slide in and Slide out between forms
window.addEventListener('hashchange', function(){
    if(location.hash == "#signup"){
        $(".card").addClass("slide");
        $("#signin").removeClass("selected");
        $("#signup").addClass("selected");
    }
    else{
        $(".card").removeClass("slide");
        $("#signin").addClass("selected");
        $("#signup").removeClass("selected");
    }
}, false);