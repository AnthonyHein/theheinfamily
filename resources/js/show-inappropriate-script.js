function showInappropriate() {
    $('.inappropriate').show();
    $('.inappropriate-prompt').html(    `<i class="fas fa-lock-open"></i>&nbsp;&nbsp;
                                        <b>(2)</b> entries that may contain inappropriate/unprofessional content are currently showing. Click <button onclick="hideInappropriate();">here</button> to hide this content.`);
}

function hideInappropriate() {
    $('.inappropriate').hide();
    $('.inappropriate-prompt').html(    `<i class="fas fa-lock"></i>&nbsp;&nbsp;
                                        <b>(2)</b> entries have been hidden because they may contain inappropriate/unprofessional content. Click <button onclick="showInappropriate();">here</button> to show this content.`);
}