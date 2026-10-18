/**
 * Calculator Engine & Controller
 * Safe arithmetic parser without eval()
 * Created by Nazir Ansari
 */

class Calculator {
  constructor(previousOperandElement, currentOperandElement) {
    this.previousOperandElement = previousOperandElement;
    this.currentOperandElement = currentOperandElement;
    this.clear();
  }

  // Resets all state values
  clear() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.shouldResetScreen = false;
  }

  // Delete single character (DEL)
  delete() {
    if (this.shouldResetScreen) {
      this.clear();
      return;
    }
    if (this.currentOperand === '0' || this.currentOperand === 'Error') {
      return;
    }
    if (this.currentOperand.length === 1 || (this.currentOperand.length === 2 && this.currentOperand.startsWith('-'))) {
      this.currentOperand = '0';
    } else {
      this.currentOperand = this.currentOperand.slice(0, -1);
    }
  }

  // Appends a digit or decimal point
  appendNumber(number) {
    if (this.currentOperand === 'Error' || this.shouldResetScreen) {
      this.currentOperand = '';
      this.shouldResetScreen = false;
    }

    // Prevent multiple decimals
    if (number === '.' && this.currentOperand.includes('.')) return;

    // Handle starting zero
    if (this.currentOperand === '0' && number !== '.') {
      this.currentOperand = number.toString();
    } else {
      this.currentOperand = this.currentOperand.toString() + number.toString();
    }
  }

  // Select binary operator (+, -, ×, ÷)
  chooseOperation(operation) {
    if (this.currentOperand === 'Error') return;

    if (this.previousOperand !== '') {
      this.compute();
    }

    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.shouldResetScreen = true;
  }

  // Toggle positive/negative sign (±)
  toggleSign() {
    if (this.currentOperand === '0' || this.currentOperand === 'Error') return;

    if (this.currentOperand.startsWith('-')) {
      this.currentOperand = this.currentOperand.slice(1);
    } else {
      this.currentOperand = '-' + this.currentOperand;
    }
  }

  // Calculate percentage based on current context (%)
  computePercent() {
    if (this.currentOperand === 'Error') return;
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;

    // If an operation is already queued (e.g., 200 + 10%), calculate proportional percentage
    if (this.previousOperand && (this.operation === '+' || this.operation === '-')) {
      const prev = parseFloat(this.previousOperand);
      this.currentOperand = ((prev * current) / 100).toString();
    } else {
      this.currentOperand = (current / 100).toString();
    }
  }

  // Safe arithmetic compute without eval()
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);

    if (isNaN(prev) || isNaN(current)) return;

    switch (this.operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '×':
      case '*':
        computation = prev * current;
        break;
      case '÷':
      case '/':
        if (current === 0) {
          this.currentOperand = 'Error';
          this.previousOperand = '';
          this.operation = undefined;
          this.shouldResetScreen = true;
          return;
        }
        computation = prev / current;
        break;
      default:
        return;
    }

    // Fix floating point precision issues (e.g. 0.1 + 0.2 = 0.30000000000000004)
    computation = Math.round((computation + Number.EPSILON) * 1e12) / 1e12;

    this.currentOperand = computation.toString();
    this.operation = undefined;
    this.previousOperand = '';
    this.shouldResetScreen = true;
  }

  // Formats numbers with internationalized commas while preserving decimals
  formatDisplayNumber(number) {
    if (number === 'Error') return 'Error';

    const stringNumber = number.toString();
    const integerDigits = parseFloat(stringNumber.split('.')[0]);
    const decimalDigits = stringNumber.split('.')[1];

    let integerDisplay;
    if (isNaN(integerDigits)) {
      integerDisplay = '';
    } else {
      integerDisplay = integerDigits.toLocaleString('en', {
        maximumFractionDigits: 0,
      });
    }

    if (decimalDigits != null) {
      return `${integerDisplay}.${decimalDigits}`;
    } else {
      return integerDisplay;
    }
  }

  // Update DOM presentation
  updateDisplay() {
    if (this.currentOperand === 'Error') {
      this.currentOperandElement.innerText = 'Cannot divide by 0';
      this.previousOperandElement.innerText = '';
      return;
    }

    this.currentOperandElement.innerText = this.formatDisplayNumber(this.currentOperand);

    // Adjust font size dynamically if the number is long
    if (this.currentOperand.length > 10) {
      this.currentOperandElement.style.fontSize = '1.75rem';
    } else {
      this.currentOperandElement.style.fontSize = '2.5rem';
    }

    if (this.operation != null) {
      this.previousOperandElement.innerText = `${this.formatDisplayNumber(this.previousOperand)} ${this.operation}`;
    } else {
      this.previousOperandElement.innerText = '';
    }
  }
}

/* ==========================================================================
   DOM Initialization & Event Bindings
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  const previousOperandElement = document.getElementById('previousOperand');
  const currentOperandElement = document.getElementById('currentOperand');
  const calculator = new Calculator(previousOperandElement, currentOperandElement);

  // Button Click Event Listeners
  const numberButtons = document.querySelectorAll('[data-number]');
  const operatorButtons = document.querySelectorAll('[data-operator]');
  const actionButtons = document.querySelectorAll('[data-action]');

  numberButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.appendNumber(button.getAttribute('data-number'));
      calculator.updateDisplay();
    });
  });

  operatorButtons.forEach(button => {
    button.addEventListener('click', () => {
      calculator.chooseOperation(button.getAttribute('data-operator'));
      calculator.updateDisplay();
    });
  });

  actionButtons.forEach(button => {
    button.addEventListener('click', () => {
      const action = button.getAttribute('data-action');
      switch (action) {
        case 'clear':
          calculator.clear();
          break;
        case 'delete':
          calculator.delete();
          break;
        case 'percent':
          calculator.computePercent();
          break;
        case 'toggle-sign':
          calculator.toggleSign();
          break;
        case 'calculate':
          calculator.compute();
          break;
      }
      calculator.updateDisplay();
    });
  });

  // Full Physical Keyboard Support
  window.addEventListener('keydown', (e) => {
    if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
      calculator.appendNumber(e.key);
      calculator.updateDisplay();
    } else if (e.key === '+' || e.key === '-') {
      calculator.chooseOperation(e.key);
      calculator.updateDisplay();
    } else if (e.key === '*') {
      calculator.chooseOperation('×');
      calculator.updateDisplay();
    } else if (e.key === '/') {
      e.preventDefault(); // Prevents browser search shortcuts
      calculator.chooseOperation('÷');
      calculator.updateDisplay();
    } else if (e.key === 'Enter' || e.key === '=') {
      e.preventDefault();
      calculator.compute();
      calculator.updateDisplay();
    } else if (e.key === 'Backspace') {
      calculator.delete();
      calculator.updateDisplay();
    } else if (e.key === 'Escape') {
      calculator.clear();
      calculator.updateDisplay();
    } else if (e.key === '%') {
      calculator.computePercent();
      calculator.updateDisplay();
    }
  });
});