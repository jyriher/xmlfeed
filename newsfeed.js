$(document).ready(function () {
	//feed to parse
	var feed = "https://www.is.fi/rss/ulkomaat.xml";

	$.ajax(feed, {
		accepts: {
			xml: "application/rss+xml"
		},
		dataType: "xml",
		success: function (data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("item").each(function () { // or "item" or whatever suits your feed
				var el = $(this);



				var list = { title: el.find("title").text(), link: el.find("link").text(), description: el.find("description").text() }

				//arr.push(list);


				$.each(list, function (index, value) {


					$('<div/>', {
						text: value,
						class: 'className'
					}).appendTo('body');

				});


			});


		}
	});

});