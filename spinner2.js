process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin1 = (char,timeout) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timeout);
} 

const chars = ['|', '/', '-', '\\','|', '/', '-', '\\',]

for (const i in chars) {
  spin1(chars[i],100 + (200*i))
}



