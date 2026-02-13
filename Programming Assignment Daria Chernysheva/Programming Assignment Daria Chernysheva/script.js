window.addEventListener("load", () => {
  const clicked = localStorage.getItem("clickedEnter");

  if (clicked === "true") {
    music.volume = 0;
    music.play().then(() => {
      let vol = 0;
      const fade = setInterval(() => {
        if (vol < 1) {
          vol += 0.05;
          music.volume = vol;
        } else {
          clearInterval(fade);
        }
      }, 200);
    }).catch(err => console.log("Autoplay blocked:", err));
    localStorage.removeItem("clickedEnter");
  }
});

// ------------------------------------------
// Mute / Unmute button
// ------------------------------------------

const music = document.getElementById("bg-music");
const muteBtn = document.getElementById("mute-btn");

if (music && muteBtn) {
  muteBtn.addEventListener("click", () => {
    music.muted = !music.muted;
    muteBtn.textContent = music.muted ? "🔇" : "🔊";
  });
}


// ------------------------------------------
// Tour Map
// ------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
  const pins = document.querySelectorAll(".pin");
  const popup = document.getElementById("mapPopup");
  const popupCity = document.getElementById("popupCity");
  const popupInfo = document.getElementById("popupInfo");
  const closePopup = document.getElementById("closePopup");

  if (!pins.length || !popup) return;

  pins.forEach(pin => {
    pin.addEventListener("click", () => {
      popupCity.textContent = pin.dataset.city;
      popupInfo.textContent = pin.dataset.info;
      popup.hidden = false;
    });
  });

  closePopup.addEventListener("click", () => {
    popup.hidden = true;
  });
});


const pins = document.querySelectorAll(".pin");
const popup = document.getElementById("mapPopup");
const city = document.getElementById("popupCity");
const info = document.getElementById("popupInfo");

pins.forEach(pin => {
  pin.addEventListener("click", () => {
    city.textContent = pin.dataset.city;
    info.textContent = pin.dataset.info;
    popup.hidden = false;
  });
});

function closePopup() {
  popup.hidden = true;
}
