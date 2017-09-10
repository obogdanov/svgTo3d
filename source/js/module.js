var SvgParser = (function ($) {

	var methods = {};
	
	var rawArr	= [], //array for "raw" coordinates e.g [[x, y], [x, y]]
		Arr 	= []; //array for coordinate [[x1, y1], [x2, y2]]
	
	var svg = {};

	methods.init = function(){
			methods.pathCoords();
			methods.lineCoords();
			methods.circleCoords();
			methods.sortArray();
			console.log(rawArr);
			console.log(Arr);
		};
		

	methods.pathCoords = function() {
		svg.path = Array.from($('path'));
		
		ArrPath = [];
		_.forEach(svg.path, function (element) {
			// console.log(svg.path);
			var el = $(element);
			
			var line = el.attr('d').slice(2).split(" ");
			// console.log(line);
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
				 // console.log(tempArrCirc);
		});
	}

	methods.sortArray = function(){

		_.forEach(rawArr, function (element) {
			var subArr = element;
			_.forEach(subArr, function(){
				var tempArr 	 = element.slice(0,2),
						lineCoord	 = {};
					lineCoord.x1 = tempArr[0][0];
					lineCoord.y1 = tempArr[0][1];
					lineCoord.x2 = tempArr[1][0];
					lineCoord.y2 = tempArr[1][1];
					
					Arr.push(lineCoord);

			})
		})
	};

	return methods;
	
})(jQuery);

SvgParser.init();
