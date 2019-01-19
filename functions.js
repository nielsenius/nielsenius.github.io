var count = 0;

function like() {
  count += 1;
  updateUI();
}

function dislike() {
  count -= 1;
  updateUI();
}

function updateUI() {
  document.getElementById('count').innerHTML = count;
}
