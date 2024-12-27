// Function to handle user registration
function register() {
    const message = document.getElementById( "message" );

    // fetch data from the register.html page
    const userData = fetchRegisterPageData();
    //ensure that the password and confirm password match
    if( userData.password !== userData.confirmPassword ) {
        message.textContent = "Password and Confirm Password do not match!";
    } else {
        // store the user data in the local storage
        localStorage.setItem( "user", JSON.stringify( userData));
        // route the user to the signin.html page
       loadSignInPage();
    }  
}

// Function to fetch data from the register.html page
function fetchRegisterPageData() {
    const fullname = document.getElementById( "fullname" ).value;
    const username = document.getElementById( "username" ).value;
    const email = document.getElementById( "email" ).value;
    const contactNo = document.getElementById( "contact" ).value;
    const password = document.getElementById( "password" ).value;
    const confirmPassword = document.getElementById( "confirm-password" ).value;

    return { fullname, username, email, contactNo, password, confirmPassword };
}

// Function to redirect to signin.html page
function loadSignInPage() {
    window.location.href = "signin.html";
}

// Function to handle user sign-in
function signIn() {
    const message = document.getElementById( "message" );

    // fetch data from the signin.html page
    const userData = fetchSignInPageData();

    // retrieve the user data from the local storage
    const storedUserData = JSON.parse( localStorage.getItem( "user" ) );

    // validate the user data
    if( userData.username === "" && userData.password === "" ) {
        message.textContent = "Username and Password cannot be empty!";
    } else if( userData.username === storedUserData.username && userData.password === storedUserData.password) {
        // route the user to the index.html page
        window.location.href = "index.html";

        // implement session management
        sessionStorage.setItem( "login", true );
    } else {
        message.textContent = "Invalid Username or Password!";
        sessionStorage.setItem( "login", false );
    }

}

// Function to fetch data from the signin.html page
function fetchSignInPageData() {
    const username = document.getElementById( "username" ).value;
    const password = document.getElementById( "password" ).value;

    return { username, password };
}

// Function to load content on the index.html page
function loadContent() {
    // check if the user is logged in
    const userLogin = sessionStorage.getItem( "login" );
    if( userLogin ) {
        // fetch and load data
        fetchAndLoadData()
    } else {
        // route the user to the signin.html page
       loadSignInPage();
    }
}

// Function to set the endpoint to fetch data and set the list element to store the fetched data
function fetchAndLoadData() {
    const productUrl = "https://store-api-o6m1.onrender.com/v1/products";
    const productListElement = document.getElementById( "product-list" );

    fetchData( productUrl, productListElement );
}

// Function to fetch data from an external URL endpoint
async function fetchData(url, listElement) {
    try {
        const response = await fetch( url );
        const data = await response.json();
        
        displayData( data, listElement );
    } catch( error ) {
        console.log( "err: ", error.message );
        alert( "Failed to fetch data.", error.message );
    }
}

// Display data which is fetched from an external API
function displayData(data, listElement) {
    data.data.forEach(element => {
        listElement.innerHTML += `
            <table class = "product">
                <tr>
                    <th colspan = "2">
                        ${element.title}
                    </th>
                </tr>
                <tr>
                    <td>
                        <img src = "${element.image}">
                    </td>
                    <td>
                        ${element.description}
                    </td>
                </tr>
                <tr>
                    <td>
                        ${element.price}
                    </td>
                    <td>
                        ${element.rating.rate} (${element.rating.count} reviews)
                    </td>
                </tr>
            </table>
        `
    });
}

// Function to handle user logout
function logout() {
    // route the user to the signin.html page
   loadSignInPage();
    // remove the login session
    sessionStorage.removeItem( "login" );
}
