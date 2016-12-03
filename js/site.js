$.noConflict();
(function($) {
  $(document).ready(
    function() {
      headers: { 'X-Auth-Token': 'c2c44c3caf0b44e69d7ee6151238ddb2' },
      url: 'http://api.football-data.org/v1/fixtures?timeFrame=n1',
      dataType: 'json',
      type: 'GET',
      $.done(function(response) {

        var regex = /.*?(\d+)$/; // the ? makes the first part non-greedy
        var res = regex.exec(response.fixtures[0]._links.awayTeam.href);
        var teamId = res[1];
        console.log(teamId);
      }

        }

    });
})(jQuery);

