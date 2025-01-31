// Function to update UTC time
function updateUTCTime() {
  const utcTimeElement = document.getElementById("utcTime");
  const now = new Date();
  utcTimeElement.textContent = now.toUTCString();
}

// Update time every second
setInterval(updateUTCTime, 1000);
updateUTCTime(); // Initial call to show time immediately
