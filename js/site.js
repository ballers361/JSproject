(function($) {
  $(document).ready(
  function() {
    var uName, spotifyAPIURL, spotifyCclientID, spotifySearchURL, spotifyClientSecret;
    var spotifyArtistAlbums, artistID, artistBio, albumBio, searchQuery, artistQuery;
    var numFollowers, popularityRating, genres, popularityRating, popularityRating, associatedGenres;
    var artistsAlbumsFunction, artistAlbumsURL, albumNameArray, albumImageArray, albumDataArray;
    var i, j, k;
    var artistIMG;

    $('#sp-form').on('submit', function(event) {
      uName = $('#sp-username').val();
      spotifyAPIURL = 'https://api.spotify.com/v1/';
      spotifyCclientID = '09c1185efbd44df3a3a7c566b1878f40';
      spotifyClientSecret = 'c1c16dda17f341e0a973f8c1b0fd6bea';
      spotifySearchURL = 'https://api.spotify.com/v1/search?q='+ uName +'&type=artist&limit=1';
      //console.log(uName);
      //console.log(spotifySearchURL);
      //function to get the user's search query for an artist's name

      $.when(
    $.get(spotifySearchURL)
  ).then(function(data) {
    searchQuery = data;
    //artistID = initialRequest.artists.items[0].id;
    //artistAlbumsURL = spotifyAPIURL + 'artists/' + artistID + '/albums' ;
    $.get(spotifyAPIURL + 'artists/' + searchQuery.artists.items[0].id,
      function(data) {
        artistQuery = data;
        artistID = searchQuery.artists.items[0].id;
        numFollowers = artistQuery.followers.total;
        popularityRating = artistQuery.popularity;
        artistIMG = artistQuery.images[0].url;
        associatedGenres = artistQuery.genres;
        artistAlbumsURL = spotifyAPIURL + 'artists/' + artistID + '/albums';
        console.log(artistID);

        $('#number-of-followers').append(
          '  ' +  numFollowers
        );
        $('#artist-popularity-rating').append(
          '  ' + popularityRating
        );

        $('#image').append(
          '<img id="image" src="' + artistIMG + '" alt=" '+ uName +'" />'
        );

        //console.log(popularityRating);

        for (i = 0; i < associatedGenres.length; i++) {
          $('#artist-genres').append(
              '<li>' + associatedGenres[i] + '</li>'
            )}
        //artistsAlbumsFunction();

      });
    event.preventDefault();
    return null;
  }).then(function() {
        //album_data = data;
    artistsAlbumsFunction();
  });
      artistsAlbumsFunction = function() {
        console.log(popularityRating);
        $.get(
          artistAlbumsURL, function(data) {
            albumDataArray = data.items;

            albumNameArray = [];
            albumImageArray = [];

            for (j = 0; j <= 5; j++) {
              albumNameArray.push(albumDataArray[j].name);
              $('#artist-five-albums').append(
                '<li>' + albumNameArray[j] + '</li>')
            }

            for (k = 0; k <6; k++) {
              albumImageArray.push(albumDataArray[k].images[2].url)
            }
          });
      };
    });
  });
})(jQuery);
