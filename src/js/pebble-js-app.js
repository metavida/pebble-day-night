Pebble.addEventListener("ready",
  function(e) {
    returnConfigToPebble();
  }
);

function returnConfigToPebble() {
  Pebble.sendAppMessage({
    "utc": getUTCTime()
  });
}

function getUTCTime() {
  return Math.round((new Date()).getTime() / 1000);
}
