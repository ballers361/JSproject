(function($) {
  $(document).ready(
    function() {
      var instagram_API_URL = 'https://api.instagram.com/v1/';
      var instagram_client_ID = 'e06c2840a8c84fba97d67d7199b9e29d';
      var instagram_client_secret = '21ca159135a94f38abed3d0a4ace5c58';
      var instagram_oAuth_URL = 'https://api.instagram.com/oauth/authorize/?client_id='+ instagram_client_ID + 'redirect_uri=361api.pro' +'&response_type=code';
      console.log(instagram_oAuth_URL);
        }

  );
})(jQuery);
