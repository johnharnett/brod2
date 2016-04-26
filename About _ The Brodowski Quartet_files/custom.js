function contactHeight(){
    // Get the dimensions of the viewport
    var width = jQuery(window).width();
    var height = jQuery(window).height();
    height = height-77;
    var picScale = width/height;

    jQuery('body.page-id-23 .featured-img').height(height);    // Display the height
    if(picScale>1.67) {
        jQuery('body.page-id-23 .featured-img').addClass('contactWidth');
        jQuery('body.page-id-23 .featured-img').removeClass('contactHeight');
    } else {
        jQuery('body.page-id-23 .featured-img').addClass('contactHeight');
        jQuery('body.page-id-23 .featured-img').removeClass('contactWidth');
    }
}

jQuery(document).ready(contactHeight);    // When the page first loads
jQuery(window).resize(contactHeight);     // When the browser changes size

jQuery(document).ready(function() {

	jQuery('#rev_slider_2_2 ul').height(jQuery('#rev_slider_2_2 ul li .slotholder img').height())

    jQuery('#sideSlideToggle i.fa').wrap('<div class="sideSlideToggleInner"></div>');
    jQuery('.site-logo-link').wrap('<div class="logo-wrap"></div>');

    jQuery('a').each(function() {
        var a = new RegExp('/' + window.location.host + '/');
        if(!a.test(this.href)) {
            jQuery(this).click(function(event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, '_blank');
            });
        }
    });

	jQuery('.featured-img-mobile').appendTo('.featured-img');

	jQuery('.about-grid').insertBefore('.entry-content');
	jQuery('.tp-caption').wrap('<div class="slideCaptionWrap"></div>');

	if (jQuery(window).width() < 661) {
		jQuery('ul.audiotheme-videos').find('.block-grid-item').each(function() {
			var ytLink = jQuery(this).attr('data-videolink');
			ytLink = ytLink.replace('watch?v=','embed/');
			jQuery(this).find('a').each(function() {
				jQuery(this).attr('href',ytLink);
			})
		})
	}

	jQuery('.slideCaptionWrap .tp-caption').each(function() {
		jQuery(this).wrap('<div class="tp-caption-wrap"></div>');
	})

	jQuery('#rev_slider_1_1_wrapper li').each(function() {
		jQuery(this).watch('z-index', function(){
			if ( jQuery(this).css('z-index')==20 ) {
				jQuery('#rev_slider_1_1_wrapper .slideCaptionWrap').removeClass('active');
				jQuery(this).find('.slideCaptionWrap').addClass('active');
			}
		});
	})

	jQuery('#rev_slider_2_2_wrapper li').each(function() {
		jQuery(this).watch('z-index', function(){
			if ( jQuery(this).css('z-index')==20 ) {
				jQuery('#rev_slider_2_2_wrapper .slideCaptionWrap').removeClass('active');
				jQuery(this).find('.slideCaptionWrap').addClass('active');
			}
		});
	})

	jQuery('#rev_slider_2_1_wrapper li').each(function() {
		jQuery(this).watch('z-index', function(){
			if ( jQuery(this).css('z-index')==20 ) {
				jQuery('#rev_slider_2_1_wrapper .slideCaptionWrap').removeClass('active');
				jQuery(this).find('.slideCaptionWrap').addClass('active');
			}
		});
	})

	if (!jQuery('body.single-audiotheme_gig .featured-img').length) {
		jQuery('body').addClass('no-image');
	}

});

jQuery(window).load(function() {
//
//	var $sliderHeight = 0;
//	jQuery('#rev_slider_2_2 ul li .slotholder img').each(function() {
//		$sliderHeight = jQuery(this).height();
//	})
//
//	jQuery('#rev_slider_2_2 ul').height(jQuery('#rev_slider_2_2 ul li .slotholder img').height());
});