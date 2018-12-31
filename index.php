<!-- Index main page -->
<!DOCTYPE html>
<html>
    <head>
        <title>Welome</title>
        <!-- Css links -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="assets/styles/audioPlayer.css">
        <link rel="stylesheet" href="assets/styles/main.css">
        <link rel="stylesheet" href="//code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css">
        <link rel="stylesheet" href="https://cdn.plyr.io/2.0.15/plyr.css">
        <!-- Js links -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdn.plyr.io/2.0.15/plyr.js"></script>
    </head>
    
    <body>
  <!-- Navigation bar -->      
        <nav class="navbar navbar-inverse">
          <div class="container">
            <div class="navbar-header">
              <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>                        
              </button>

            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav">
                  <li><button type="button" id="addButton" class="btn"><span class="glyphicon glyphicon-plus"></span> Add new Playlist</button></li>
              </ul>
              <ul class="nav navbar-nav navbar-right">
                <li class="active" id="searchRow">
                    <form class="navbar-form" role="search">
                        <input type="text" id="serachInput" class="form-control" placeholder="Search"/>
                        <button type="button" id="serachBtn" class="btn btn-danger serachBtn" onclick="searchSong"><span class="glyphicon glyphicon-search"></span></button>
                      </form>
                </li>  
              </ul>
            </div>
          </div>
        </nav>    
       
        
   <!-- playing bar container -->     
        <div class="toggler col-12" style="display:none;" id="nowPlayingBarContainer">
            <div class="column add-bottom">
                <div id="mainwrap">
                    <div id="buttonsTop">
                        <button type="button" id="closePlaylistBtn" class="btn btn-danger" onclick="closePlaylist()"><span class="glyphicon glyphicon-remove"></span></button>
                        <div id='playlist_image'></div>
                    </div>
                    <div id="nowPlay">
                        <span class="left" id="npAction">Now Playing</span>
                        <span class="right" id="npTitle"></span><br><br><br>
                    </div>
                    <div id="plwrap">
                        <ul id="plList"></ul>
                    </div>
                    <div id="audiowrap">
                        <div id="tracks">
                            <a id="btnPrev">&larr;</a>
                            <a id="btnNext">&rarr;</a>
                        </div>
                        <div id="audio0">
                            <audio preload id="audio1" class="plyr--audio" controls="controls" autoplay>Your browser does not support HTML5 Audio!</audio>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Add playlist Dialog -->    
        <div id="dialog-container">                   
            <div class="dialogDiv ui-state-default ui-corner-all" style="display:none; overflow: hidden; background-color:#252628; color:#fff;">
                <h3> Add New playlist</h3>
                <hr>
                <label><h4>Playlist Name: </h4><input type="text" placeholder="Playlist Name" id="playlist_name" class="playlist_input"></label>
                <br><br>
                <label><h4>Image URL: </h4><input type="text" placeholder="Image URL" id="playlist_url" class="playlist_input"></label>

            </div>
            <div class="dialogDivSongs ui-state-default ui-corner-all" style="display:none; overflow: hidden;background-color:#252628; ">
                    <h3> Add Playlist Songs: </h3>
                    <hr>
                    <label><h4>Song Name: </h4><input type="text" placeholder="Song Name" class="song_name" id="drat"></label>
                    <label><h4>Song URL: </h4><input type="text" placeholder="Song URL" class="song_url"></label>
                    <label><h4>Song Name: </h4><input type="text" placeholder="Song Name" class="song_name"></label>
                    <label><h4>Song URL: </h4><input type="text" placeholder="Song URL" class="song_url"></label>
            </div>
        </div>
        
        <!-- Edit playlist Dialog -->    
        <div class="editDialog ui-state-default ui-corner-all" style="display:none; overflow: hidden;background-color:#252628; ">
            <h3> Edit Playlist Songs: </h3>
            <hr>
            <div id="editPlaylist">
                <ul class="playlistSongs"></ul>
            </div> 
        </div>
        
        <!-- Delete playlist Dialog --> 
        <div class="deleteDialog ui-state-default ui-corner-all" style="display:none; overflow: hidden;background-color:#252628; ">
            <h3> Select Song To Delete Songs: </h3>
            <hr>
            <div id="deleteSongs">
                <ul class="songsUl"></ul>
            </div> 
        </div>
        
        <!-- Add more songs inserts options on Edit/Add dialogs --> 
        <div class="addSongsDialog ui-state-default ui-corner-all" style="display:none; overflow: hidden;background-color:#252628; ">
                <h3> Add Songs: </h3>
                <hr>
                <label><h4>Song Name: </h4><input type="text" placeholder="Song Name" class="songName" id="drat1"></label>
                <label><h4>Song URL: </h4><input type="text" placeholder="Song URL" class="songUrl"></label>
                <label><h4>Song Name: </h4><input type="text" placeholder="Song Name" class="songName"></label>
                <label><h4>Song URL: </h4><input type="text" placeholder="Song URL" class="songUrl"></label>
        </div>
    
        <!-- Maiv container --> 
        <div class="container" id="mainPlaylistContainer">
            <div class="row">
                <div class="col-12" id="headlines">
                    <a href="index.php" style="text-decoration: none;"><h1 id="headLine">The Best Tunes for You</h1></a>
                </div>
            </div>

            <div id="intoMainPlaylistContainer" class='row well well-lg'>
                <div class="row" id="gridViewRow"></div>
            </div>
            
        </div>
        
        <!-- Footer --> 
            <footer class="footer-distributed">
                
                <!-- Left side footer --> 
                <div class="footer-left">
                    <h3>Contact Info</h3>
                    <ul class="contactInfo">
                        <li>
                            <a href="mailto:royekott@gmail.com"><span class="glyphicon glyphicon-envelope"></span></a>
                        </li>
                        <li>
                            <a href="tel:054-6792-567"><span class="glyphicon glyphicon-phone"></span></a>
                        </li>
                        <li>
                            <a href="https://www.google.com/maps/place/%D7%9B%D7%A4%D7%A8+%D7%99%D7%94%D7%95%D7%A9%D7%A2%E2%80%AD/@32.6838388,35.1602453,15z/data=!3m1!4b1!4m5!3m4!1s0x151dadb906d5683b:0xd2a5e1b15a3f38ce!8m2!3d32.681639!4d35.151976" target="_blank">
                                <span class='glyphicon glyphicon-map-marker'></span>
                            </a>
                        </li>
                    </ul>
                </div>
                
                <!-- Center side footer --> 
                <div class="footer-center">
                    <a class="logo" href="index.php"><img src="assets/artwork/images/logo.PNG"></a> 
                </div>
                
                <!-- Right side footer --> 
                <div class="footer-right">
                    <h3>Connect Info</h3>
                    <ul class="connectInfo">
                        <li>
                            <a href="https://twitter.com/brolik" target="_blank"><img src="https://brolik.com/images/icon-twitter.svg"></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/roye.kott" target="_blank"><img src="https://brolik.com/images/icon-facebook.svg"></a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/roye-kott-891561106/" target="_blank"><img src="https://brolik.com/images/icon-linkedin.svg"></a>
                        </li>
                    </ul>
                </div>
            </footer>
        
            <!-- Low footer --> 
            <footer class="lowFooter">
                <p>Created By &copy; Roye Kott</p>
            </footer>

            <script src="assets/scripts/ui-dialog.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <script src="assets/scripts/functions.js"></script>
            <script src="assets/scripts/app.js"></script>        

    </body>
</html>