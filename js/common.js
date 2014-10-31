$(document).ready(function() {
	//header nav
	$('.nav__drop').on('click', function() {
		$(this).parent('li').find('.nav__submenu').toggleClass('is-open');
		$(this).toggleClass('is-open');
		return false;
	});
	$('.nav__drop-level1').on('click', function() {
		$(this).parent('li').find('.nav__submenu-level2').toggleClass('is-open');
		$(this).parent('li').toggleClass('is-active');
		$(this).toggleClass('is-active');
		return false;
	});
	//select
	$(document).ready(function() {
	    $(document).click(function() {
	        $(".js-select-list").hide();
	        $(".js-select").removeClass("is-active");
	    });
	    function selectList() {
	        var select = $(".js-select");
	        var select_list = $(".js-select-list");
	        $("body").on("click", ".js-select", function(event){
	            if ($(this).hasClass("is-active")) {
	                select.removeClass("is-active");
	                select_list.hide();
	            }
	            else {
	                select.removeClass("is-active");
	                select_list.hide();
	                $(this).find(".js-select-list").show();
	                $(this).addClass("is-active");
	            }
	            event.stopPropagation();
	        });
	        $("body").on("click", ".js-select-list li", function(event){
	            var id = $(this).attr("data-id");
	            var text = $(this).text();
	            $(this).parents(".js-select").find(".js-select-text").text(text);
	            $(this).parents(".js-select").find(".js-select-input").val(id);
	            $(this).parent().hide();
	            $(this).parents(".js-select").removeClass("is-active");
	            event.stopPropagation();
	        });
	    }  
	    
	    selectList();
	    $("body").on("click", ".js-select", function(event){
	        event.stopPropagation();
	    });
	    
	});
	//galleries synchronize (ITEM)
	var slideshows = $('.cycle-slideshow').on('cycle-next cycle-prev', function(e, opts) {
	  slideshows.not(this).cycle('goto', opts.currSlide);
	});

	$('.artifact__pager .slide').click(function() {
	  var index = $('.artifact__pager').data('cycle.API').getSlideIndex(this);
	  console.log(index);
	  slideshows.cycle('goto', index);
	});
	//scroll
	$('.list-wrap').jScrollPane( {
		verticalDragMaxHeight: 68
	});
	//SIDEBAR ('o_o)
	$('.item-lvl0_drop').on('click', function() {
		$(this).parent('li').find('.level1').toggleClass('is-open');
		$(this).parent('li').toggleClass('is-active');
		return false;
	});
	$('.item-lvl1').on('click', function() {
		$(this).parent('li').find('.level2').toggleClass('is-open');
		$(this).toggleClass('is-active');
		return false;
	});
	$('.item-lvl2').on('click', function() {
		$(this).parent('li').find('.level3').toggleClass('is-open');
		$(this).toggleClass('is-active');
		return false;
	});
	$('.item-lvl3').on('click', function() {
		$(this).toggleClass('is-active');
		return false;
	});
	//POPUPS
	$('.contacts__time a').on('click', function() {
		$('.js-map, .overlay').toggleClass('is-open');
		return false;
	});
	$('.callback__link').on('click', function() {
		$('.js-feedback, .overlay').toggleClass('is-open');
		return false;
	});
	$('.office').on('click', function() {
		$('.js-profile, .overlay').toggleClass('is-open');
		return false;
	});
	$('.overlay, .js-close').on('click', function() {
		$('.js-popup, .overlay').removeClass('is-open');
		return false;
	});
});