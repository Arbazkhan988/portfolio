// 1. Function to handle the primary color switch
function changePrimaryColor(primaryColor) {
  document.documentElement.style.setProperty('--primary-color', primaryColor);
  localStorage.setItem('selectedPrimaryColor', primaryColor);
}

// Function to handle the secondary color switch
function changeSecondaryColor(secondaryColor) {
  document.documentElement.style.setProperty('--secondary-color', secondaryColor);
  localStorage.setItem('selectedSecondaryColor', secondaryColor);
}

// Function to reset to default colors
function resetColor() {
  const defaultPrimaryColor = "#c21858"; // Set your desired default primary color here
  const defaultSecondaryColor = "#2c0202"; // Set your desired default secondary color here
  changePrimaryColor(defaultPrimaryColor);
  changeSecondaryColor(defaultSecondaryColor);
}

// Function to load the previously selected colors from local storage
function loadColors() {
  const selectedPrimaryColor = localStorage.getItem('selectedPrimaryColor');
  const selectedSecondaryColor = localStorage.getItem('selectedSecondaryColor');
  if (selectedPrimaryColor && selectedSecondaryColor) {
    changePrimaryColor(selectedPrimaryColor);
    changeSecondaryColor(selectedSecondaryColor);
  }
}

// Event listeners for primary color swatches
const primaryColorSwatches = document.querySelectorAll('.color-swatch[data-color]');
primaryColorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const primaryColor = swatch.getAttribute('data-color');
    changePrimaryColor(primaryColor);
  });
});

// Event listeners for secondary color swatches
const secondaryColorSwatches = document.querySelectorAll('.color-swatch[data-secondary-color]');
secondaryColorSwatches.forEach(swatch => {
  swatch.addEventListener('click', () => {
    const secondaryColor = swatch.getAttribute('data-secondary-color');
    changeSecondaryColor(secondaryColor);
  });
});

// Event listener for the "Reset" button
const resetButton = document.querySelector('.color-swatch.reset');
resetButton.addEventListener('click', resetColor);

// Load the previously selected colors on page load
loadColors();




// 2. Show And Hide
const colorPalette = document.querySelector('.theme-color-pallete');
const opBtn = document.querySelector('.op-btn');
let isPaletteVisible = false;

// Function to toggle the color palette
function toggleColorPalette() {
  if (isPaletteVisible) {
    colorPalette.style.right = '-210px'; // Slide out
  } else {
    colorPalette.style.right = '0'; // Slide in
  }
  isPaletteVisible = !isPaletteVisible;
}

// Event listener for the op-btn
opBtn.addEventListener('click', toggleColorPalette);

