// Build containers and display playlists 

$(document).ready(function(){
    getPlaylists();
});

//Get all playlists
function getPlaylists() {
    $.ajax({
        url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?type=playlist",
        type: "get",
        data: {},
        success: function(data) {
            playlists = data.data;
            loadPlaylists(playlists);
            searchSong(playlists);
        },
        error: function (xhr) {
            console.log(xhr);
        }
    })
}

//When click add playlist
$("#addButton").click(function () {
    $('.dialogDiv').show("fade");
    $(".dialogDiv").dialog({
// Open dialog container        
        modal: true,
        title: 'New Playlist',
        width: 500,
        height: "auto",
        moda: true,
        draggable: true,
        buttons: [
            {
                text: 'Next',
                
                // After click next
                click: function () {
                    var playlist_name = $("#playlist_name").val();
                    var playlist_img = $("#playlist_url").val();
                    
                    //check validation
                    if (playlist_img.endsWith(".jpg") || playlist_img.endsWith(".png")) {
                        alert("You may continue..");
                        $(".dialogDiv").dialog("close");
                    }
                    else {
                        alert("Make sure playlist name is latters.\nImage url ends with jpg or png.");
                    }
                    $('.dialogDiv').dialog("close");
                    $('.dialogDivSongs').show("fade");
                    $(".dialogDivSongs").dialog({
                        
                        title: 'Add Songs To Playlist',
                        width: 500,
                        height: "auto",
                        height: "auto",
                        moda: false,
                        draggable: true,
                        buttons: [
                            {
                                text: 'Finish & Save',
                                id: 'display_songs',
                                
                                //When click on save - insert new playlist
                                click: function() { 
                                    var songUrl = $('.song_url').val();
                                    if(songUrl.endsWith('.mp3')) {
                                        alert('New playlist was created!');
                                        finishAndDisplay();
                                    }
                                    else {
                                        alert("Make sure you add to Song Url '.mp3'.");
                                    }
                                }
                            },
                            {
                                //Add more songs
                                text: 'Add More Songs',
                                icon: 'ui-icon-circle-plus',
                                click: MoreSongs
                           },
                            {
                                text: 'Close',
                                icon: 'ui-icon-close',
                                click: function() {
                                    $( this ).dialog( "close" );
                                    }
                            }]
                    })
                } 
            },
        {
                text: 'Close',
                icon: 'ui-icon-close',
                click: function() {
                    $( this ).dialog( "close" );
                    }
        }]
    });
});

