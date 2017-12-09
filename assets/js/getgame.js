$(document).ready(function() {
	var items = Array('navbar-warning', 'navbar-success', 'navbar-info', 'navbar-primary');


	$(".rand-nav-color").each(function() {
		$(this).addClass(items.splice(~~(Math.random() * items.length), 1)[0]);
	});

	$('#infogame').click(function() {
		infogame();
	});

	// release the game
	pcgame();
	ps4game();
	androidgame();
	nintedogame();


	$('#example1').click(function() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		$.ajax({
			url: "https://www.giantbomb.com/api/game/3030-12909/",
			type: "get",
			data: {
				api_key: "ee6f3f25061cf71a97bd544052cf338657329c4e",
				field_list: "name,images",
				format: "jsonp",
				json_callback: "example1"
			},
			dataType: "jsonp"
		});
	});
	$('#example4').click(function() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		var guid = '3030-23846';
		$.ajax({
			url: "https://www.giantbomb.com/api/game/" + guid + "/",
			type: "get",
			data: {
				api_key: "ee6f3f25061cf71a97bd544052cf338657329c4e",
				format: "jsonp",
				json_callback: "example3"
			},
			dataType: "jsonp",
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div1').append(msg);
			},
		});
	});

	$.fn.myFunction = function(guid) {


		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');

		$.ajax({
			url: "https://www.giantbomb.com/api/game/" + guid + "/",
			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				format: "jsonp",
				json_callback: "infogame_callback"
			},
			dataType: "jsonp",
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div1').append(msg);
			},
		});

		// api key hanifr 'd597c1525476b0216681ab7ff5eab1d11e44ff38'
		$.ajax({
			url: "https://www.giantbomb.com/api/review/" + guid + "/",
			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				// field_list: "game,desription,reviewer",
				format: "jsonp",
				json_callback: "review"
			},
			dataType: "jsonp"
		});
	};


	function pcgame() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		var searchs = 'assassins creed';
		$.ajax({
			url: "https://www.giantbomb.com/api/games/",

			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				// field_list: "game,desription,reviewer",
				filter: "platforms:94,expected_release_year:2016,expected_release_quarter:4",
				sort: "date_added:desc",
				limit: "20",
				format: "jsonp",
				json_callback: "PCGame"
			},
			dataType: "jsonp",
			timeout: 5000,
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div3').append(msg);
			},
		});
	};

	function ps4game() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		var searchs = 'assassins creed';
		$.ajax({
			url: "https://www.giantbomb.com/api/games/",

			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				// field_list: "game,desription,reviewer",
				filter: "platforms:146,expected_release_year:2016,expected_release_quarter:3",
				sort: "date_added:desc",
				limit: "20",
				format: "jsonp",
				json_callback: "PS4Game"
			},
			dataType: "jsonp",
			timeout: 5000,
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div3').append(msg);
			},
		});
	};

	function androidgame() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		var searchs = 'assassins creed';
		$.ajax({
			url: "https://www.giantbomb.com/api/games/",

			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				// field_list: "game,desription,reviewer",
				filter: "platforms:123,expected_release_year:2016,expected_release_quarter:3",
				sort: "date_added:desc",
				limit: "20",
				format: "jsonp",
				json_callback: "AndroidGame"
			},
			dataType: "jsonp",
			timeout: 5000,
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div3').append(msg);
			},
		});
	};

	function nintedogame() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		$.ajax({
			url: "https://www.giantbomb.com/api/games/",

			type: "get",
			data: {
				api_key: "d597c1525476b0216681ab7ff5eab1d11e44ff38",
				// field_list: "game,desription,reviewer",
				filter: "platforms:117,expected_release_year:2016,expected_release_quarter:3",
				sort: "date_added:desc",
				limit: "20",
				format: "jsonp",
				json_callback: "NintendoGame"
			},
			dataType: "jsonp",
			timeout: 5000,
			error: function(jqXHR, exception) {
				var msg = '';
				if (jqXHR.status === 0) {
					msg = 'Not connect.\n Verify Network.';
				} else if (jqXHR.status == 404) {
					msg = 'Requested page not found. [404]';
				} else if (jqXHR.status == 500) {
					msg = 'Internal Server Error [500].';
				} else if (exception === 'parsererror') {
					msg = 'Requested JSON parse failed.';
				} else if (exception === 'timeout') {
					msg = 'Time out error.';
				} else if (exception === 'abort') {
					msg = 'Ajax request aborted.';
				} else {
					msg = 'Uncaught Error.\n' + jqXHR.responseText;
				}
				$('#div3').append(msg);
			},
		});
	};

	$('#search').click(function() {
		var searchs = $('#searchs').val();
		$.ajax({
			url: "http://api.giantbomb.com/search/",
			type: "get",
			data: {
				api_key: "ee6f3f25061cf71a97bd544052cf338657329c4e",

				query: searchs,
				resources: "game",
				format: "jsonp",
				json_callback: "search"
			},
			dataType: "jsonp"
		});
	});

	$(document).ajaxStart(function() {
		$("#wait").css("display", "block");
	});

	$(document).ajaxComplete(function() {
		$("#wait").css("display", "none");
	});

});

