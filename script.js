const gradientBackground = document.querySelector('.gradient-background');

document.addEventListener('mousemove', (event) => {
    // Get mouse position relative to viewport
    const x = event.clientX;
    const y = event.clientY;
    
    // Calculate background position as a percentage
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;

    // Update gradient background position
    gradientBackground.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

console.log('Interactive gradient ready.');
