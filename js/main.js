/*global window,$,document*/
$(function () {
    'use strict';
  
    $(window).scroll(function () {
      
        var navbar = $('.navbar');
      
        if ($(window).scrollTop() >= navbar.height()) {
            navbar.addClass('scrolled');
        } else {
            navbar.removeClass('scrolled');
        }
        
        // Condition ? true : false;
        // $(window).scrollTop() >= navbar.height() ? navbar.addClass('scrolled') : navbar.removeClass('scrolled');
    });
    
    // Deal With Tabs
    
    $('.tab-switch li').click(function () {
        // Add Selected Class to Active Linke
        $(this).addClass('selected').siblings().removeClass('selected');
        // Hide All Divs
        $('.tabs-section .tabs-content > div').hide();
        // Show Div Connected With This Link
        $('.' + $(this).data('class')).show();
    });
});