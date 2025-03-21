const navigateBtn = document.getElementById("navigateBtn");
const counterOverlay = document.getElementById("counterOverlay");
const counterText = document.getElementById("counter");

navigateBtn.addEventListener("click", () => {
  counterOverlay.style.display = "flex";

  let count = 1;
  let interval = setInterval(() => {
    counterText.textContent = count + "";
    count++;

    if (count > 3) {
      clearInterval(interval);
      window.location.href = "pages2.html"; // Navigate after counter finishes
    }
  }, 300); // Adjust speed here
});
