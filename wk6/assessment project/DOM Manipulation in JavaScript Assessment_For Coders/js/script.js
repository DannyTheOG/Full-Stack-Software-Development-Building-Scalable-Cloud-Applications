// This function should retrieve all the project objects from projects array.
// It should then traverse over the array to create individual cards displaying each project details.
function loadProjects() {
  // Write your code here
  let projectCollection = document.getElementById( "projects" );

  for (const project of projects) {
    // create image element and set various attributes
    let projectImage = document.createElement( "img" );
    projectImage.setAttribute( "src", project.image );
    projectImage.setAttribute( "alt", project.title);

    // create paragraph element for project title and description
    let projectTitle = document.createElement( "span" );
    projectTitle.textContent = project.title;

    let projectDescription = document.createElement( "span" );
    projectDescription.textContent = project.description;

    // create a card div for each project
    let card = document.createElement( "div" );
    card.setAttribute( "class", "card" );
    card.appendChild( projectImage );
    card.appendChild( projectTitle );
    card.appendChild( projectDescription );
    // console.log( card );

    // add card to Project Div
    projectCollection.appendChild( card );
    // console.log( projectCollection );
  }

  // console.log( projectCollection )
}



// This function should return the projectId of the new project
function newProjectId(){
 // Write code to create and return new Project Id
 let totalProject = projects.length;
  if( projects.length == 0) return 1;
  else return totalProject++;
}

function saveNewProject() {

  // Write your code here
  // Get the new project details by using the DOM elements
  let projectTitle = document.getElementById( "title" ).value;
  // console.log( projectTitle );
  let projectDescription = document.getElementById( "desc" ).value;
  // console.log( projectDescription );
  let projectImageURL = document.getElementById( "image" ).value;
  // console.log( projectImageURL );
  
  // Create the new projectId by calling the newProjectId() function
  let projectId = newProjectId();
  // console.log( "projectId: ", projectId );
  
  // Create a new project object
  let project = {
    id: projectId,
    title: projectTitle,
    description: projectDescription,
    image: projectImageURL
  }
  // console.log( project );
  

  // Add the new project object to the projects array 
  projects.push( project ); 
  // console.log( projects ) 

  // Load the projects after adding the new project
  loadProjects();

  // Clear the values of the New Project Details Form after adding the new project
  document.getElementById("title").value = "";
  document.getElementById("desc").value = "";
  document.getElementById("image").value = "";
}
