const newsList = [
  {
    title: '⚠️ Heavy Rainfall Warning in Coastal Areas',
    date: 'August 3, 2025',
    description:
      'IMD has issued a red alert for coastal districts due to heavy rainfall. Residents advised to stay indoors.',
  },
  {
    title: '🔥 Forest Fire Controlled in Uttarakhand',
    date: 'August 2, 2025',
    description:
      'Authorities confirmed the wildfire near Nainital is under control. No casualties reported.',
  },
  {
    title: '🌪️ Cyclone Kaveri Approaching Eastern Coast',
    date: 'August 1, 2025',
    description:
      'Cyclone Kaveri likely to make landfall near Chennai. Relief teams deployed. Precautions advised.',
  },
];

const container = document.getElementById('newsContainer');

newsList.forEach((item) => {
  const div = document.createElement('div');
  div.className = 'news-card';
  div.innerHTML = `
    <h3>${item.title}</h3>
    <p><strong>Date:</strong> ${item.date}</p>
    <p>${item.description}</p>
  `;
  container.appendChild(div);
});
