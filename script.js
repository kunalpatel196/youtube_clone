let result = document.querySelector('.result');
let cachedData = []; // Variable to store fetched data

// Fetch and display data
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    cachedData = data; // Store the fetched data
    let demo = '';
    data.forEach(item => {
      demo += `
        <div class="col-4" id="${item.id}">
          <video muted loop autoplay>
            <source src="${item.video}" >
          </video>
          <p>${item.title}</p>
        </div>
      `;
    });
    result.innerHTML = demo;
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

// Add event listener to the parent element
result.addEventListener('click', (event) => {
  const col = event.target.closest('.col-4');
  if (col) {
    const elementId = col.id; // Get the ID of the clicked .col-4 element
    const element = document.querySelector(`#${elementId}`); // Select element by ID
    
  // Select the video tag inside the .col-4 element
    const video = element.querySelector('video');
    if (video) {
      if (video.hasAttribute('muted loop autoplay')) { 
        video.removeAttribute('muted loop autoplay'); 
      } else {
        video.setAttribute('controls', ''); 
      } 
    } else {
      alert('No video element found within this .col-4');
    }
  }
});

