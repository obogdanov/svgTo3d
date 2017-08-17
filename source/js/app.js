$(function () {
	// getting coord and creating massive of coordinates from svg element "line"
	// var lineCoord for coordinates from each line element
	//     coord for all coordinates in all elements
	var coord = [];
	var object = $('svg'),
		w = parseInt(object.attr('width'), 10),
		h = parseInt(object.attr('height'), 10)
	$('line').each(function () {
		var el = $(this),
		lineCoord = {};
		lineCoord.x1 = parseInt(el.attr('x1'), 10),
		lineCoord.y1 = parseInt(el.attr('y1'), 10),
		lineCoord.x2 = parseInt(el.attr('x2'), 10),
		lineCoord.y2 = parseInt(el.attr('y2'), 10);
		coord.push(lineCoord);
	})


	var parameters = [];

	$(coord).each(function () {
		var linePar = {},
			x1 = $(this)[0].x1,
			x2 = $(this)[0].x2,
			y1 = $(this)[0].y1,
			y2 = $(this)[0].y2;
		linePar.ang = Math.round(Math.atan((y2 - y1)/(x2 - x1))/Math.PI*180);
		linePar.lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
		linePar.centX = (x2 - x1)/2 + x1;
		linePar.centY = (y2 - y1)/2 + y1;
		parameters.push(linePar);
	})

// Applying CSS and creating elements

$(parameters).each(function () {
	
	var transformX = this.centX,
		transformZ = this.lineLength/2;
		ang 	   = this.ang;

	var element = $('<div/>', {
		class: 'element',
	});

	$(element).css({
		'transform':'translateX('+transformX+'px) translateZ('+transformZ+'px) rotate3d(0,'+ang+',0,90deg)'
	});

	$('.object').append(element);
	
})

// Rotating with mouse

	$(function(){
		$(document).mousemove(function(e){
			$('#object').css({
				'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
			});
		});
	});

});