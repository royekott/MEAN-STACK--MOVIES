plyr.setup(".plyr--audio");

//add more input's for adding song to playlist.
function MoreSongs() {
    for (var i = 0; i < 2; i++) {
        var label_name = jQuery("<label><h4>Song Name: </h4><input type='text' placeholder='Playlist Name' class='song_name'></label>");

        var label_url = jQuery("<label> <h4>Song URL: </h4><input type='text' placeholder='Song URL' class='song_url'></label >");

        $(".dialogDivSongs").append(label_name);
        $(".dialogDivSongs").append(label_url);
    }
}

function addMoreSongs() {
    for (var i = 0; i < 2; i++) {
        var labelName = jQuery("<label><h4>Song Name: </h4><input type='text' placeholder='Song Name' class='songName'></label>");

        var labelUrl = jQuery("<label> <h4>Song URL: </h4><input type='text' placeholder='Song URL' class='songUrl'></label >");

        $(".addSongsDialog").append(labelName);
        $(".addSongsDialog").append(labelUrl);
    }
}

//display all playlists in divs.
function finishAndDisplay() {
    
    var playlist_data = {
        name: $("#playlist_name").val(),
        image: $("#playlist_url").val(),
        songs: []
    };
    var songs_list  = document.getElementsByClassName("song_name");
    var url_list    = document.getElementsByClassName("song_url");

    for (var i = 0; i < songs_list.length; i++) {
        var song_name = songs_list[i].value;
        var song_url = url_list[i].value;
        if (song_name.length > 0 && song_url.length > 0) { 
            playlist_data.songs.push({
                name: song_name,
                url: song_url
            });
        }
    }
    
     $.ajax({
        url: "http://localhost/player/api/main?type=playlist",
        type: "POST",
        dataType: "json",
        data: playlist_data,
        success: function (payload) {
            $(".dialogDivSongs").dialog("close");
        },
        error: function (xhr) {
            console.log(xhr);
        }
    });
   location.reload(true);
 }
//diplay the chossen playlist on play bar.
function displaySongs(playlist_arr, playlist_img) {
     //$('#nowPlayingBarContainer').draggable();
     $('#nowPlayingBarContainer').resizable();
     $( "#nowPlayingBarContainer" ).draggable({ scroll: true });
    var supportsAudio = document.createElement('audio');
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'http://localhost/player/',
            tracks = {
                num: [],
                name: [],
                url: []
            }
        
        var count = 0;
        for(x in playlist_arr.songs){
            count++
            tracks.name.push(playlist_arr.songs[x].name);
            tracks.url.push(playlist_arr.songs[x].url);
            tracks.num.push(count);
            } 
          
            var buildPlaylist = $(tracks).each(function(key, value) {
                var track = {
                    trackNumber : value.num,
                    trackName : value.name,
                    trackUrl : value.url
                }
                $('#plList').html('');
                for(i in track.trackNumber){
                $('#plList').append('<li><div class="plItem"><span class="plNum">'+track.trackNumber[i]+'</span><span class="plTitle">' + track.trackName[i] + '</span></div></li>');
                }
            }),
            playlistImg = $("#playlist_image");
            playlistImg.css("background-image" ,"url("+playlist_img+")");
            var trackCount = count,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').on('play', function () {
                playing = true;
                npAction.text('Now Playing');
            }).on('pause', function () {
                playing = false;
                npAction.text('Paused');
            }).on('ended', function () {
                npAction.text('Ended');
                var indexNext = index + 1;
                if(indexNext < trackCount){
                    loadTrack(indexNext);
                }
            }).get(index),
               
            btnPrev = $('#btnPrev').on('click', function () {
                var indexPrev = index - 1;    
                if(index <= 0){
                    loadTrack(0);
                }
                else{
                    loadTrack(indexPrev);
                }
            }),
            btnNext = $('#btnNext').on('click', function () {
                if(index < trackCount-1) {
                    var indexNext = index + 1;
                    loadTrack(indexNext);
                }
                else{
                    loadTrack(index);
                }
            }),
        
          li = $('#plList li').on('click', function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),

            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList').removeClass('#plList');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                index = id;
                npTitle.text(tracks.name[index]);
                audio.src = mediaPath + tracks.url[index];
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        loadTrack(index);
        $("#nowPlayingBarContainer").show("fade",800);
        $('#intoMainPlaylistContainer').css("opacity","0.5").css("transition","0.3s");
    }
};

function closePlaylist() {
    $('.toggler').hide("fade",800);
    $('#intoMainPlaylistContainer').css("opacity","1").css("transition","0.3s");
    
}