function example1(data) {
	$('#div1').append('<h1> ' + data.results.name + '  </h1>');
	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
	for (var i = 0; i < data.results.images.length; i++) {
		$('#div1').append('<div class="card-image card-small"><img class="responsive-img" src="' + data.results.images[i].original + '"></div>');

	}
	console.log(data);
}

function example2(data) {
	$('#div2').append('<h5> Found Data : ' + data.results.length + '  </h5>');

	for (var i = 0; i < data.results.length; i++) {
		// $('#div2').append('<h1> ' + data.results[i].name + '  </h1>')
		// $('#div2').append('<h1> ' + data.results[i].guid + '  </h1>')
		// $('#div2').append('<img src="' + data.results[i].image.original_url + '" alt="" width="100" height="100">');
		$('#div2').append('<div class="card horizontal"><div class="card-image card-small"><img src="' + data.results[i].image.small_url + '" width="100" height="auto"></div> <div class = "card-stacked" ><div class = "card-content" ><div class = "row" ><div class = "col s12" >	Nama game: <h4> ' + data.results[i].name + '</h4> </div><div class = "col s12" > ID game: <h4> ' + data.results[i].guid + '</h4></div> </div> </div> <div class = "card-action" ><a href = "#" > This is a link < /a> </div> </div> </div>');
	}
	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
	// for (var i = 0; i < data.results.images.length; i++) {
	// 	$('#div2').append('<img src="' + data.results.images[i].original + '" alt="" width="100" height="100">');
	// }
	console.log(data);
}

function infogame_callback(data) {
	$('#info-namagame').append(data.results.name);
	$('#publisher').append(data.results.publishers[0].name);
	for (var i = 0; i < data.results.platforms.length; i++) {
		$('#platform').append(data.results.platforms[i].name);
		$('#platform').append(',');
	}

	$('#info-desc').append(data.results.description);
	$('#info-fotogame').append('<img src="' + data.results.image.original_url + '" alt="Rounded Image" class="img-rounded img-responsive">');

	for (var i = 0; i < data.results.images.length; i++) {
		$('#info-screenshot').append('<div class="col-sm-3"><img src="' + data.results.images[i].original + '" alt="Rounded Image" class="img-rounded img-responsive"></div>');
	}
	$('#info-screenshot').append('<div class="space-50"></div>');
	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
	// for (var i = 0; i < data.results.images.length; i++) {
	// 	$('#div2').append('<img src="' + data.results.images[i].original + '" alt="" width="100" height="100">');
	// }
	console.log(data);
}

