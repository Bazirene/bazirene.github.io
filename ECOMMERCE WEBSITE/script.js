// Overlay Form
const formContainer = document.getElementById('overlay');
const newForm = document.createElement('form');
newForm.id = 'form';
newForm.method = 'post';
newForm.action = 'api/login';

const h3 = document.createElement('h3');
h3.innerHTML = '<strong>Get $90 off</strong>';

const p = document.createElement('p');
p.innerHTML = 'Get $90 off across your first 4 deliveries + 1 free gift. Includes free shipping when you order today!';

const labelPromotion = document.createElement('label');
labelPromotion.htmlFor = 'promotion';

const inputPromotion = document.createElement('input');
inputPromotion.type = 'text';
inputPromotion.id = 'promotion';
inputPromotion.placeholder = 'Promotion code';

const labelFirstName = document.createElement('label');
labelFirstName.htmlFor = 'first name';

const inputFirstName = document.createElement('input');
inputFirstName.type = 'text';
inputFirstName.id = 'first name';
inputFirstName.placeholder = 'First name';

const labelZipCode = document.createElement('label');
labelZipCode.htmlFor = 'Zip code';

const inputZipCode = document.createElement('input');
inputZipCode.type = 'text';
inputZipCode.id = 'Zip code';
inputZipCode.placeholder = 'Zip code';

const labelEmail = document.createElement('label');
labelEmail.htmlFor = 'email';

const inputEmail = document.createElement('input');
inputEmail.type = 'email';
inputEmail.id = 'email';
inputEmail.placeholder = 'Email address';

const labelPassword = document.createElement('label');
labelPassword.htmlFor = 'password';

const inputPassword = document.createElement('input');
inputPassword.type = 'password';
inputPassword.id = 'password';
inputPassword.placeholder = 'Choose a password';

const button = document.createElement('button');
button.type = 'submit';
button.id = 'sub';
button.onclick = sub;
const a = document.createElement('a');
a.href = '#';
a.innerHTML = 'Get Started';
button.appendChild(a);

newForm.appendChild(h3);
newForm.appendChild(p);
newForm.appendChild(labelPromotion);
newForm.appendChild(inputPromotion);
newForm.appendChild(labelFirstName);
newForm.appendChild(inputFirstName);
newForm.appendChild(labelZipCode);
newForm.appendChild(inputZipCode);
newForm.appendChild(labelEmail);
newForm.appendChild(inputEmail);
newForm.appendChild(labelPassword);
newForm.appendChild(inputPassword);
newForm.appendChild(button);

formContainer.appendChild(newForm);



// add CSS styles to overlay the form
newForm.style.position = 'absolute';
newForm.style.top = '50%';
newForm.style.left = '50%';
newForm.style.transform = 'translate(-50%, -50%)';
newForm.style.zIndex = '1';
newForm.style.background = 'rgba(255, 255, 255, 0.8)';
newForm.style.padding = '20px';
newForm.style.borderRadius = '10px';
newForm.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.2)';
 


const elem = document.getElementById("fo");

elem.addEventListener("mouseover" function(){
  elem.innerHTML = "Grab this offer now!";
})


const button = document.getElementById("sub");

sub.onclick = function(){
  alert("form submiting...");
}


const select = document.getElementById("meal_plan");

select.addEventListener("change", function(){
  const val = document.getElementById("sub").value;
  document.getElementById("sub").innerHTML = val;
})


// Gift meal plan
mealPlans.forEach((mealPlan) => {
  const optionElement = document.createElement("option");
  optionElement.value = `meal plan for ${mealPlan.toLowerCase()}`;
  optionElement.text = mealPlan;
  selectElement.appendChild(optionElement);
});

const buttonElement = document.createElement("button");
buttonElement.type = "submit";
buttonElement.textContent = "Select Meal Plan";

submitButton.appendChild(selectElement);
submitButton.appendChild(buttonElement);


// Get the overlay element
const overlay = document.getElementById('overlay');

// Get the figure element
const figure = document.getElementById('product-grid');

// Create an array of image URLs
const images = [
  './images/banga Soup.jpeg',
  './images/continental dish.jpeg',
  './images/Edikaikong Soup.jpg',
  // Add more image URLs as needed
];

// Select the overlay element
const overlay = document.getElementById('overlay');

// Add an event listener to the images to toggle the overlay on hover
document.querySelectorAll('#product-grid img').forEach(img => {
  img.addEventListener('mouseover', () => {
    overlay.style.display = 'block'; // Show the overlay on hover
  });

  img.addEventListener('mouseout', () => {
    overlay.style.display = 'none'; // Hide the overlay on mouse out
  });
});

// Get the elements
const main = document.getElementById('main');
const feature = document.getElementById('feature');
const menu = document.getElementById('menu');
const gift = document.getElementById('gift');
const diet = document.getElementById('diet');
const lunch = document.getElementById('lunch');

// Create an array of image URLs for each element
const mainImages = [
  './images/banga Soup.jpeg',
  './images/continental dish.jpeg',
  './images/Edikaikong Soup.jpg'
];

const featureImages = [
  './images/vegetable soup.jpeg',
  './images/Yam and egg.jpeg',
  './images/Efo-Iro Soup.jpg'
];

const menuImages = [
  './images/african dish.jpeg',
  './images/Egusi soup.jpeg',
  './images/jollof rice.jpeg'
];

const giftImages = [
  './images/moi moi.jpeg',
  './images/oatmeal-pancakes.jpg'
];

const dietImages = [
  './images/moi moi.jpeg'
];

const lunchImages = [
  './images/moi moi.jpeg'
]


// Insert images into each element
featureImages.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = `Feature Image ${index + 1}`;
  feature.appendChild(img);
});

menuImages.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = `Menu Image ${index + 1}`;
  menu.appendChild(img);
});

giftImages.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = `Gift Image ${index + 1}`;
  gift.appendChild(img);
});

dietImages.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = `Diet Image ${index + 1}`;
  diet.appendChild(img);
});

lunchImages.forEach((image, index) => {
  const img = document.createElement('img');
  img.src = image;
  img.alt = `Lunch Image ${index + 1}`;
  lunch.appendChild(img);
});

// Get the elements
const productGrid = document.getElementById('product-grid');
const form = document.getElementById('overlay').getElementsByTagName('form')[0];

// Set the position of the form to absolute
form.style.position = 'absolute';

// Get the dimensions of the product grid
const gridSize = productGrid.getBoundingClientRect();

// Set the top and left positions of the form to center it
form.style.top = `${gridSize.top + gridSize.height / 2 - form.offsetHeight / 2}px`;
form.style.left = `${gridSize.left + gridSize.width / 2 - form.offsetWidth / 2}px`;

// Add a CSS class to the form to make it visible on top of the images
form.classList.add('overlay-form');

// Add CSS to style the overlay form
const styles = `
.overlay-form {
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  z-index: 1;
}
`;
const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerHTML = styles;
document.head.appendChild(styleSheet);

// Hamburger Menu
const hamburger = document.getElementById('#hamburger');
const nav = hamburger.querySelector('nav');
const form = hamburger.querySelector('form');

hamburger.addEventListener('click', () => {
  console.log('Hamburger clicked!');
  nav.classList.toggle('show');
  form.classList.toggle('show');
  hamburger.classList.toggle('active');
});