//Build playlists divs and display
function loadPlaylists(playlists) {
    //build main div
    for(var i = 0; i < playlists.length; i++) {
        var playlist_div = $('<div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 gridView" id="' + playlists[i].id + '"></div>');
        
        //add playlist's title
        var playlist_title = $('<h3 class= playlistTitle>' + playlists[i].name + '</h3>');
        $(playlist_div).append(playlist_title);
        
        //set background image
        $(playlist_div).css("background-image", 'url("' + playlists[i].image + '")');
       
        //remove playlist button
        var remove_btn = $('<a href="#"></a>');
        var remove_icon = $('<span class="glyphicon glyphicon-remove remove-playlist"></span>');
        $(remove_btn).append(remove_icon);
        $(playlist_div).append(remove_btn);
        $("#intoMainPlaylistContainer").append(playlist_div);
        
        //edit button
        var edit_btn = $('<a href="#"></a>');
        var edit_icon = $('<span class="glyphicon glyphicon-pencil edit-btn"></span>');
        $(edit_btn).append(edit_icon);
        $(playlist_div).append(edit_btn);
        $("#intoMainPlaylistContainer").append(playlist_div);

        //play button
        var play_btn = $('<a href="#"></a>');
        var play_icon = $('<span class="glyphicon glyphicon-play-circle play-btn"></span>');
        $(play_btn).append(play_icon);
        $(playlist_div).append(play_btn);
        $("#intoMainPlaylistContainer").append(playlist_div);
        
        var tmp = $(playlists[i].id);
        $(".gridView").mouseover(function(){
            $(".gridView a").css("display", "inline"); 
            $(".gridView a").css("animation", "animateElement linear .2s");    
            $(".gridView a").css("animation-iteration-count:", "1");
        });
        $(".gridView").mouseout(function() {
            $(".gridView a").css("display", "none");
        });

    }   
    
    // When click on delete
    $('.remove-playlist').each(function () {
        $(this).click(function () {
            var playlist_id = $(this).parent().parent().attr('id');
            $.ajax({
                url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?id=" + playlist_id + "&type=playlist",
                type: "DELETE",
                data: {},
                success: function (data) {
                    alert("Playlist Deleted.");
                    location.reload(true)

                },
                error: function (xhr) {
                    console.log(xhr);
                }

            });
        })

    })
    
    //When click to play
    $('.play-btn').each(function () {
        $(this).click(function () {
            var playlist_id = $(this).parent().parent().attr('id');
            var playlist_img = playlists[playlist_id-1].image;
            console.log(playlist_id);
            console.log(playlists);
            for (var i = 0 in playlists) {
                var db_id = playlists[i].id;
                if (db_id == playlist_id) {
                    $.ajax({
                        url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?id=" + playlist_id+ "&type=songs",
                        type: "GET",
                        data: {},
                        success: function (data) {
                            var playlist_songs = data.data;
                            displaySongs(playlist_songs, playlist_img);
                        },
                        error: function (xhr) {
                            console.log(xhr);
                        }
                    });
                }
            }
        });
    });

    //etid playlists - add/remove songs.
    $('.edit-btn').each(function () {
        $(this).click(function () {
            var playlist_id = $(this).parent().parent().attr('id'); 
            for (var i = 0 in playlists) {
                var db_id = playlists[i].id;
                if (db_id == playlist_id) {
                    $.ajax({
                        url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?id=" + playlist_id + "&type=songs",
                        type: "GET",
                        data: {},
                        success: function (data) {
                            var playlist_songs = data.data;
                            editPlaylist(playlist_songs);
                            $('.editDialog').show("fade");
                            $(".editDialog").dialog({
                            modal: true,
                            width: 500,
                            height: 'auto',
                            moda: true,
                            draggable: true,
                            buttons: [
                                {
                                    text: 'Close',
                                    click: function () {
                                        $(this).dialog("close");
                                    }
                                },
                                {
                                    text: 'Add Songs', 
                                    click: function () {
                                        $('.editDialog').dialog("close");
                                        $('.addSongsDialog').show("fade");
                                        $('.addSongsDialog').dialog({
                                            modal: true,
                                            width: 500,
                                            height: 'auto',
                                            moda: true,
                                            draggable: true,
                                            buttons: [
                                                {
                                                    text: 'Submit',
                                                    click: function() {
                                                        addSongs_afterSubmit(playlist_songs);
                                                        var song_url = $('.songUrl').val();
                                                        if(song_url.endsWith('.mp3')) {
                                                            alert('New Song was created!');
                                                        }
                                                        else {
                                                            alert("Make sure Song Url ents eith '.mp3'.");
                                                        }
                                                        $.ajax({
                                                            url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?id=" + playlist_id + "&type=songs",
                                                            data: playlist_songs,
                                                            type: "POST",
                                                            success: function (payload) {
                                                                $(".addSongsDialog").dialog("close");
                                                            },
                                                            error: function (xhr) {
                                                                console.log(xhr);
                                                            }

                                                        })
                                                    }
                                                },
                                                {
                                                text: 'Close',
                                                    click: function () {
                                                        $(this).dialog("close");
                                                    }
                                                },
                                                {
                                                    text: 'Add More Songs',
                                                    icon: 'ui-icon-circle-plus',
                                                    click: addMoreSongs
                                                }
                                            ]
                                        })
                                    }
                                },
                                {
                                    text: "Delete Songs",
                                    click: function  () {
                                        $(".editDialog").dialog("close");
                                        $('.deleteDialog').show("fade");
                                        delete_songs(playlist_songs);
                                        $('.deleteDialog').dialog({
                                            modal: true,
                                            width: 500,
                                            height: 'auto',
                                            moda: true,
                                            draggable: true,
                                            buttons: [
                                                {
                                                    text: 'Close',
                                                    click: function () {
                                                        $(this).dialog("close");
                                                    }
                                                },
                                                {
                                                    text: 'Submit',
                                                    click: function() {
                                                        $.ajax({
                                                            url: "https://tuneintothemusic.herokuapp.com/eu-cdbr-west-02.cleardb.net/player/api/main?id=" + playlist_id + "&type=songs",
                                                            data: playlist_songs,
                                                            type: "POST",
                                                            success: function (payload) {
                                                                $(".deleteDialog").dialog("close");
                                                            },
                                                            error: function (xhr) {
                                                                console.log(xhr);
                                                            }

                                                        })
                                                    }
                                                }
                                            ]
                                        })
                                    }
                                }
                            ]
                            });
                            
                        },
                        error: function (xhr) {
                            console.log(xhr);
                        }
                    });
                }
            }
        
        });
    });
}

