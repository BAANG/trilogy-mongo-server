$.ajaxPrefilter( function (options) {
    if (options.crossDomain && jQuery.support.cors) {
      var http = (window.location.protocol === 'http:' ? 'http:' : 'https:');
      options.url = http + '//cors-anywhere.herokuapp.com/' + options.url;
      //options.url = "http://cors.corsproxy.io/url=" + options.url;
    }
  });

$.get("https://stark-meadow-58838.herokuapp.com/api/user/alldata", function (data) {
    if (data) {
        $("#print-data").text(JSON.stringify(data, null, 2))
    } else {
        return
    }
})