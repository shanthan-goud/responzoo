function showEmergencyContacts() {
  alert(
    '📞 Emergency Contacts:\n\n🚓 Police: 100\n🚑 Ambulance: 108\n🔥 Fire Services: 101\n📱 Local Disaster Helpline: 112\n Food delivery: 178'
  );
}
function showWeatherInfo() {
  alert(
    '⛅ Weather Info:\n\n📍 Location: Hyderabad\n🌤️ Condition: Cloudy\n🌡️ Temperature: 29°C\n💧 Humidity: 68%\n💨 Wind Speed: 12 km/h'
  );
}
document.addEventListener('DOMContentLoaded', function () {
  const logoutBtn = document.getElementById('logoutBtn');

  if (logoutBtn) {
    logoutBtn.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent link default behavior

      alert('👋 You have been logged out.');
      window.location.href = 'login.html'; // Redirect to login page
    });
  }
});
