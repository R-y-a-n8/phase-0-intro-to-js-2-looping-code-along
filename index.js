// Code your solutions in this file
function writeCards(names, occasion) {
    const thankYouMessages = [];
    for (let i = 0; i < names.length; i++) {
      thankYouMessages.push(`Thank you, ${names[i]}, for the ${occasion} gift!`);
    }
    return thankYouMessages;
  }
  
  const names = ['Alice', 'Bob', 'Charlie'];
  const occasion = 'birthday';
  const messages = writeCards(names, occasion);
  console.log(messages);
  
  function countdown(number) {
    for (let i = number; i >= 0; i--) {
      console.log(i);
    }
  }
  
  countdown(5);

  function countdown(number) {
    if (number >= 0) {
      for (let i = number; i >= 0; i--) {
        console.log(i);
      }
    } else {
      console.log("Number must be non-negative.");
    }
  }
  
  countdown(5);
  
  
