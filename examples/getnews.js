$(document).ready(function() {
	// $('#clear').click(function() {
	// 	$('#div1').html('');
	// 	$('#div2').html('');
	// 	$('#div3').html('');
	// });
	// $('#example1').click(function() {
	// 	$('#div1').html('');
	// 	$('#div2').html('');
	// 	$('#div3').html('');
	// 	$.ajax({
	// 		url: "https://www.giantbomb.com/api/game/3030-12909/",
	// 		type: "get",
	// 		data: {
	// 			api_key: "ee6f3f25061cf71a97bd544052cf338657329c4e",
	// 			field_list: "name,images",
	// 			format: "jsonp",
	// 			json_callback: "example1"
	// 		},
	// 		dataType: "jsonp"
	// 	});
	// });
	$('#example1').click(function() {
		$.ajax({
			url: "https://newsapi.org/v2/top-headlines?sources=polygon&apiKey=5d06309681224659b39b6ef8480f8c1f",
			type: "get",
			dataType: "json",
			jsonCallback: "jsonCallback",
			success: function(result) {
				example1(result);
			},
			error: function(result) {
				console.log("ERROR");
				console.log(result);
			}
			// dataType: "jsonp"
		});
	});

});

function example1(data) {
	$('#div1').append('<h3> Jumlah Data : ' + data.articles.length + '  </h3>');
	for (var i = 0; i < data.articles.length; i++) {
		$('#div1').append('<h3> ' + data.articles[i].author + '  </h3>');
		$('#div1').append('<h4> ' + data.articles[i].publishedAt + '  </h4>');
		$('#div1').append('<h4> ' + data.articles[i].title + '  </h4>');
		$('#div1').append('<h4> ' + data.articles[i].description + '  </h4>');
		$('#div1').append('<h4> <a href=" ' + data.articles[i].url + '">See this link</a>  </h4>');
		$('#div1').append('<div class="col s12 m3"><div class="card"><div class="card-image"><img src="' + data.articles[i].urlToImage + '"> </div></div></div><br><br>');
	}
	console.log(data);
}

// function example2(data) {
// 	$('#div2').append('<h5> Found Data : ' + data.results.length + '  </h5>');
//
// 	for (var i = 0; i < data.results.length; i++) {
// 		// $('#div2').append('<h1> ' + data.results[i].name + '  </h1>')
// 		// $('#div2').append('<h1> ' + data.results[i].guid + '  </h1>')
// 		// $('#div2').append('<img src="' + data.results[i].image.original_url + '" alt="" width="100" height="100">');
// 		$('#div2').append('<div class="card horizontal"><div class="card-image card-small"><img src="' + data.results[i].image.small_url + '" width="100" height="auto"></div> <div class = "card-stacked" ><div class = "card-content" ><div class = "row" ><div class = "col s12" >	Nama game: <h4> ' + data.results[i].name + '</h4> </div><div class = "col s12" > ID game: <h4> ' + data.results[i].guid + '</h4></div> </div> </div> <div class = "card-action" ><a href = "#" > This is a link < /a> </div> </div> </div>');
// 	}
// 	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
// 	// for (var i = 0; i < data.results.images.length; i++) {
// 	// 	$('#div2').append('<img src="' + data.results.images[i].original + '" alt="" width="100" height="100">');
// 	// }
// 	console.log(data);
// }
//
// function example3(data) {
// 	$('#div3').append('<h5> ' + data.results.name + '  </h5>');
// 	$('#div3').append('<h5> Description : </h5> ' + data.results.description);
// 	$('#div3').append('<h5> Publisher : </h5>' + data.results.publishers[0].name + '');
// 	$('#div3').append('<h5> Publisher : </h5>' + data.results.original_release_date + '');
// 	$('#div3').append('<h5> Platform : </h5>' + data.results.platforms[0].name + '<br>');
// 	$('#div3').append('<h5> Screenshots : </h5> <br> ');
// 	// $('#div1').append('<h1> ' + data.results.images.length + '  </h1>')
// 	for (var i = 0; i < data.results.images.length; i++) {
// 		$('#div3').append('<div class="col s12 m3"><div class="card"><div class="card-image"><img src="' + data.results.images[i].original + '"> </div></div></div>');
// 	}
// 	console.log(data);
// }