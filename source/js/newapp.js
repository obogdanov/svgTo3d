// var rawArr		= [], //array for "raw" coordinates e.g [[x, y], [x, y]]
// 	Arr 		= [], //array for coordinate [[x1, y1], [x2, y2]]
// 	parameters  = []; //array of elements' parameters [angPar, ang, lineLength, moveX, moveY]

// //parsing <path>
// 	ArrPath 	= [];
// 	$('path').each(function () {
// 		var el = $(this);
// 			console.log(el);
// 		var line = el.attr('d').slice(2).split(" ");
// 			for ( let i = 0; i <= line.length-1; i++) {
// 				var tempArrPath = [];
// 				if (line[i])
// 				var x = +line[i].split(",")[0],
// 					y = +line[i].split(",")[1];
// 				tempArrPath.push(x, y);
// 				ArrPath.push(tempArrPath);
// 			}
// 		rawArr.push(ArrPath);
// 	});

// //parsing circle
// 	ArrCircle 	= [];
// 	$('circle').each(function(){
// 		var el = this,
// 			tempArrCirc = [],
// 			lineCoord 	= {};
// 			el.getTotalLength = function() {
// 				let radius = parseInt($(this).attr('r'), 10);
// 				let length = 2 * Math.PI * radius;
// 				return length;
// 				}
// 			var segLength =  5, //prompt("Enter the length of circle segment", 5);
// 				segAmount = el.getTotalLength()/segLength;
// 				var circCoordArrAtZero = [];
// 				x0 = el.getPointAtLength(0).x;
// 				y0 = el.getPointAtLength(0).y;
// 				circCoordArrAtZero.push(x0, y0);
// 			for (let i = 0; i <= segAmount; i++) {
// 				x = el.getPointAtLength(i*segLength).x;
// 				y = el.getPointAtLength(i*segLength).y;
// 				var circCoordArr = [];
// 				circCoordArr.push(x, y);
// 				tempArrCirc.push(circCoordArr);
// 				// console.log(circCoordArrAtZero);
// 			}
// 			tempArrCirc.push(circCoordArrAtZero);
// 			rawArr.push(tempArrCirc);
// 	});

// //parsing <line>
// 	$('line').each(function () {
// 		var el 		     = $(this),
// 			lineCoord    = {};
// 		lineCoord.x1 = parseInt(el.attr('x1'), 10),
// 		lineCoord.y1 = parseInt(el.attr('y1'), 10),
// 		lineCoord.x2 = parseInt(el.attr('x2'), 10),
// 		lineCoord.y2 = parseInt(el.attr('y2'), 10);
// 		Arr.push(lineCoord);
// 	});

// //sorting rawArr
// 	$(rawArr).each(function () {
// 		subArr = this;
// 		for (let i = 0; i < subArr.length; i++) {
// 			if (this[i + 1]){
// 				var tempArr 	 = this.slice([i],[i+2]),
// 					lineCoord	 = {};
// 				lineCoord.x1 = tempArr[0][0];
// 				lineCoord.y1 = tempArr[0][1];
// 				lineCoord.x2 = tempArr[1][0];
// 				lineCoord.y2 = tempArr[1][1];
// 				// Arr.push(tempArr);
// 				Arr.push(lineCoord);
// 			}
// 			else break;
// 		}
// 	})
// // console.log(Arr);
// //rebuilding massive of coordinates & calculating angel and x,y coordinates in brouser
// 	$(Arr).each(function () {
// 		var linePar = {},
// 			x1 = this.x1,
// 			x2 = this.x2,
// 			y1 = this.y1,
// 			y2 = this.y2;
// 		if (((x1 < x2) && (y1 > y2)) || ((x1 > x2) && (y1 < y2))) {
// 			linePar.angPar = -1;
// 		}
// 		else linePar.angPar = 1;
// 		var x1 = Math.min(this.x1, this.x2),
// 			x2 = Math.max(this.x1, this.x2),
// 			y1 = Math.min(this.y1, this.y2),
// 			y2 = Math.max(this.y1, this.y2);
// 		linePar.ang = Math.round(Math.atan((y2 - y1)/(x2 - x1))/Math.PI*180);
// 		linePar.lineLength = Math.sqrt((x2 - x1)*(x2 - x1)+(y2 - y1)*(y2 - y1));
// 			if (linePar.angPar == -1) {
// 				linePar.moveX = x1;
// 			}
// 			else {
// 				linePar.moveX = x1;
// 			}
// 				if (linePar.angPar == -1) {
// 				linePar.moveY = y2;
// 			}
// 			else {
// 				linePar.moveY = y1;
// 			}
		
// 		parameters.push(linePar);
// 	});

// 	// console.log(parameters);

// 	// creating elements and applying CSS
// 	$(parameters).each(function () {
// 		var el = $('<div/>', {
// 			class: 'element',
// 		});

// 	$('.object').append(el);
// 	});

// 	var elements = $('.element');
// 	var css = function (z) {
// 		for (let i = 0; i < elements.length; i++) {
// 			var elCss = parameters[i],
// 				X = parameters[i].moveX,
// 				Y = parameters[i].moveY,
// 				lineLength = parameters[i].lineLength,
// 				ang 	   = parameters[i].ang;
// 				angPar     = parameters[i].angPar;
// 				$(elements[i]).css({
// 					'transform':'translateX('+X+'px) translateY('+Y+'px) translateZ('+z+'px) rotateZ('+angPar*ang+'deg) rotateX(-90deg)',
// 					'width':lineLength+'px'
// 				});
// 		}
// 	};

// 	css(20);
// 	$('#object').on('click', function () {
// 		css(80);
// 		rotate();
// 	});

// 	//Rotating with mouse
// 	var rotate = function(){
// 		$(document).on('mousemove', function(e){
// 			var X = -0.5*document.documentElement.clientWidth + e.pageX,
// 				Y = -0.5*document.documentElement.clientHeight + e.pageY;
// 			$('#object').css({
// 				'transform':'rotateX('+-Y+'deg) rotateY('+X+'deg)'
// 			});
// 		});
// 	};