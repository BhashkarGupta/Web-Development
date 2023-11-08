$("h1").css("color", "red"); 
$("body").keypress(function(event){
    $("h1").html(event.key);
});