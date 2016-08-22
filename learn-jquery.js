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

	/*drop-down menu*/

	$(function(){
		$('.nav-list .nav-list__item').hover(function(){
			$(this).children('div.nav-lists').stop(false, true).slideDown(300);
			$(this).children('a.shop-link').stop(false, true).slideDown(300);
		}, function(){
			$(this).children('div.nav-lists').stop(false, true).slideUp(300);
			$(this).children('a.shop-link').stop(false, true).slideUp(300);
		});
	});

	/*slider*/
	
	$('a.film_roll_next').click(function(){
		$('#carousel-wrapper').addClass('.simpleMove');
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

	/*кнопки соц.сетей светлее по наведению и выделение курсором*/

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

	/*вертикальні і горизонтальні лінії*/

	$('.article-preview-img-wrapper').mouseenter(function(e) {
		var thisElement = $(e.currentTarget);

		thisElement.find('.vertical-lines').show('slow');
		thisElement.find('.horizontal-lines').show('slow');
		thisElement.find('.article-preview-img-wrapper__title').fadeIn(900);
	});

	$('.article-preview-img-wrapper').mouseleave(function() {
		$('.vertical-lines').hide('normal');
		$('.horizontal-lines').hide('normal');
		$('.article-preview-img-wrapper__title').fadeOut(500);
	});

	/*колір заголовків*/

	$('.article-preview-heading').hover(function () {
		$(this).css("color", "#DADADA");
		$(this).css("cursor", "pointer");
	}, function() {
		$(this).css("color", "#FFF");
		$(this).css("cursor", "inherit");
	});	

	$('.sections-article-wrapper').mousemove(function (lines) {

		var linesInThisBlock = $(lines.currentTarget);

		linesInThisBlock.find('.thick-vertical-lines').show('fast');
		linesInThisBlock.find('.thick-horizontal-lines').show('fast');
		$(this).css("padding", "0 40px 0 40px");
		$(this).css("transition", "0.5s ease-out");
		$('.article-image-presentation__views').css("display", "none");
	});

	$('.sections-article-wrapper').mouseleave(function() {
		$(this).css("padding", "0 35px 0 20px");
		$('.thick-vertical-lines').hide('fast');
		$('.thick-horizontal-lines').hide('fast');
	});
});

