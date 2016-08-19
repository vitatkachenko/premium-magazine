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

	/*сделать кнопки соц.сетей светлее по наведению и выделить курсором*/

	$(function() {
		$('.fa-rss-square').hover(function(){
			$(this).addClass("lighten-rss-icon");
			$(this).css("cursor", "pointer");
		}, function() {
			$(this).removeClass("lighten-rss-icon");
			$(this).css("cursor", "none");
		});
	});

	$(function() {
		$('.fa-facebook-square').hover(function(){
			$(this).addClass("lighten-facebook-icon");
			$(this).css("cursor", "pointer");
		}, function() {
			$(this).removeClass("lighten-facebook-icon");
			$(this).css("cursor", "none");
		});
	});

	$(function() {
		$('.fa-twitter-square').hover(function(){
			$(this).addClass("lighten-twitter-icon");
			$(this).css("cursor", "pointer");
		}, function() {
			$(this).removeClass("lighten-twitter-icon");
			$(this).css("cursor", "none");
		});
	});

	$(function() {
		$('.fa-google-plus-square').hover(function(){
			$(this).addClass("lighten-google-icon");
			$(this).css("cursor", "pointer");
		}, function() {
			$(this).removeClass("lighten-google-icon");
			$(this).css("cursor", "none");
		});
	});

	/*для первого комментария*/

	$(function() {
		$('.carousel-recent-comment-1.first-top-commentator').mouseenter(function(){
			$(this).css("display", "none");
			$(this).css("cursor", "pointer");
			$('.carousel-recent-comment-2.first-top-commentator').css("cursor", "pointer");
			$('.carousel-recent-comment-2.first-top-commentator').css("display", "inline-block");
		});
	});

	$(function() {
		$('.carousel-recent-comment-2.first-top-commentator').mouseleave(function() {
			$('.carousel-recent-comment-1.first-top-commentator').css("display", "inline-block");
			$('.carousel-recent-comment-2.first-top-commentator').css("display", "none");	
		});
	});

	/*для второго комментария*/

	$(function() {
		$('.carousel-recent-comment-1.second-top-commentator').mouseenter(function(){
			$(this).css("display", "none");
			$(this).css("cursor", "pointer");
			$('.carousel-recent-comment-2.second-top-commentator').css("cursor", "pointer");
			$('.carousel-recent-comment-2.second-top-commentator').css("display", "inline-block");
		});
	});

	$(function() {
		$('.carousel-recent-comment-2.second-top-commentator').mouseleave(function() {
			$('.carousel-recent-comment-1.second-top-commentator').css("display", "inline-block");
			$('.carousel-recent-comment-2.second-top-commentator').css("display", "none");	
		});
	});

	/*для третьего комментария*/

	$(function() {
		$('.carousel-recent-comment-1.third-top-commentator').mouseenter(function(){
			$(this).css("display", "none");
			$(this).css("cursor", "pointer");
			$('.carousel-recent-comment-2.third-top-commentator').css("cursor", "pointer");
			$('.carousel-recent-comment-2.third-top-commentator').css("display", "inline-block");
		});
	});

	$(function() {
		$('.carousel-recent-comment-2.third-top-commentator').mouseleave(function() {
			$('.carousel-recent-comment-1.third-top-commentator').css("display", "inline-block");
			$('.carousel-recent-comment-2.third-top-commentator').css("display", "none");	
		});
	});

	$(function() {
		$('.top-review-wrapper .percent-off').mouseenter(function() {
			$(this).hide('slow');
		});
		$('.top-review-wrapper .percent-off').mouseleave(function() {
			$(this).show('slow');
		});
	});

	/*поменять прозрачность кнопки плеера*/

});

