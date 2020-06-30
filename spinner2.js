process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spin1 = (char,timeout) => {
  setTimeout(() => {
    process.stdout.write(`\r${char}   `);
  }, timeout);
} 

const chars = ['|', '/', '-', '\\','|', '/', '-', '\\',]

for (const i in chars){
  spin1(chars[i],100 + (200*i))
}





// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 1100);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 1300);

// setTimeout(() => {
//   // Need to escape the backslash since it's a special character.
//   process.stdout.write('\r\\   '); 
// }, 1500);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 1700);

// '\n'