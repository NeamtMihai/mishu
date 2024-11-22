const gradientBackground = document.querySelector('.gradient-background');
const commandLineInput = document.getElementById('command-line');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const xPercent = (x / window.innerWidth) * 100;
    const yPercent = (y / window.innerHeight) * 100;

    gradientBackground.style.backgroundPosition = `${xPercent}% ${yPercent}%`;
});

// Simulate typing and interacting with the command line
commandLineInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        const command = commandLineInput.value;
        if (command) {
            console.log(`Command entered: ${command}`);
            // Reset input after executing command
            commandLineInput.value = '';
        }
    }
});

console.log('Interactive gradient, cool buttons, and command line ready.');
