function isSkippedValue(value) {
  return !isNaN(value)
}

function isNumericValue(value) {
  // return typeof Number(value) === 'number' || !isNaN(value)
  return !isNaN(value)
}

function isNothingValue(value) {
  return value === null || value === undefined
}

function isAcceptableValue(value) {
  const operators = ['+', '-', '*', '/']
  return typeof parseInt(value) === 'number' || operators.includes(value) 
  // return false
}

function performCalculationStep(firstOperand, operator, secondOperand) {
  switch (operator) {
    case '+':
      return firstOperand + secondOperand
    case '-':
      return firstOperand - secondOperand
    case '*':
      return firstOperand * secondOperand
    case '/':
      return firstOperand / secondOperand
    case undefined:
      return secondOperand
    default:
      throw new Error(`Invalid input! Error caught in performCalculationStep First Operand: ${firstOperand}, Second Operand: ${secondOperand}, Operator: ${operator}`)
  }
}

export function calculate(calculationSteps) {
  var total
  var operator

  calculationSteps.forEach((nextCalculationStep, i) => {
    if (!isAcceptableValue(nextCalculationStep)) {
      throw new Error(`Invalid input! Error caught in isAcceptableValue ${calculationSteps[i]}`)
      // calculationSteps.splice(i)
    }

    if (isNothingValue(total) && isNumericValue(nextCalculationStep)) {
      total = Number(nextCalculationStep)

    } else if (isNothingValue(operator) && !isSkippedValue(nextCalculationStep)) {
      operator = nextCalculationStep

    } else if (isNumericValue(nextCalculationStep)) {
      total = performCalculationStep(total, operator, Number(nextCalculationStep))
      operator = null

    } else if (!isSkippedValue(nextCalculationStep)) {
      throw new Error(`Invalid input! Error caught in calculate Total: ${total}, Operator: ${operator}`)
    }
  })

  return total
}