function PCGame(data) {
	for (var i = 0; i < data.results.length; i++) {
		$('#PC-game').append('<div class="col-sm-2 horizon-item" style="overflow:hidden;"><a href="infogame.html?guid=' + data.results[i].guid + '"><img src="' + data.results[i].image.original_url + '" alt="Rounded Image" class="img-rounded" height="230" width="170"><div class="space-20"></div></a><div class="col-sm-12 text-truncate text-center" style="overflow-wrap:break-word;"><p>' + data.results[i].name + '<p></div></div>');
	}
	// $('#div3').append('<div class="space-30"></div>');
	console.log(data);
}

function PS4Game(data) {
	for (var i = 0; i < data.results.length; i++) {
		$('#PS4-game').append('<div class="col-sm-2 horizon-item" style="overflow:hidden;><a href="infogame.html?guid=' + data.results[i].guid + '"><img src="' + data.results[i].image.original_url + '" alt="Rounded Image" class="img-rounded" height="230" width="170"><div class="space-20"></div></a><div class=" col-sm-12 text-truncate text-center"><p>' + data.results[i].name + '<p></div></div>');
	}
	// $('#div3').append('<div class="space-30"></div>');
	console.log(data);
}

function AndroidGame(data) {
	for (var i = 0; i < data.results.length; i++) {
		$('#Android-Game').append('<div class="col-sm-2 horizon-item" style="overflow:hidden;><a href="infogame.html?guid=' + data.results[i].guid + '"><img src="' + data.results[i].image.original_url + '" alt="Rounded Image" class="img-rounded" height="230" width="170"><div class="space-20"></div></a><div class=" col-sm-12 text-truncate text-center"><p>' + data.results[i].name + '<p></div></div>');
	}
	// $('#div3').append('<div class="space-30"></div>');
	console.log(data);
}

function NintendoGame(data) {
	for (var i = 0; i < data.results.length; i++) {
		$('#Nintendo-Game').append('<div class="col-sm-2 horizon-item" style="overflow:hidden;><a href="infogame.html?guid=' + data.results[i].guid + '"><img src="' + data.results[i].image.original_url + '" alt="Rounded Image" class="img-rounded" height="230" width="170"><div class="space-20"></div></a><div class=" col-sm-12 text-truncate text-center"><p>' + data.results[i].name + '<p></div></div>');
	}
	// $('#div3').append('<div class="space-30"></div>');
	console.log(data);
}

function search(data) {
	$('.jumlah').append(data.number_of_page_results);

	for (var i = 0; i < data.results.length; i++) {

		// $('#div2').append('<h1> ' + data.results[i].guid + '  </h1>')
		// $('#div2').append('<img src="' + data.results[i].image.original_url + '" alt="" width="100" height="100">');
		$('#hasil').append('<div class="row"><div class="col-sm-3 " id="hasil-fotogame"><a href="infogame.html?guid=' + data.results[i].guid + '"><img src="' + data.results[i].image.super_url + '" alt="Rounded Image" class="img-rounded img-responsive"></a></div><div class="col-md-6 "><div class="col-md-12"><h3 id="hasil-namagame">' + data.results[i].name + '</h3></div><div class="col-sm-12"><ul class="list-inline"><li class="list-inline-item"><h5 id="infogame">Overview :</h5></li><li class="list-inline-item"><div id="hasil-publisher">' + data.results[i].deck + '</div></li></ul><div class="space-30"></div></div>');
	}
	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
	// for (var i = 0; i < data.results.images.length; i++) {
	// 	$('#div2').append('<img src="' + data.results.images[i].original + '" alt="" width="100" height="100">');
	// }
	console.log(data);
}

function review(data) {
	for (var i = 0; i < data.results.length; i++) {
		$('#reviews').append('<div class="col-md-12"><nav class="navbar rand-nav-color"><div class="container"><div class="navbar-header">' + data.results[i].reviewer + '</div></div></nav><p>' + data.results[i].deck + '</p></div>');
	}
	console.log(data);
}