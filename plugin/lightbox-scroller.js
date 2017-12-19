videojs.registerPlugin('pluginName', function() {
    var myPlayer = this,
        playlistData = [
        	{
        	"shortDescription":"Tiger",
        	"thumbnailURL":"//solutions.brightcove.com/bcls/assets/images/Tiger.jpg",
        	"sources":[
        		{
        		"type":"application/x-mpegURL",
        		"src":"https://learning-services-media.brightcove.com/videos/hls/wildlife-tiger/wildlife-tiger.m3u8"
        		// "src":"https://solutions.brightcove.com/bcls/assets/videos/Tiger.m3u8"
        		},
        		{
        		"type":"video/mp4",
        		"src":"https://learning-services-media.brightcove.com/videos/hls/wildlife-tiger/wildlife-tiger.mp4"
        		}
        	    ]
        	},
        	{
        	"shortDescription":"Great Blue Heron",
        	"thumbnailURL":"//solutions.brightcove.com/bcls/assets/images/Great-Blue-Heron.png",
        	"sources":[
        		{
        		"type":"application/x-mpegURL",
        		"src":"https://solutions.brightcove.com/bcls/assets/videos/Great-Blue-Heron.m3u8"
        		},
        		{
        		"type":"video/mp4",
        		"src":"https://solutions.brightcove.com/bcls/assets/videos/Great-Blue-Heron.mp4"
        		}
        	    ]
        	},
        	{
        	"shortDescription":"Birds of a Feather",
        	"thumbnailURL":"https://solutions.brightcove.com/bcls/assets/images/BirdsOfAFeather.png",
        	"sources":[
        		{
        		"type":"video/mp4",
        		"src":"https://solutions.brightcove.com/bcls/assets/videos/BirdsOfAFeather.mp4"
        		}
        	    ]
        	},
        	{
        	"shortDescription":"Sea Marvels",
        	"thumbnailURL":"https://solutions.brightcove.com/bcls/assets/images/Sea Marvels.png",
        	"sources":[
        		{
        		"type":"video/mp4",
        		"src":"https://solutions.brightcove.com/bcls/assets/videos/Sea-Marvels.mp4"
        		}
        	    ]
        	}
        ];

      var buildPlaylistData = function () {
      	// Build the scroller of video thumbnails and descriptions
      	var str = "";
      	for (var i in playlistData) {
      		str += "<div id='scroller-item'><img id='" + i + "'src='" +
      			playlistData[i].thumbnailURL + "' /><div class=\"scroller-caption\"><span>" +
      			playlistData[i].shortDescription + "</span></div></div>";
      	}
      	document.getElementById("scroller").innerHTML = str;
      };

      scroller.onclick = function(e) {
      	// Load the selected video
      	console.log("EVENT.onClick video:" + e.target.id);
      	// Load the selected video
      	myPlayer.src(playlistData[e.target.id].sources);
      	// Reveal the lightbox
      	document.getElementById("playerLightbox").className = "playerShow";

      	// Play the video
      	myPlayer.play();
      }

      playerClose.onclick = function(e) {
      	myPlayer.pause();
      	// Hide the lightbox
      	document.getElementById("playerLightbox").className = "playerHide";
      }

      videojs("video_1").ready(function(){
          myPlayer = this;
          buildPlaylistData();
      });

});
