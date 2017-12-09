$(document).ready(function() {
	$('#hotgame').click(function() {
		hotgame();
	});



	$('#clear').click(function() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
	});
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

	function hotgame() {
		$('#div1').html('');
		$('#div2').html('');
		$('#div3').html('');
		var searchs = 'assassins creed';
		$.ajax({
			url: "http://api.giantbomb.com/search/",
			type: "get",
			data: {
				api_key: "ee6f3f25061cf71a97bd544052cf338657329c4e",

				query: searchs,
				resources: "game",
				format: "jsonp",
				json_callback: "example3"
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

function example3(data) {
	// $('#div3').append('<h5> ' + data.results.name + '  </h5>');
	// $('#div3').append('<h5> Description : </h5> ' + data.results.description);
	// $('#div3').append('<h5> Publisher : </h5>' + data.results.publishers[0].name + '');
	// $('#div3').append('<h5> Platform : </h5>' + data.results.platforms[0].name + '<br>');
	// $('#div3').append('<h5> Screenshots : </h5> <br> ');
	// // $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
	for (var i = 0; i < data.results.length; i++) {
		$('#div3').append('<div class="col-sm-2 horizon-item"><img src="' + data.results[i].image.original_url + '" alt="Rounded Image" class="img-rounded" height="230" width="170"><div class="space-20"></div><div class=" col-sm-12 text-truncate text-center"><p>' + data.results[i].name + '<p></div></div>');
	}
	// $('#div3').append('<div class="space-30"></div>');
	console.log(data);
}