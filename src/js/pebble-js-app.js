var mConfig = {};
mConfig.configureGithubUsername = "metavida";
mConfig.configureGithubProject = "pebble-day-night";
mConfig.configureUrl = "http://" + mConfig.configureGithubUsername + ".github.io/" + mConfig.configureGithubProject;

Pebble.addEventListener("ready", function(e) {
  returnConfigToPebble();
});

Pebble.addEventListener("showConfiguration", function(e) {
  Pebble.openURL(mConfig.configureUrl);
});

Pebble.addEventListener("webviewclosed", function(e) {
  if (e.response) {
    var config = JSON.parse(e.response);
    returnConfigToPebble(config);
  }
});

function returnConfigToPebble(config) {
  if(typeof(config) == 'undefined')
    config = {};

  Pebble.sendAppMessage({
    "utc": getUTCTime(),
    "white_background": !!config.white_background,
  });
}

function getUTCTime() {
  return Math.round((new Date()).getTime() / 1000);
}
