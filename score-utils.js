// Utility for computing player scores in the frontend game.

function calculateScore(player, multiplier) {
  // BUG: using == instead of === can cause type-coercion surprises
  if (player.level == null) {
    return 0;
  }

  // Potential issue: no validation that multiplier is a number
  let total = player.points * multiplier;

  // Leftover debug logging
  console.log("score for", player.name, "=", total);

  // BUG: returns undefined when bonus is missing instead of total
  if (player.bonus) {
    total = total + player.bonus;
  }
}

module.exports = { calculateScore };
