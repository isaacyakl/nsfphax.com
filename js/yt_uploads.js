var channelId = "UCY_WxlLSJkAX9bBLetuyy8g";

var channelIdYak = "UChtsf8MNcRKILfxEGZdmnWQ";

$(document).ready(function() {
  /*$.get(

		"https://www.googleapis.com/youtube/v3/channels",{

			part: 'contentDetails',

			id: channelId,

			key: 'AIzaSyD6NLkxcJHA3ocC_VdfklfKStcRxQRHBJk'},

			function(data){

				$.each(data.items, function(i, item){

					pid = item.contentDetails.relatedPlaylists.uploads;

					getVids(pid);

				})

			}

	);*/

  function getVids() {
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        part: "snippet",

        maxResults: 12,

        playlistId: "PLmsEFKXc2nPXnsnc97hKRLe-Ew9n8IAuv",

        key: "AIzaSyBkYV1U47glzInyBNtIf8TBOg4xYgqg_S4"
      },

      function(data) {
        var output;

        if (data.items.length > 0) {
          $("#haxvidsstatus").html("&nbsp;&nbsp;&nbsp;Loading Videos...");

          $.each(data.items, function(i, item) {
            videoTitle = item.snippet.title;

            videoId = item.snippet.resourceId.videoId;

            output =
              '<div class="work"><div class="embed-container"><iframe onload="$(\'#haxvidsstatus\').remove();" src="https://www.youtube.com/embed/' +
              videoId +
              '?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe></div></div>';

            $("#haxvids").append(output);
          });
        } else {
          $("#haxvidsstatus").html("&nbsp;&nbsp;&nbsp;No Videos. Feed me!");
        }
      }
    );
  }

  getVids();
});
