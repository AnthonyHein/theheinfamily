function showFamily() {
    if ($('#show-more-family-icon').hasClass('fa-caret-down')) {
        $('#show-more-family-icon').removeClass('fa-caret-down');
        $('#show-more-family-icon').addClass('fa-caret-up');
        $('#show-more-family-text').html('Show Less&nbsp;&nbsp;');
        $('#extended-family-list').show();
    }
    else {
        $('#show-more-family-icon').removeClass('fa-caret-up');
        $('#show-more-family-icon').addClass('fa-caret-down');
        $('#show-more-family-text').html('Show More&nbsp;&nbsp;');
        $('#extended-family-list').hide();
    }
}