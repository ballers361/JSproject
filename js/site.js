(function($) {
  $(document).ready(
  function() {
    var uName, spotify_API_URL, spotify_client_ID, spotify_search_URL, spotify_client_secret;
    var spotify_artist_albums, artist_ID;
    var num_followers, popularity_rating, genres;

  $('#sp-form').on('submit', function(event) {
      uName = $('#sp-username').val();
      spotify_API_URL = 'https://api.spotify.com/v1/';
      spotify_client_ID = '09c1185efbd44df3a3a7c566b1878f40';
      spotify_client_secret = 'c1c16dda17f341e0a973f8c1b0fd6bea';
      spotify_search_URL = 'https://api.spotify.com/v1/search?q='+ uName +'&type=artist&limit=1';
      console.log(uName);
      console.log(spotify_search_URL);

      $.get(
        spotify_search_URL, function(data) {
          artist_ID = data.artists.items[0].id;
          artist_albums_URL = spotify_API_URL + '/artists/' + artist_ID + '/albums';

          $('#primary').append(
          '<p>' + uName, artist_ID + '</p>'
          );
          event.preventDefault();

          $.get(
            spotify_API_URL + 'artists/' + artist_ID, function(data) {
              num_followers = data.name;
              $('#followers').append(
                '<p>' + data.name + '</p>'
              );
              console.log(num_followers);

            });
      });
    });
  });

})(jQuery);
