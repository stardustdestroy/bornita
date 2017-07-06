$(document).ready(function(){
	$('.slider').slider();

/*	var $grid = $('.grid').masonry({
		itemSelector: '.grid-item',
		percentPosition: true,
		//gutter:5,
		columnWidth: '.grid-sizer'
	});
// layout Masonry after each image loads
$grid.imagesLoaded().progress( function() {
	$grid.masonry();
});  
*/
$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: 180,
  isFitWidth: true
});

});