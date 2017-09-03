

	// // getting coord and creating massive of coordinates from svg element "line"
	// // var lineCoord for coordinates from each line element
	// //     coord for all coordinates in all elements
	// // 
	// var coord = [],
	// 	tempArr = [],
	// 	parameters = [];

	// var object = $('svg'),
	// 	w = parseInt(object.attr('width'), 10),
	// 	h = parseInt(object.attr('height'), 10);

	// //parsing <line>
	// $('line').each(function () {
	// 	var el 		     = $(this),
	// 		lineCoord    = {};
	// 	lineCoord.x1 = parseInt(el.attr('x1'), 10),
	// 	lineCoord.y1 = parseInt(el.attr('y1'), 10),
	// 	lineCoord.x2 = parseInt(el.attr('x2'), 10),
	// 	lineCoord.y2 = parseInt(el.attr('y2'), 10);
	// 	coord.push(lineCoord);
	// });

	// //parsing circle
	// $('circle').each(function(){
	// 	var el = this,
	// 		lineCoord = {};

	// 		el.getTotalLength = function() {
	// 			let radius = parseInt($(this).attr('r'), 10);
	// 			let length = 2 * Math.PI * radius;
	// 			return length;
	// 			}
	// 		var segLength =  15; //prompt("Enter the length of circle segment", 5);
	// 		var segAmount = el.getTotalLength()/segLength;
	// 		for (let i = 0; i <= segAmount; i++) {
	// 			x = el.getPointAtLength(i*segLength).x;
	// 			y = el.getPointAtLength(i*segLength).y;
	// 			var coordArr = [];
	// 			coordArr.push(x, y);
	// 			tempArr.push(coordArr);
				
	// 		}
	// 		console.log(tempArr);
	// });

	// //parsing <path>
	// $('path').each(function () {
	// 	var el = $(this),
	// 		line = el.attr('d').slice(2).split(" ");
			
	// 		for ( let i = 0; i <= line.length-1; i++) {
	// 			if (line[i+1])
	// 				tempArr.push(line.slice([i],[i+2]))
	// 			else break;
	// 		}
	// 		console.log(line);
	// });
			
	// 	$(tempArr).each(function () {
	// 		var lineCoord = {};
	// 		lineCoord.x1 = +this[0].split(",")[0];
	// 		lineCoord.y1 = +this[0].split(",")[1];
	// 		lineCoord.x2 = +this[1].split(",")[0];
	// 		lineCoord.y2 = +this[1].split(",")[1];
	// 		coord.push(lineCoord);
	// 		// console.log(lineCoord.x1+", "+lineCoord.y1+", "+lineCoord.x2+", "+lineCoord.y2);
	// 	})
	
	
	// //rebuilding massive of coordinates & calculating angel and x,y coordinates in brouser
	// $(coord).each(function () {
	// 	var linePar = {},
	// 		x1 = this.x1,
	// 		x2 = this.x2,
	// 		y1 = this.y1,
	// 		y2 = this.y2;
	// 	if (((x1 < x2) && (y1 > y2)) || ((x1 > x2) && (y1 < y2))) {
	// 		linePar.angPar = -1;
	// 	}
	// 	else linePar.angPar = 1;
	// 	var x1 = Math.min(this.x1, this.x2),
	// 		x2 = Math.max(this.x1, this.x2),
	// 		y1 = Math.min(this.y1, this.y2),
	// 		y2 = Math.max(this.y1, this.y2);
	// 	linePar.ang = Math.round(Math.atan((y2 - y1)/(x2 - x1))/Math.PI*180);
	// 	linePar.lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
	// 		if (linePar.angPar == -1) {
	// 			linePar.moveX = x1;
	// 		}
	// 		else {
	// 			linePar.moveX = x1;
	// 		}
	// 			if (linePar.angPar == -1) {
	// 			linePar.moveY = y2;
	// 		}
	// 		else {
	// 			linePar.moveY = y1;
	// 		}
			
	// 	parameters.push(linePar);
	// });

	// // console.log(coord);
	// console.log(parameters);

	// // creating elements and applying CSS
	// $(parameters).each(function () {
	// 	var el = $('<div/>', {
	// 		class: 'element',
	// 	});

	// $('.object').append(el);
	// });
	// var elements = $('.element');
	// var css = function (z) {
	// 	for (let i = 0; i < elements.length; i++) {
	// 		var elCss = parameters[i],
	// 			X = parameters[i].moveX,
	// 			Y = parameters[i].moveY,
	// 			lineLength = parameters[i].lineLength,
	// 			ang 	   = parameters[i].ang;
	// 			angPar     = parameters[i].angPar;
	// 			$(elements[i]).css({
	// 				'transform':'translateX('+X+'px) translateY('+Y+'px) translateZ('+z+'px) rotateZ('+angPar*ang+'deg) rotateX(-90deg)',
	// 				'width':lineLength+'px'
	// 			});
	// 	}
	// };

	// css(20);

	// $('#object').on('click', function () {
	// 	css(80);
	// 	rotate();
	// });

	// //Rotating with mouse
	// var rotate = function(){
	// 	$(document).on('mousemove', function(e){
	// 		var X = -0.5*document.documentElement.clientWidth + e.pageX,
	// 			Y = -0.5*document.documentElement.clientHeight + e.pageY;
	// 		$('#object').css({
	// 			'transform':'rotateX('+Y+'deg) rotateY('+X+'deg)'
	// 		});
	// 	});
	// };

