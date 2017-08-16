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

	// include into function
	// var lineParameters = [];
	// ang = Math.atan2((y2 - y1)/(x2 - x1));
	// lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
	// centX = (x2 - x1)/2 + x1;
	// centY = (y2 - y1)/2 + y1;
	//
var parameters = [];

$(function () {
	$(coord).each(function () {
		var curLinePar = {},
			x1 = $(this)[0].x1,
			x2 = $(this)[0].x2,
			y1 = $(this)[0].y1,
			y2 = $(this)[0].y2;
		// console.log($(this)[0]);
		curLinePar.ang = Math.round(Math.atan((y2 - y1)/(x2 - x1))*Math.PI/180);
		curLinePar.lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
		curLinePar.centX = (x2 - x1)/2 + x1;
		curLinePar.centY = (y2 - y1)/2 + y1;
		parameters.push(curLinePar);
	})
})
console.log(parameters);

$(coord).each(function () {
	var transformX = (this.x2-this.x1)/2;
	var element = $('<div/>', {
		class: 'element',
	});
	$(element).css({
		'transform':'translateX('+transformX+'px) translateZ(50px) rotate3d(0,1,0,90deg)'
	});
	$('.object').append(element);
	// console.log(this);
})


	$(function(){
		$(document).mousemove(function(e){
			$('#object').css({
				'transform':'rotateX('+e.pageY+'deg) rotateY('+e.pageX+'deg)'
			});
		});
	});

});