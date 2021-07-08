const quotes = {
  "Nelson Mandela":
    '" The greatest glory in living lies not in never falling, but in rising every time we fall. "',

  "Walt Disney": '" The way to get started is to quit talking and begin doing. "',

  "Aristotle":
    '" It is during our darkest moments that we must focus to see the light. "'
};

indexes = Object.keys(quotes);
values = Object.values(quotes);

function nextQuote() {
  let index = Math.floor(getRandomArbitrary(0,3));
  document.getElementById("text").innerHTML = values[index];
  document.getElementById("author").innerHTML = "- " + indexes[index];
}

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}