//your code here
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
    if (error instanceof InvalidExprError || error instanceof SyntaxError) {
      throw error;
    } else {
      throw new OutOfRangeError();
    }
  }
}

try {
  console.log(evalString("+1+2")); // Example evaluation
} catch (error) {
  console.log(error.message);
}
