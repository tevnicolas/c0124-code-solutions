'use strict';
/* exported capitalizeWord */
function capitalizeWord(word) {
  if (word.toLowerCase() !== 'javascript') {
    return (
      word.charAt(0).toUpperCase() + word.slice(1, word.length).toLowerCase()
    );
  } else {
    return 'JavaScript';
  }
}
