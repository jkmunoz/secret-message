let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first',
 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop();

secretMessage.push('to','Program');

secretMessage.splice(7, 1, 'right');

secretMessage.shift();

secretMessage.splice(0, 0, 'Programming');

finalSecretMessage = secretMessage.toSpliced(6, 5, 'know');

console.log(finalSecretMessage.join(' '));