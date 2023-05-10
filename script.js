class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters and not < arg >");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of expression");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  try {
    if (!/^[\d\s+\-*/]+$/.test(expression)) {
      throw new OutOfRangeError();
    }

    if (/([+/*-]){2,}/.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^[+/*]/.test(expression)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }

    if (/[-+/*]$/.test(expression)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }

    // Perform the evaluation logic here if the expression is valid
    // ...

    return "Evaluation successful"; // Placeholder return value

  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError || error instanceof SyntaxError) {
      throw error;
    } else {
      throw new Error("Unknown error occurred");
    }
  }
}

try {
  console.log(evalString("1 + 2")); // Example evaluation
} catch (error) {
  console.log(error.message);
}
if (error instanceof OutOfRangeError) {
  // Handle OutOfRangeError
  console.log("OutOfRangeError occurred. Please provide a valid expression.");
} else if (error instanceof InvalidExprError) {
  // Handle InvalidExprError
  console.log("InvalidExprError occurred. Please provide a valid combination of operators.");
} else if (error instanceof SyntaxError) {
  // Handle SyntaxError
  console.log("SyntaxError occurred. Please check the expression for invalid starting or ending operators.");
} else {
  // Handle other errors
  console.log("Unknown error occurred. Please try again.");
}
console.log("An unexpected error occurred. Please contact support for assistance.");
// Or perform any other necessary actions based on the error
// ...
// For example:
// Send an error report to the server
sendErrorReport(error);

// Display a user-friendly error message
displayErrorMessage("Oops! Something went wrong. Please try again later.");

// Log the error to a logging service
logError(error);

// Redirect the user to a generic error page
redirectToErrorPage();

// Or perform any other necessary actions based on the error
// ...
console.log("An unexpected error occurred. Please contact support for assistance.");

// Additional error handling or fallback logic can be added here
// ...
// For example:
// Send an error report to the server
sendErrorReport(error);

// Display a user-friendly error message
displayErrorMessage("Oops! Something went wrong. Please try again later.");

// Log the error to a logging service
logError(error);

// Redirect the user to a generic error page
window.location.href = "/error.html";
console.log("An unexpected error occurred. Please contact support for assistance.");

// Additional error handling or fallback logic can be added here
// ...
// For example:
// Send an error report to the server
sendErrorReport(error);

// Display a user-friendly error message
displayErrorMessage("Oops! Something went wrong. Please try again later.");

// Log the error to a logging service
logError(error);

// Redirect the user to a generic error page
window.location.href = "/error.html";

// Optional cleanup or additional actions after redirect
cleanupData();
performAdditionalTasks();
console.log("An unexpected error occurred. Please contact support for assistance.");

// Additional error handling or fallback logic can be added here
// ...
// For example:
// Send an error report to the server
sendErrorReport(error);

// Display a user-friendly error message
displayErrorMessage("Oops! Something went wrong. Please try again later.");

// Log the error to a logging service
logError(error);

// Redirect the user to a generic error page
window.location.href = "/error.html";

// Optional cleanup or additional actions after redirect
cleanupData();
performAdditionalTasks();

// Optional code after performing additional tasks
// ...
// For example:
console.log("All error handling tasks completed.");