const textArea = document.querySelector("textarea");

textArea.addEventListener("input", function () {
  const words = document.getElementById("words");
  const char = document.getElementById("char");
  const vowels = document.getElementById("vowels");
  // use trim() to remove whitespace
  // use split() to make array from parameter split
  // use join() to return array as string and add parameter value into string

  char.innerHTML = this.value.length;
  words.textContent = this.value.split(" ").filter((e) => e).length;

  const texts = textArea.value.toLowerCase().trim();
  let counter = 0;
  const vowelChar = ["a", "i", "u", "e", "o"];

  for (const x of texts) {
    if (vowelChar.includes(x)) {
      counter++;
    }
  }
  vowels.innerHTML = counter;
});
