$(document).ready(function () {
	//feed to parse
	var feed = "https://www.metropolia.fi/ajankohtaista/tapahtumat/?type=100&tx_ttnews%5Bcat%5D=135%2C134%2C133%2C132&cHash=9adf1714c65e662e9b1eef82120dbcbc";

	$.ajax(feed, {
		accepts: {
			xml: "application/rss+xml"
		},
		dataType: "xml",
		success: function (data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("entry").each(function () { // or "item" or whatever suits your feed
				var el = $(this);

				var list = { title: el.find("title").text(), link: el.find("link").text(), description: el.find("summary").text() }

				//arr.push(list);


				$.each(list, function (index, value) {


					$('<div/>', {
						text: value.replace(/<(?:.|\n)*?>/gm, ''),
						class: 'className'
					}).appendTo('body');

				});


			});


		}
	});

});

