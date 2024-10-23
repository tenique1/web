const SAMPLE_USERNAME = "mynameis";
const SAMPLE_PASSWORD = "teniquerobinson";

let attempts = 0;

function validateForm(event) {
    event.preventDefault(); // Prevent default form submission

    const usernameInput = document.getElementById("username").value;
    const passwordInput = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (usernameInput === SAMPLE_USERNAME && passwordInput === SAMPLE_PASSWORD) {
        window.location.href = "services.html"; // Redirect on success
    } else {
        attempts++;
        errorMessage.textContent = "Invalid username or password.";
        
        if (attempts >= 3) {
            window.location.href = "error.html"; // Redirect after 3 failed attempts
        } else {
            alert(`You have ${3 - attempts} attempts left`); // Show remaining attempts
        }
    }
}
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  // Get all elements with class "tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class "tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab and add an "active" class to the button that opened the tab
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Open the default tab on page load
document.getElementById("defaultOpen").click();

// Function to add items to the invoice
function addToInvoice(itemName, price) {
  const invoiceItem = document.createElement("div");
  invoiceItem.innerHTML = `${itemName}: JMD ${price.toFixed(2)}`;

  // Append it to the invoice list
  document.getElementById("invoiceList").appendChild(invoiceItem);
}