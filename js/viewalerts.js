const alerts = [
  {
    type: 'Flood',
    location: 'Hyderabad',
    date: '2025-08-01',
    description: 'Heavy rainfall led to waterlogging in multiple areas.',
  },
  {
    type: 'Fire',
    location: 'Chennai',
    date: '2025-07-29',
    description:
      'Fire broke out in a residential area, no casualties reported.',
  },
  {
    type: 'Earthquake',
    location: 'Delhi',
    date: '2025-07-30',
    description: 'Mild tremors felt across the city. No damage reported.',
  },
  {
    type: 'Flood',
    location: 'Mumbai',
    date: '2025-08-01',
    description: 'Local trains disrupted due to severe flooding.',
  },
];

const container = document.getElementById('alertsContainer');
const filter = document.getElementById('filterType');

function renderAlerts(data) {
  container.innerHTML = '';
  data.forEach((alert) => {
    const div = document.createElement('div');
    div.className = 'alert-card';
    div.innerHTML = `
      <h3>${alert.type}</h3>
      <p><strong>Location:</strong> ${alert.location}</p>
      <p><strong>Date:</strong> ${alert.date}</p>
      <p>${alert.description}</p>
    `;
    container.appendChild(div);
  });
}

filter.addEventListener('change', () => {
  const selected = filter.value;
  if (selected === 'All') {
    renderAlerts(alerts);
  } else {
    const filtered = alerts.filter((alert) => alert.type === selected);
    renderAlerts(filtered);
  }
});

// Initial render
renderAlerts(alerts);
