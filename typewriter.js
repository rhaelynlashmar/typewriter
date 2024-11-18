const sentence = "hello there from lighthouse labs";

let delay = 0; // initialize delay

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, delay);
  delay += 50; // Increment delay by 50ms for each character
};

setTimeout(() => {
  process.stdout.write('\n');
}, delay);