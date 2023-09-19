// Toggle between Light and Dark Themes

var mainBody = $('#facet-main-body');

$("#facet-nav-switch").on('click', function () {

    if(mainBody.hasClass('light-theme')){
        console.log('Reached toggle Dark theme :(');

        // Turn off light theme
        $(document.body).removeClass('light-theme');
        $('.table,.card,.list-group-item').removeClass('light-theme-2');
        $('.head-card').removeClass('light-theme-3');
        $('.tab-theme').removeClass('tab-light');

        // Toggle Dark Theme
        $(this).html('<i class="fa fa-toggle-on"></i> Lights On');
        mainBody.addClass('night-theme');
        $('.table,.card,.list-group-item').addClass('night-theme-2');
        $('.head-card').addClass('night-theme-3');
        $('.tab-theme').addClass('tab-night');

        //indicate current theme
        $(this).attr('data-theme','dark');

    }else{
        console.log('Reached toggle Light theme :)');

        //turn off dark theme
        mainBody.removeClass('night-theme');
        $('.table,.card,.list-group-item').removeClass('night-theme-2');
        $('.head-card').removeClass('night-theme-3');
        $('.tab-theme').removeClass('tab-night');

        // Toggle Light Theme
        $(this).html('<i class="fa fa-toggle-off"></i> Lights Off');
        $(document.body).addClass('light-theme');
        $('.table,.card,.list-group-item').addClass('light-theme-2');
        $('.head-card').addClass('light-theme-3');
        $('.tab-theme').addClass('tab-light');

        //indicate current theme
        $(this).attr('data-theme','light');
    }
});

// get dropdown item?
var fDropdownParents = $('.facet-dropdown-parent');

fDropdownParents.find('.facet-submenu').hide();


fDropdownParents.on('click',function (e) {
    // stop click event propagation
    e.stopPropagation();

});


$('li.linkTheme').on('click', function () {
    var dimStatus = $('#toggledim').css('display');

    // do we need to dim?
    if(dimStatus === 'none'){
        // yes dim
        $('#toggledim').show();
    }else{
        // nope, already dim
        $('#toggledim').hide();
    }



});


// dark theme toggle

function toggleDarkLight() {
    var night = document.getElementsByClassName("night");
        night.classList.toggle("night");
}



// on click of nav dim body,
// on mouse out undim


// $(fDropdownParents).popover({
//     trigger: "manual",
//     content:function () {
//         // return the contents of the submenu div
//         return $(this).find('.facet-submenu').html();
//         },
//     html: true
//     // fancy stuff below
//     }).on("mouseenter", function () {
//         var _this = this;
//
//         $(this).popover("show");
//
//         $(".popover").on("mouseleave", function () {
//             $(_this).popover('hide');
//         });
//     }).on("mouseleave", function () {
//     var _this = this;
//     setTimeout(function () {
//         if (!$(".popover:hover").length) {
//             $(_this).popover("hide");
//         }
//     }, 100);
// });



function dimmer(){
    $('#toggledim').toggle();
    $("#toggledim").on("mouseleave", function () {
        $(_this).popover('hide');
    });
}




