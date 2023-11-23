// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// si str est une chaîne alors str.length renvoie sa longueur
function isTooLong(ifIsVeryLong) {
  if(ifIsVeryLong.length > 10 ) {
      return true; 
  } else {
      return false; 
  }
}
isTooLong(); 