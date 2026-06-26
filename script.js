const startDate = new Date("2025-06-26T00:00:00");

let currentScene = 1;
const totalScenes = 4;

function openEnvelope() {
  const envelope = document.querySelector(".envelope");
  const opening = document.getElementById("opening");
  const story = document.getElementById("story");
  const music = document.getElementById("music");

  envelope.classList.add("open");

  music.play().catch(function() {
    console.log("Musik belum bisa diputar");
  });
  showFlowerTransition();

  setInterval(createFloating, 450);

  setTimeout(function() {
    opening.classList.add("hidden");
    story.classList.remove("hidden");
    showScene(1);
    startStoryFlow();
  }, 1200);
}

function startStoryFlow() {

  // Scene 1 (10 detik)
  setTimeout(nextScene, 10000);

  // Scene 2 (+8 detik = detik ke-18)
  setTimeout(nextScene, 18000);

  // Scene 3 (+10 detik = detik ke-28)
  setTimeout(nextScene, 28000);

  // Scene 4 (+8 detik = detik ke-36)
  setTimeout(finishStory, 36000);
}


function showScene(number) {
  for (let i = 1; i <= totalScenes; i++) {
    document.getElementById("scene" + i).classList.remove("active-scene");
  }

  document.getElementById("scene" + number).classList.add("active-scene");
}

function nextScene() {
  showFlowerTransition();

  setTimeout(function() {
    currentScene++;
    if (currentScene <= totalScenes) {
      showScene(currentScene);
    }
  }, 900);
}

function finishStory() {
  showFlowerTransition();

  setTimeout(function() {
    document.getElementById("story").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    startLoveTimer();
    startLetterTyping();
  }, 1000);
}

function fillFlowerWall() {
  const flowerWall = document.getElementById("flowerWall");

  if (!flowerWall) {
    console.log("flowerWall tidak ditemukan");
    return;
  }

  flowerWall.innerHTML = "";

  for (let i = 0; i < 180; i++) {
    const flower = document.createElement("span");

    flower.innerHTML = ["🌸", "🌺", "💮", "❤️", "✨"][Math.floor(Math.random() * 5)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.fontSize = 18 + Math.random() * 34 + "px";
    flower.style.animationDelay = Math.random() * 0.25 + "s";

    flowerWall.appendChild(flower);
  }
}

function showFlowerTransition() {
  const flowerScreen = document.getElementById("flowerScreen");

  if (!flowerScreen) {
    console.log("flowerScreen tidak ditemukan");
    return;
  }

  fillFlowerWall();

  flowerScreen.classList.remove("hidden");

  setTimeout(function () {
    flowerScreen.classList.add("hidden");
  }, 1500);
}

function startLoveTimer() {
  updateLoveTimer();
  setInterval(updateLoveTimer, 1000);
}

function updateLoveTimer() {
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("loveTimer").innerHTML =
    days + " hari " + hours + " jam " + minutes + " menit " + seconds + " detik";
}

function startLetterTyping() {
  const letter = `Happy anniversary yaa sayang.

Terima kasih sudah hadir di hidup aku, nemenin aku dari hal-hal kecil, dari chat sederhana, dari hari-hari biasa, sampai akhirnya kamu jadi salah satu orang yang paling aku syukuri.

Aku tahu perjalanan kita mungkin nggak selalu sempurna, tapi aku senang karena kita masih di sini. Semoga kita bisa terus saling memilih, saling ngerti, dan bikin banyak kenangan indah lagi.

Terima kasih sudah jadi bagian dari cerita aku. ❤️`;

  const target = document.getElementById("letterText");
  target.innerHTML = "";

  let i = 0;

  function typing() {
    if (i < letter.length) {
      target.innerHTML += letter.charAt(i) === "\n" ? "<br>" : letter.charAt(i);
      i++;
      setTimeout(typing, 38);
    }
  }

  typing();
}

function openPhoto(src) {
  document.getElementById("modalImg").src = src;
  document.getElementById("photoModal").classList.remove("hidden");
}

function closePhoto() {
  document.getElementById("photoModal").classList.add("hidden");
}

function createFloating() {
  const item = document.createElement("div");
  item.className = "floating";

  const emojis = ["❤️", "💖", "🌸", "✨", "🥺"];
  item.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

  item.style.left = Math.random() * 100 + "vw";
  item.style.fontSize = 18 + Math.random() * 24 + "px";
  item.style.animationDuration = 4 + Math.random() * 4 + "s";

  document.body.appendChild(item);

  setTimeout(function() {
    item.remove();
  }, 8000);
}

function yesClicked() {
  document.getElementById("finalText").innerHTML =
    "Yeayyy ❤️ aku harap ini bukan akhir cerita, tapi awal dari banyak cerita indah kita selanjutnya.";

  for (let i = 0; i < 180; i++) {
    setTimeout(createFloating, i * 15);
  }
}
function fillFlowerWall() {
  const flowerWall = document.getElementById("flowerWall");
  flowerWall.innerHTML = "";

  for (let i = 0; i < 120; i++) {
    const flower = document.createElement("span");
    flower.innerHTML = ["🌸", "💮", "🌺", "❤️", "✨"][Math.floor(Math.random() * 5)];
    flower.style.left = Math.random() * 100 + "vw";
    flower.style.top = Math.random() * 100 + "vh";
    flower.style.fontSize = 22 + Math.random() * 28 + "px";
    flower.style.animationDelay = Math.random() * 0.6 + "s";
    flowerWall.appendChild(flower);
  }
}
