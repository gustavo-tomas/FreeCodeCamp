var expression = '0';
var lastObj = '0';
var newNumber = true;

document.addEventListener('click', function(event){
    let obj = event.target.value;
    
    // cases of AC, =, etc
    switch(obj) {
        case 'AC':
            newNumber = true;
            expression = '0';
            obj = '0';
            break;

        case undefined:
            obj = lastObj;
            break;

        case '.':
            expression += (newNumber == true) ? obj : '';
            break; 

        default:
            expression += obj;
            break;
    }

    // converts expression to a valid one
    let convExpression = convertToValid(expression);
    console.log('convExpression :', convExpression);

    // apply operations to the expression if = pressed
    if(convExpression[convExpression.length-1] == '='){
        convExpression = solveEquation(convExpression);
        expression = convExpression.toString();
    } 

    document.getElementById('display').innerHTML = convExpression;
    
    lastObj = obj;
});

function convertToValid(expression) {
    let validExpression = expression;

    // regEx for zero and operations and dots
    let regZero = /^0+/;
    let regSum = /\++/g;
    let regSub = /-+/g;
    let regMult = /\*+/g;
    let regDiv = /\/+/g;
    let regDot = /\.+/g;

    // removes excess of 0s and operations and dots
    validExpression = validExpression.replace(regZero, '0');
    validExpression = validExpression.replace(regSum,'+');
    validExpression = validExpression.replace(regSub,'-');
    validExpression = validExpression.replace(regMult,'*');
    validExpression = validExpression.replace(regDiv,'/');
    validExpression = validExpression.replace(regDot,'.');

    // console.log(newNumber);

    let length = validExpression.length;

    if(validExpression[length-1] == '.') {
        newNumber = false;
    }

    if(    validExpression[length-1] == '+'
        || validExpression[length-1] == '-'
        || validExpression[length-1] == '*'
        || validExpression[length-1] == '/')
    {
        newNumber = true;
    }

    // removes left 0
    if(validExpression.length > 1){
        validExpression = validExpression.replace(regZero, '');
    }

    return validExpression;
}

function solveEquation(expression) {
    let regNum = /[+-]?\d+(\.\d+)?/, regOp = /[\+\*\/]/; 
    let leftOp = '', rightOp = '', op = '', result = 0;
    
    while(expression != '=' && expression.length > 1){

        // gets left and right operands and operation
        if(leftOp == ''){
            leftOp = parseFloat(expression.match(regNum));
            expression = expression.replace(regNum, '');
        } else {
            result = 0;
        }
        rightOp = parseFloat(expression.match(regNum));
        expression = expression.replace(regNum, '');
        try {op = expression.match(regOp)[0]}
        catch{}
        expression = expression.replace(regOp, '');
        
        rightOp = isNaN(rightOp) ? 0 : rightOp;

        switch(op) {
            case '+':
                result += (leftOp + rightOp);
                break;
            case '-':
                result += (leftOp - rightOp);
                break;
            case '*':
                result += (leftOp * rightOp);
                break;
            case '/':
                result += (leftOp / rightOp);
                break;
            default:
                result += (leftOp + rightOp);
                break;
        }
        console.log('exp:',expression);
        console.log('leftOp:',leftOp);
        console.log('OP:',op);
        console.log('rightOp:',rightOp);
        console.log('RES:', result);
        leftOp = result.toString();
    }

    newNumber = true;
    return result;
}