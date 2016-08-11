$(document).ready(function() {
	$('.article-image-presentation__title').mouseenter(function() {
		$(this).addClass("change_color");
	});

	$('.article-image-presentation__title').mouseleave(function() {
		$(this).removeClass('change_color');
	});

	$('.post-identificator__item').mouseenter (
	function() {
		$(this).css("text-decoration", "underline");
	}).mouseleave (
		function() {
		$(this).css("text-decoration", "none");
	});

	$(function(){
		$('.nav-list .nav-list__item').hover(function(){
			$(this).children('div.nav-lists').stop(false, true).slideDown(300);
			$(this).children('a.shop-link').stop(false, true).slideDown(300);
		}, function(){
			$(this).children('div.nav-lists').stop(false, true).slideUp(300);
			$(this).children('a.shop-link').stop(false, true).slideUp(300);
		});
	});
});

