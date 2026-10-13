let answer;
let message = 'What is the total bill amount?';

do {
    answer = prompt(message);

    if (answer === null || Number(answer) === 0) {
        message = 'Please enter a bill amount greater than zero.';
    } else if (isNaN(Number(answer))) {
        message = 'Invalid input. Please enter a numeric bill amount.';
    } else if (Number(answer) < 0) {
        message = 'Negative amounts are not allowed. Please enter a valid bill amount.';
    } else {
        answer = Number(answer);
        break;
    }

} while (true);

let tip = answer * 0.10;

console.log(`For a bill of $${answer.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`);

document.write(`For a bill of $${answer.toFixed(2)}, the tip should be $${tip.toFixed(2)}.`);
