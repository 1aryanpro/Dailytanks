let players = [];

const [W, H] = [50, 27];
const numPlayers = 60;

while (players.length < numPlayers) {
  let x = Math.round(Math.random() * W);
  let y = Math.round(Math.random() * H);

  let check = true;
  players.forEach((player) => {
    if (
      !check ||
      Math.max(Math.abs(player[0] - x), Math.abs(player[1] - y)) <= 2
    ) {
      check = false;
    }
  });

  if (check) players.push([x, y]);
}

players.forEach((p) => console.log(`${p[0] + 0.5}\t${p[1] + 0.5}`));
// console.log(players)
