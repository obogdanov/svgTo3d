$(function () {
	// getting coord and creating massive of coordinates from svg element "line"
	// var lineCoord for coordinates from each line element
	//     coord for all coordinates in all elements
	var coord = [];

	$('line').each(function () {
		var el = $(this),
		lineCoord = {};
		lineCoord.x1 = parseInt(el.attr('x1'), 10),
		lineCoord.y1 = parseInt(el.attr('y1'), 10),
		lineCoord.x2 = parseInt(el.attr('x2'), 10),
		lineCoord.y2 = parseInt(el.attr('y2'), 10);
		
		coord.push(lineCoord);
	})

// console.log(coord[0].y2);



	});