(function($) {
  $(document).ready(
    function() {
      var spotify_API_URL = 'https://api.spotify.com/v1/';
      var spotify_client_ID = '09c1185efbd44df3a3a7c566b1878f40';
      var spotify_client_secret = 'c1c16dda17f341e0a973f8c1b0fd6bea';
      var URL = 'https://api.instagram.com/oauth/authorize/?client_id=78960b71429a4346b1ca48db7e1f0d95&redirect_uri=http://361api.com_type=code'
$.get(
  'https://api.spotify.com/v1/albums/0sNOF9WDwhWunNAHPD3Baj',
  function(data) {
    $('#primary').append(
    '<p>' + data.album_type + '</p>'
    );
  });

        }

  );
})(jQuery);
