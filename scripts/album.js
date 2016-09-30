 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26' },
         { title: 'Green', duration: '3:14' },
         { title: 'Red', duration: '5:01' },
         { title: 'Pink', duration: '3:21'},
         { title: 'Magenta', duration: '2:15'}
     ]
 };
 
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01' },
         { title: 'Ring, ring, ring', duration: '5:01' },
         { title: 'Fits in your pocket', duration: '3:21'},
         { title: 'Can you hear me now?', duration: '3:14' },
         { title: 'Wrong phone number', duration: '2:15'}
     ]
 };

 var albumCope = {
     title: 'The Clarence Greenwood Recordings',
     artist: 'Citizen Cope',
     label: 'Arista',
     year: '2004',
     albumArtUrl: 'https://fanart.tv/fanart/music/9b21f670-8359-4e11-be1d-bf75b649a719/albumcover/the-clarence-greenwood-recordings-4f4e5d1c6b57f.jpg',
     songs: [
         { title: 'Nite Becomes Day', duration: '4:49' },
         { title: 'Pablo Picasso', duration: '3:52' },
         { title: 'My Way Home', duration: '3:07' },
         { title: "Sideways", duration: '4:04'},
         { title: "Son's Gonna Rise", duration: '5:22'},
         { title: "Penitentiary", duration: '4:10'},
         { title: "Hurricane Waters", duration: '4:26'},
         { title: "D'Artagnan's Theme", duration: '5:14'},
         { title: "Bullet and a Target", duration: '4:25'},
         { title: "Fame", duration: '4:32'},
         { title: "D'Artagnan's Theme ", duration: '5:14'},
         { title: 'Deep', duration: '5:50'}
     ]
 };

 var createSongRow = function(songNumber, songName, songLength) {
     var template =
        '<tr class="album-view-song-item">'
      + '  <td class="song-item-number">' + songNumber + '</td>'
      + '  <td class="song-item-title">' + songName + '</td>'
      + '  <td class="song-item-duration">' + songLength + '</td>'
      + '</tr>'
      ;
 
     return template;
 };


 var setCurrentAlbum = function(album) {
     // #1
     var albumTitle = document.getElementsByClassName('album-view-title')[0];
     var albumArtist = document.getElementsByClassName('album-view-artist')[0];
     var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
     var albumImage = document.getElementsByClassName('album-cover-art')[0];
     var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
 
     // #2
     albumTitle.firstChild.nodeValue = album.title;
     albumArtist.firstChild.nodeValue = album.artist;
     albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
     albumImage.setAttribute('src', album.albumArtUrl);
 
     // #3
     albumSongList.innerHTML = '';
 
     // #4
     for (var i = 0; i < album.songs.length; i++) {
         albumSongList.innerHTML += createSongRow(i + 1, album.songs[i].title, album.songs[i].duration);
     }
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

 window.onload = function() {
     setCurrentAlbum(albumPicasso);
     var playRandom = playAlbum();
     document.getElementsByClassName("album-cover-art")[0].addEventListener("click", function(){
         playRandom();
     })
 };