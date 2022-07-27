var channelId = "UCY_WxlLSJkAX9bBLetuyy8g";

function getVids() {
	$.get(
		"https://www.googleapis.com/youtube/v3/playlistItems",
		{
			part: "snippet",
			maxResults: 12,
			playlistId: "PLmsEFKXc2nPXnsnc97hKRLe-Ew9n8IAuv",
			key: "AIzaSyD385MdHyR2kzNgvAYPrtWjpuzSGtejML0",
		},

		function (data) {
			var output;

			if (data.items.length > 0) {
				// Videos were returned
				$("#haxvidsstatus").html("Loading...");

				$.each(data.items, function (i, item) {
					videoTitle = item.snippet.title;

					videoId = item.snippet.resourceId.videoId;

					output = '<div class="work"><div class="embed-container"><iframe onload="$(\'#haxvidsstatus\').remove();" src="https://www.youtube.com/embed/' + videoId + '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div></div>';

					$("#haxvids").append(output);
				});
			} else {
				// No videos found
				$("#haxvidsstatus").html("No Videos. Feed me!<br><img src='https://media.giphy.com/media/uAEXaY2T99zeE/giphy.gif'>");
			}
		}
	).error(function () {
		$("#haxvidsstatus").html("OOF! Failed to load videos. Try again in a couple hours.<br><img src='https://media.giphy.com/media/rZxMZGtDcKdS8/giphy.gif'>");
	});
}

// Once page is loaded
$(document).ready(function () {
	getVids(); // Show videos
});
