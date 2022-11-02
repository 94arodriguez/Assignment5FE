function rand(num) {
  return Math.floor(Math.random() * num);
}

function intervals() {
  setInterval(randomize, 1000);
}

function randomize() {
  const color = document
    .getElementById("grid")
    .querySelectorAll(".item1, .item2, .item3, .item4, .item5");
  color[0].style.backgroundColor =
    "rgba(" +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(100) / 100 +
    ")";

  color[1].style.backgroundColor =
    "rgba(" +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(100) / 100 +
    ")";

  color[2].style.backgroundColor =
    "rgba(" +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(100) / 100 +
    ")";

  color[3].style.backgroundColor =
    "rgba(" +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(100) / 100 +
    ")";

  color[4].style.backgroundColor =
    "rgba(" +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(255) +
    "," +
    rand(100) / 100 +
    ")";

  const d = new Date();
  document.getElementById("timeinfo").innerHTML = d;
}
