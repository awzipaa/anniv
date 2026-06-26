
function startSurprise() {
  alert("Tombol berhasil diklik!");

  document.getElementById("cover").style.display = "none";
  document.getElementById("main").style.display = "block";

  const music = document.getElementById("music");
  music.play().catch(function(error) {
    alert("Musik belum bisa diputar. Cek nama file lagu.mp3 di folder music.");
  });

  setInterval(createFloating, 500);
}

function createFloating() {
  const item = document.createElement("div");
  item.className = "float";
  item.innerHTML = "❤️";
  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = "24px";
  item.style.animationDuration = "5s";
  document.body.appendChild(item);

  setTimeout(function() {
    item.remove();
  }, 6000);
}

function yesClicked() {
  alert("Yeayyy ❤️");
}
