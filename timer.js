// Countdown timer for the game round.

function startTimer(seconds, onTick, onDone) {
  var remaining = seconds;

  // Issue: setInterval handle is never cleared -> leak if called repeatedly
  setInterval(function () {
    remaining = remaining - 1;
    onTick(remaining);

    // Bug: == lets "0" (string) pass, and timer keeps running below zero
    if (remaining == 0) {
      onDone();
    }
  }, 1000);
}

// Bug: no guard against negative or non-numeric input
function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = totalSeconds % 60;
  return mins + ":" + secs;
}

module.exports = { startTimer, formatTime };
