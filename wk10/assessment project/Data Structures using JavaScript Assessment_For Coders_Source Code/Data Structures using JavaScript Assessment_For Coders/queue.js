//Problem Statement 3
class PrinterQueue {
  constructor() {
    // Initialize an empty array to store documents in the queue
  }

  isEmpty() {
    // Check if the printer queue is empty
  }

  // Add a new document to the printer queue
  enqueue(document) {
    // Push the specified document onto the end of the queue
    // Log a message indicating that the document has been added to the printer queue
  }

  // Remove and return the first document from the printer queue
  dequeue() {
    // Check if the queue is empty - Log a message indicating that the printer queue is empty
    // Remove and return the first document from the queue
  }

  // Retrieve the first document in the printer queue without removing it
  peek() {
    // Check if the queue is empty - Log a message indicating that the printer queue is empty
    // Return a message indicating the next document to print
  }

  // Display all documents in the printer queue
  displayQueue() {
    // Log each document in the queue on a new line
  }
}

// Create a new printer queue instance
const myPrinterQueue = new PrinterQueue();

// Add documents to the printer queue
myPrinterQueue.enqueue("Document-1");
myPrinterQueue.enqueue("Document-2");
myPrinterQueue.enqueue("Document-3");

// Display the next document to print
console.log(myPrinterQueue.peek());

// Print the first document from the queue
console.log("Printing document:", myPrinterQueue.dequeue());

// Display the updated printer queue
myPrinterQueue.displayQueue();

//--------------------------------------------------------------------------------

//Problem Statement 4
function countStudentsUnableToEat(students, sandwiches) {
  // Create a counter to store the number of students who are unable to eat
  // Initialise this with 0

  // Run a while loop to check if the student queue is non empty
  while(students.length > 0){
     // If the student prefers the top sandwich
        // The student takes the sandwich
        // The sandwich is removed from the stack
        // // Reset unableToEat counter to 0
     // Else
        // The student goes to the end of the queue
        // Increment unableToEat counter
    
    // If all students are unable to eat, i.e., unableToEat is equal to the length of students array
        // Return the number of students who are unable to eat
  }
  // After the while loop
  // Return the number of students who are unable to eat
  
}

// Example usage:
const students = [1, 0, 1, 0];
const sandwiches = [0, 1, 0, 1];
const result = countStudentsUnableToEat(students, sandwiches);
console.log("Students unable to eat:", result);
