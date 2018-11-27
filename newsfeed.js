$(document).ready(function() {
	//feed to parse
	var feed = "https://www.is.fi/rss/ulkomaat.xml";
	
	$.ajax(feed, {
		accepts:{
			xml:"application/rss+xml"
		},
		dataType:"xml",
		success:function(data) {
			//Credit: http://stackoverflow.com/questions/10943544/how-to-parse-an-rss-feed-using-javascript

			$(data).find("item").each(function () { // or "item" or whatever suits your feed
                var el = $(this);

                var arr = [];

                var title = { title: el.find("title").text(), link: el.find("link").text(),  description: el.find("description").text() }

                arr.push(title);

                console.log(title);

                $.each( arr, function( index, value ){
                    title += value;
                    $('.everything').html("<p>" + title.title + "</p>");
                });
                 

           
                
				// console.log("------------------------");
				// console.log("title      : " + el.find("title").text());
				// console.log("link       : " + el.find("link").text());
                // console.log("description: " + el.find("description").text());
                
                
                // $(".title").html(el.find("title").text());
                // $(".link").html(el.find("link").text());
                // $(".description").html(el.find("description").text());
			});
	

		}	
	});
	
});