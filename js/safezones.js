const safeZones = [
  {
    name: 'Central Relief Shelter',
    type: 'Shelter',
    location: 'Banjara Hills, Hyderabad',
    contact: '040-12345678',
  },
  {
    name: 'City Hospital',
    type: 'Hospital',
    location: 'Koti, Hyderabad',
    contact: '040-87654321',
  },
  {
    name: 'Madhapur Police Station',
    type: 'Police',
    location: 'Madhapur, Hyderabad',
    contact: '100',
  },
  {
    name: 'West Zone Relief Camp',
    type: 'Shelter',
    location: 'Gachibowli, Hyderabad',
    contact: '040-44445555',
  },
  {
    name: 'St. Joseph Medical Center',
    type: 'Hospital',
    location: 'Secunderabad, Hyderabad',
    contact: '040-99887766',
  },
];

const zoneType = document.getElementById('zoneType');
const container = document.getElementById('zonesContainer');

function renderZones(data) {
  container.innerHTML = '';
  data.forEach((zone) => {
    const div = document.createElement('div');
    div.className = 'zone-card';
    div.innerHTML = `
      <h3>${zone.name}</h3>
      <p class="zone-type">${zone.type}</p>
      <p><strong>Location:</strong> ${zone.location}</p>
      <p><strong>Contact:</strong> ${zone.contact}</p>
    `;
    container.appendChild(div);
  });
}

zoneType.addEventListener('change', () => {
  const selected = zoneType.value;
  if (selected === 'All') {
    renderZones(safeZones);
  } else {
    const filtered = safeZones.filter((z) => z.type === selected);
    renderZones(filtered);
  }
});

renderZones(safeZones);
