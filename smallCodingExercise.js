// ms: number of milliseconds
// returns a Promise that is resolved after ms milliseconds
function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// el: element node object
// moves the element to the right by 100px over a duration of 1 second
function animateRight(el) {
  let id = null;
  let pos = 0;
  clearInterval(id);
  id = setInterval(frame, 10);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos++;
      el.style.left = pos + "px";
    }
  }
}

// xs: array
// returns: a new array, with unique items
function removeDuplicates(xs) {
  const unique = (value, index, self) => {
    return self.indexOf(value) === index;
  };
  return xs.filter(unique);
}
