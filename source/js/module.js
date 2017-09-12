var SvgParser = (function ($) {

	var methods = {};
	
	var rawArr	    = [], //array for "raw" coordinates e.g [[x, y], [x, y]]
		Arr 	    = [],
		parameters  = []; //array for coordinate [[x1, y1], [x2, y2]]
	
	var svg = {};

	methods.init = function(){
			methods.pathCoords();
			methods.lineCoords();
			methods.circleCoords();
			methods.createArr();
			methods.sortArr();
			console.log("rawArr ", rawArr);
			console.log('Arr ', Arr);
			console.log(parameters);
		};
		
	methods.pathCoords = function() {
		svg.path = Array.from($('path'));
		ArrPath = [];
		_.forEach(svg.path, function (element) {
			var el = $(element);
			var line = el.attr('d').slice(2).split(" ");
			_.forEach(line, function(element){
				var el = element;
				var tempArrPath = [];
					if (el)
					var x = +el.split(",")[0],
						y = +el.split(",")[1];
					tempArrPath.push(x, y);
					ArrPath.push(tempArrPath);
			})
			rawArr.push(ArrPath);
		});
	};

	methods.lineCoords = function() {
		svg.line = $('line');
		svg.line.each(function () {
		var el = $(this),
			lineCoord = {};
		lineCoord.x1 = parseInt(el.attr('x1'), 10),
		lineCoord.y1 = parseInt(el.attr('y1'), 10),
		lineCoord.x2 = parseInt(el.attr('x2'), 10),
		lineCoord.y2 = parseInt(el.attr('y2'), 10);
		Arr.push(lineCoord);
		});
	};

	methods.circleCoords = function() {
		ArrCircle 	= [];
		svg.circle = Array.from($('circle'));
		_.forEach(svg.circle, function(element){
			var el = element,
				tempArrCirc = [],
				lineCoord 	= {};
				el.getTotalLength = function() {
					let radius = parseInt($(this).attr('r'), 10);
					let length = 2 * Math.PI * radius;
					return length;
					}
				var segLength =  5, //prompt("Enter the length of circle 
					segAmount = el.getTotalLength()/segLength;
					var circCoordArrAtZero = [];
					x0 = el.getPointAtLength(0).x;
					y0 = el.getPointAtLength(0).y;
					circCoordArrAtZero.push(x0, y0);
				for (let i = 0; i <= segAmount; i++) {
					x = el.getPointAtLength(i*segLength).x;
					y = el.getPointAtLength(i*segLength).y;
					var circCoordArr = [];
					circCoordArr.push(x, y);
					tempArrCirc.push(circCoordArr);
				}
				tempArrCirc.push(circCoordArrAtZero);
				rawArr.push(tempArrCirc);
		});
	}

	methods.createArr = function(){
		_.forEach(rawArr, function (element) {
			subArr = element;
		for (let i = 0; i < subArr.length; i++) {
			if (element[i + 1]){
				var tempArr 	 = element.slice([i],[i+2]),
					lineCoord	 = {};
				lineCoord.x1 = tempArr[0][0];
				lineCoord.y1 = tempArr[0][1];
				lineCoord.x2 = tempArr[1][0];
				lineCoord.y2 = tempArr[1][1];
				Arr.push(lineCoord);
			}
			else break;
		}
		})
	};

	methods.sortArr = function() {
		_.forEach(Arr, function (elelment) {
			var linePar = {},
				x1 = elelment.x1,
				x2 = elelment.x2,
				y1 = elelment.y1,
				y2 = elelment.y2;
			if (((x1 < x2) && (y1 > y2)) || ((x1 > x2) && (y1 < y2))) {
				linePar.angPar = -1;
			}
			else linePar.angPar = 1;
				var x1 = Math.min(elelment.x1, elelment.x2),
					x2 = Math.max(elelment.x1, elelment.x2),
					y1 = Math.min(elelment.y1, elelment.y2),
					y2 = Math.max(elelment.y1, elelment.y2);
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
			// console.log(parameters);
		});
	}


	return methods;
	
})(jQuery);

SvgParser.init();
