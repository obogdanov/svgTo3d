$(function () {

	// getting coord and creating massive of coordinates from svg element "line"
	// var lineCoord for coordinates from each line element
	//     coord for all coordinates in all elements

	var coord = [];
	var object = $('svg'),
		w = parseInt(object.attr('width'), 10),
		h = parseInt(object.attr('height'), 10)
	$('line').each(function () {
		var el 		     = $(this),
			lineCoord    = {};
		lineCoord.x1 = parseInt(el.attr('x1'), 10),
		lineCoord.y1 = parseInt(el.attr('y1'), 10),
		lineCoord.x2 = parseInt(el.attr('x2'), 10),
		lineCoord.y2 = parseInt(el.attr('y2'), 10);
		coord.push(lineCoord);
	});
	$('path').each(function () {
		var lineCoord = {},
			el = $(this),
			line = el.attr('d').slice(2).split(" ");
			$(line).each(function () {
				console.log(this.split(','));
			})

		// 	pathLength = path.getTotalLength();
		// lineCoord.x1 = path.getPointAtLength(0).x;
		// lineCoord.y1 = path.getPointAtLength(0).y;
		// lineCoord.x2 = path.getPointAtLength(pathLength).x;
		// lineCoord.y2 = path.getPointAtLength(pathLength).y;
		console.log(line);
		// coord.push(lineCoord);

	});
	var parameters = [];
	
	$(coord).each(function () {
		var linePar = {},
			x1 = this.x1,
			x2 = this.x2,
			y1 = this.y1,
			y2 = this.y2;
		if (((x1 < x2) && (y1 > y2)) || ((x1 > x2) && (y1 < y2))) {
			linePar.angPar = -1;
		}
		else linePar.angPar = 1;
		var x1 = Math.min(this.x1, this.x2),
			x2 = Math.max(this.x1, this.x2),
			y1 = Math.min(this.y1, this.y2),
			y2 = Math.max(this.y1, this.y2);
		linePar.ang = Math.round(Math.atan((y2 - y1)/(x2 - x1))/Math.PI*180);
		linePar.lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
			if (linePar.angPar == -1) {
				linePar.moveX = x1;
			}
			else {
				linePar.moveX = x1;
			}
				if (linePar.angPar == -1) {
				linePar.moveY = y2;
			}
			else {
				linePar.moveY = y1;
			}
			
		parameters.push(linePar);
	});

	console.log(coord);
	console.log(parameters);
// creating elements and applying CSS


	$(parameters).each(function () {
		var el = $('<div/>', {
			class: 'element',
		});

	$('.object').append(el);
	});

	var elements = $('.element');

	var css = function (z) {

		for (let i = 0; i < elements.length; i++) {

			var elCss = parameters[i],

				X = parameters[i].moveX,
				Y = parameters[i].moveY,
				// Z = parameters[i].lineLength,
				lineLength = parameters[i].lineLength,
				ang 	   = parameters[i].ang;
				angPar     = parameters[i].angPar;

				$(elements[i]).css({
					'transform':'translateX('+X+'px) translateY('+Y+'px) translateZ('+z+'px) rotateZ('+angPar*ang+'deg) rotateX(-90deg)',
					'width':lineLength+'px'
					// 'transform-origin':0.5*lineLength+'px' +" "+ 0.5*lineLength+'px'
				});
		}
	};

	css(0);

	$('#object').on('click', function () {
		css(100);
		rotate();
	});

	//Rotating with mouse

	var rotate = function(){
		$(document).on('mousemove', function(e){
			var X = -0.5*document.documentElement.clientWidth + e.pageX,
				Y = -0.5*document.documentElement.clientHeight + e.pageY;
			$('#object').css({
				'transform':'rotateX('+Y+'deg) rotateY('+X+'deg)'
			});
		});
	};


});
