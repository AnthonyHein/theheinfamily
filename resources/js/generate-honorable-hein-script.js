function generateHonorableHein() {
    
    // Previous selector.
    var previous = $('#last-generate').val();
    var previous_selector = ".honorable-hein-entry." + previous;
    
    // Current selector.
    var NUM_HONORABLES = 4;
    var select_num = Math.trunc(NUM_HONORABLES * Math.random());
    
    // Make sure they are not equal.
    while (parseInt(previous, 10) == select_num) {
        select_num = Math.trunc(NUM_HONORABLES * Math.random());
    }
    
    var selector = ".honorable-hein-entry." + select_num;
    
    // Store value.
    $('#last-generate').val(select_num);
    
    // Strip of all classes and hide.
    $(".honorable-hein-entry").removeClass("animate__animated");
    $(".honorable-hein-entry").removeClass("animate__lightSpeedOutRight");
    $(".honorable-hein-entry").removeClass("animate__lightSpeedInLeft");
    $(".honorable-hein-entry").hide();
    
    $(previous_selector).addClass("animate__animated");
    $(previous_selector).addClass("animate__lightSpeedOutRight");
    $(previous_selector).show();
    
    window.setTimeout(
        function(){  
            $(previous_selector).hide();
            
            $(selector).addClass("animate__animated animate__lightSpeedInLeft");
            $(selector).show();

            console.log("Previous: " + previous);
            console.log("Current: " + select_num);
        },500);
}
