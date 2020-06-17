$(document).ready(function() {
    console.log("Script loaded.");
    
    $("#KR-Div").hover(function(){
        $("#KR").show();
        $("#KR-Pic").fadeTo(300, 0.05);
        }, function() {
        $("#KR").hide();
        $("#KR-Pic").fadeTo(300, 1);
    });
    
    $("#PW-Div").hover(function(){
        $("#PW").show();
        $("#PW-Pic").fadeTo(300, 0.05);
        $()
        }, function() {
        $("#PW").hide();
        $("#PW-Pic").fadeTo(300, 1);
    });
     
    $("#Peer-Div").hover(function(){
        $("#Peer").show();
        $("#Peer-Pic").fadeTo(300, 0.05);
        $()
        }, function() {
        $("#Peer").hide();
        $("#Peer-Pic").fadeTo(300, 1);
    });
    
    $("#Lab-Div").hover(function(){
        $("#Lab").show();
        $("#Lab-Pic").fadeTo(300, 0.05);
        $()
        }, function() {
        $("#Lab").hide();
        $("#Lab-Pic").fadeTo(300, 1);
    });
    
});