//search playlists
function searchSong(playlists) {

    var playlists = playlists,
        playlistNames = [];
    for (var i in playlists) {
            playlistNames.push(playlists[i].name.toUpperCase());
        }
    
    $("#serachBtn").click(function(){
        var input = $("#serachInput").val().toUpperCase();
        var result = playlistNames.indexOf(input);
        var playlist = Array();
        
        if(result != -1){
            playlist.push(playlists[result]);
            $('#intoMainPlaylistContainer').html('');
            loadPlaylists(playlist);
        }
        else{
            alert("Make sure you insert the full playlist name.");
        }
    });
}

//Edit playlist  - add songs
function editPlaylist(playlist_arr) {
    
    var index = -1,
     tracks = {
                num: [],
                name: [],
                url: []
            },
        
    count = 0;
    
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
            };
            
            $('.playlistSongs').html('');
            
            for(i in track.trackNumber) {
                $('.playlistSongs').append('<li><div class="plItem"><span class="plNum">'+track.trackNumber[i]+'.</span><span class="plTitle">' +       track.trackName[i] + '</span></div></li>');
            }
            
    });

    return playlist_arr;  
}

//Edit playlist  - delete songs
function delete_songs (playlist_arr) {
        
    var index = -1,
     tracks = {
                num: [],
                name: [],
                url: []
            },
        
    count = 0;
    
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
            };
            
            $('.songsUl').html('');
            
            for(i in track.trackNumber) {
                $('.songsUl').append('<li><div class="plItem"><span class="plNum">'+track.trackNumber[i]+'.</span><span class="plTitle">' +       track.trackName[i] + '</span></div></li>');
            }
            
          
            var li = $('.songsUl li').on('click', function() {
                var id = parseInt($(this).index());
                if(id !== index){
                    deleteSong(id);
                }
            });
            
    });
    
    var deleteSong = function(id) {
        var txt = "";
        if(confirm("If you want the delete the song press hell'ya")){
            
            txt = "The song: " + playlist_arr.songs[id].name + " Will be deleted from the plalylist.";
            alert(txt);
            playlist_arr.songs.splice(id,1);
            delete_songs(playlist_arr);
            return playlist_arr;
        }
        else{
            txt = "I guess not that song..";
            alert(txt);
        }
    }
    return playlist_arr;
}

//Update playlist  - When click save
function addSongs_afterSubmit (playlist_arr) {
    //var songs_data = Array();
    var songs_list  = document.getElementsByClassName("songName");
    var url_list    = document.getElementsByClassName("songUrl");

    for (var i = 0; i < songs_list.length; i++) {
        var songName = songs_list[i].value;
        var songUrl = url_list[i].value;
        if (songName.length > 0 && songUrl.length > 0) { 
            playlist_arr.songs.push({
                name: songName,
                url: songUrl
            });
        }
    }
    return playlist_arr;
}