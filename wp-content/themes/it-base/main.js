jQuery(document).ready(function($) {
    if($( ".set_background" ).length){
        $( ".set_background" ).each(function( index ) {
            var attr = jQuery(this).attr('data-image-src');
            jQuery(this).css('background', 'url('+attr+')');
        });
    }
});
/* scroll to contact JS */
jQuery(".contact").click(function() {
    jQuery('.navbar-toggle').trigger('click');
	jQuery('html, body').animate({
        scrollTop: jQuery("#contact").offset().top
	}, 500);
    setTimeout(function(){
        jQuery("#contact_form").pulse({times: 2, duration: 100});
    }, 500);
});
jQuery(function(){
    jQuery('.scrollup').hide();
    jQuery(window).scroll(function(){
        if (jQuery(window).scrollTop() > 100) {
            jQuery('.scrollup').fadeIn();
        } else {
            jQuery('.scrollup').fadeOut();
        }
    });
    jQuery('.scrollup').click(function(e){
        jQuery("html, body").animate({ scrollTop: 0 }, 500);
        e.preventDefault();
        return false;
    });
    jQuery(".cm").click(function(){
        jQuery("#contact_form").appendTo("#mb .modal-body");
        jQuery("#mb .modal-title").text(jQuery(this).attr('data-heading'));

    });
    jQuery("#mb").on("hidden.bs.modal", function(){
        jQuery("#contact_form").appendTo("#contact");
        jQuery("#mb .modal-title").text("");
    });
});
/* JS COOKIE STUFF */
function it_set_cookie( cookieName, cookieValue, nDays ){
    var today=new Date();
    var expire=new Date();
    if(nDays==null||nDays==0) nDays=1;
    expire.setTime(today.getTime()+3600000*24*nDays);
    document.cookie=cookieName+"="+escape(cookieValue)+";expires="+expire.toGMTString()+";path=/";
}
function it_get_cookie(cookieName){
    if(document.cookie.length>0){
        c_start=document.cookie.indexOf(cookieName+"=");
        if(c_start != -1) {
            c_start=c_start+cookieName.length + 1;
            c_end=document.cookie.indexOf(";",c_start);
            if(c_end==-1){
                c_end=document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start,c_end));
        }
    }
    return "";
}
function it_delete_cookie(cookieName){
    document.cookie=cookieName+'=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
}
