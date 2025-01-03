// Function to handle user registration
function register() {
  // Write your code for task1 here
  // Use fetchRegisterPageData() function to fetch values

  // get the message element from the register.html page
  const messageElement = document.getElementById("message");
  
  // call the fetchRegisterPageData() function to fetch the form data
  const userData = fetchRegisterPageData();
  const { fullname, username, email, contact, password, confirmPassword } = userData;

  // check if the password and confirm password match
  if ( password !== confirmPassword ) {
    messageElement.textContent = "Passwords do not match";
    return;
  }

  // store the user data in the local storage
  localStorage.setItem( "user", JSON.stringify( userData ) );

  // redirect to the signin.html page
  loadSignInPage();
}

// Fetch form data from the register.html page
function fetchRegisterPageData() {
  // Fetch form values
  const fullname = document.getElementById("fullname").value;
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  return { fullname, username, email, contact, password, confirmPassword }
}

// Function to handle user login
function signIn() {
  // Write your code for task2 here
  // Use fetchSignInPageData() function to fetch values

  // get details from the signin form
  const { username, password, messageElement } = fetchSignInPageData();

  // check if the username and password are empty
  if( username === "" || password === "" ) {
    messageElement.textContent = "Please enter all the details";
    return;
  } else{
    try {
        // check if the user exists in the local storage
        const registeredUser = JSON.parse( localStorage.getItem( "user" ) ); 

        if( username === registeredUser.username && password === registeredUser.password ) {
          // store the login status in the session storage
          sessionStorage.setItem( "login", true );
  
          // redirect to the index.html page
          window.location.href = "../html/index.html";
        } else {
          messageElement.textContent = "Invalid username or password";
  
          // set the login status to false
          sessionStorage.setItem( "login", false );
        }
    } catch ( error ) {
      messageElement.textContent = "The user is not registered yet. Please click on the register button to register";
      
    }
  }
  
}

// Function to fetch user data from the signin.html page
function fetchSignInPageData() {
  // Fetch data from the signin form 
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const messageElement = document.getElementById("message");

  return { username, password, messageElement };
}

// Function to load content on the index.html page
function loadContent() {
  // Fetch the login info from the session storage
  const userLogin = sessionStorage.getItem("login");
  console.log( userLogin )

  // Check whether the login status is true
  if (userLogin) {
    fetchAndLoadData();
  }
  else {
    // If login status is false, redirect to signin.html page
    loadSignInPage();
  }

}

// Fetch the URLs from the external API
function fetchURLs() {
  const cuisineUrl = "https://foodorder-api-elti.onrender.com/v1/cuisines";
  const categoryUrl = "https://foodorder-api-elti.onrender.com/v1/categories";
  const restaurantUrl = "https://foodorder-api-elti.onrender.com/v1/restaurants";

  return { cuisineUrl, categoryUrl, restaurantUrl }
}

// Get the list HTML elements to display cuisines, categories and restaurants
function loadListElements() {
  const cuisineList = document.getElementById("cuisine-list");
  const categoryList = document.getElementById("category-list");
  const restaurantList = document.getElementById("restaurant-list");

  return { cuisineList, categoryList, restaurantList }
}

// Fetch the data from the URLs
function fetchAndLoadData() {
  const { cuisineUrl, categoryUrl, restaurantUrl } = fetchURLs()

  // Fetch the list elements from index.html which will store cuisines, categories and restaurants data
  const { cuisineList, categoryList, restaurantList } = loadListElements()

  // Call the fetchData function to fetch the data from the above-mentioned endpoints
  fetchData(cuisineUrl, cuisineList);
  fetchData(categoryUrl, categoryList);
  fetchData(restaurantUrl, restaurantList);
}

// Load the signin.html page
function loadSignInPage() {
  window.location.href = "../html/signin.html";
}


// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {
  // Write your code for task3 here
  
  // fetch the data from the API URL
  try {
    const response = await( fetch( url ) );
    const data = await( response.json() );

    // if data is fetched successfully, display the data on the webpage
    if( data ) {
      displayData( data, listElement );
    }

  } catch ( error ) {
    alert( "Error fetching data from the API" );
  }
   
}


// Display data which is fetched from an external API
function displayData(data, listElement) {
  // Write your code for task4 here
  
  // display the data on the webpage
  data.data.forEach( item => {
    listElement.innerHTML += `
      <div>
        <img src = "${item.image}" alt = "${item.name}" style="width:100%; height:10vh;"/>
        <h4>${item.name}</h4>
      </div>
    `;
  })
  
}

// Logging out when clicked on the logout button
function logout(){
  // Write your code for task5 here

  // set login status to false
  sessionStorage.setItem( "login", false );

  // redirect to the signin.html page
  loadSignInPage();
    
}
