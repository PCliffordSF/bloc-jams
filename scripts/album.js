
 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number" data-song-number="' + songNumber + '">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
     ;
     var $row = $(template);
     var clickHandler = function() {
        var songNumber = parseInt($(this).attr('data-song-number'));
         // Need to check all possible states of currentlyPlayingSong
        if (currentlyPlayingSongNumber !== null) {        
            var currentlyPlayingCell =   getSongNumberCell(currentlyPlayingSongNumber);
            
            currentlyPlayingCell.html(currentlyPlayingSongNumber);
        }
        if (currentlyPlayingSongNumber !== songNumber) {
            $(this).html(pauseButtonTemplate);
            currentlyPlayingSongNumber = songNumber;
            currentSongFromAlbum = currentAlbum.songs[songNumber - 1];
            updatePlayerBarSong();
        } 
        else if (currentlyPlayingSongNumber === songNumber) {
            $(this).html(playButtonTemplate);
            $('.main-controls .play-pause').html(playerBarPlayButton);
            currentlyPlayingSongNumber = null;
            currentSongFromAlbum = null;
        }
    };
          
     var onHover = function(event) {
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));

        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(playButtonTemplate);
        }
     };
     var offHover = function(event) {
          
        var songNumberCell = $(this).find('.song-item-number');
        var songNumber = parseInt(songNumberCell.attr('data-song-number'));
        if (songNumber !== currentlyPlayingSongNumber) {
            songNumberCell.html(songNumber);
        }
     };
     
     $row.find('.song-item-number').click(clickHandler);    
     $row.hover(onHover, offHover);    
     return $row;
 
 };

 var setCurrentAlbum = function(album) {
     currentAlbum = album;
     var $albumTitle = $('.album-view-title');
     var $albumArtist = $('.album-view-artist');
     var $albumReleaseInfo = $('.album-view-release-info');
     var $albumImage = $('.album-cover-art');
     var $albumSongList = $('.album-view-song-list');
   
     $albumTitle.text(album.title);
     $albumArtist.text(album.artist);
     $albumReleaseInfo.text(album.year + ' ' + album.label);
     $albumImage.attr('src', album.albumArtUrl); 
     $albumSongList.empty();
 
     for (var i = 0; i < album.songs.length; i++) {
        var $newRow = createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
        $albumSongList.append($newRow);
     }
 };

 var trackIndex = function(album, song) {
     return album.songs.indexOf(song);
 };

var updatePlayerBarSong = function() {

    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.artist);
    
    $('.main-controls .play-pause').html(playerBarPauseButton);

};

var playAlbum = function() {
    var albumPlayed = 0;
    var albumsList = [
        albumPicasso,
        albumMarconi,
        albumCope
    ];
    return function(album) {
        albumPlayed += 1;
        setCurrentAlbum(albumsList[albumPlayed % albumsList.length]);
    }; 
};

var rollUpFunction = function() {
    
    var currentSongIndex = trackIndex(currentAlbum, currentSongFromAlbum);
    console.log(currentSongIndex);
    
    if ($(this).hasClass("next")) { 
        console.log("next");
        currentSongIndex++;
        var getLastSongNumber = function(index) {
        return index == 0 ? currentAlbum.songs.length : index;
        };  
    } else if ($(this).hasClass("previous")) { 
        console.log("previous");
        currentSongIndex--;
        var getLastSongNumber = function(index) {
        return index == (currentAlbum.songs.length - 1) ? 1 : index + 2;
        };
    }
    console.log(currentSongIndex);
    
    if (currentSongIndex >= currentAlbum.songs.length) {
        currentSongIndex = 0;
    } else if (currentSongIndex < 0) {
        currentSongIndex = currentAlbum.songs.length - 1;
    }
        
    setSong(currentSongIndex);
        
    $('.currently-playing .song-name').text(currentSongFromAlbum.title);
    $('.currently-playing .artist-name').text(currentAlbum.artist);
    $('.currently-playing .artist-song-mobile').text(currentSongFromAlbum.title + " - " + currentAlbum.title);
    $('.main-controls .play-pause').html(playerBarPauseButton);
    
    var lastSongNumber = getLastSongNumber(currentSongIndex);
    var $previousSongNumberCell = getSongNumberCell(currentlyPlayingSongNumber); 
    var $lastSongNumberCell = getSongNumberCell(lastSongNumber);    
    
    $previousSongNumberCell.html(pauseButtonTemplate);
    $lastSongNumberCell.html(lastSongNumber); 
        
    };

var setSong = function(songNumber) {
    currentlyPlayingSongNumber = songNumber + 1;
    currentSongFromAlbum = currentAlbum.songs[songNumber];
}

var getSongNumberCell = function(number) {
    return $('.song-item-number[data-song-number="' + number + '"]');
    
}
     
 var playButtonTemplate = '<a class="album-song-button"><span class="ion-play"></span></a>';
 var pauseButtonTemplate = '<a class="album-song-button"><span class="ion-pause"></span></a>';
 var playerBarPlayButton = '<span class="ion-play"></span>';
 var playerBarPauseButton = '<span class="ion-pause"></span>';
 var currentlyPlayingSongNumber = null;
 var currentSongFromAlbum = null;
 var currentAlbum = null;
 var $previousButton = $('.main-controls .previous');
 var $nextButton = $('.main-controls .next');

 $(document).ready(function() {
     setCurrentAlbum(albumPicasso);
     $previousButton.click(rollUpFunction);
     $nextButton.click(rollUpFunction);
 });

