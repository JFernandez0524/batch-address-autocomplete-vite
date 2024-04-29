import React from 'react';

const DisplayAddress = ({ name, address, city, state, zip }) => {
  const splitAddress = (address) => {
    console.log(address);

    const streetNumber = address.substring(0, address.indexOf(' ')); // "72"
    const streetName = address.substring(address.indexOf(' ') + 1); // "tocirah sneab"
    const firstLetter = streetName.charAt(0);

    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = streetName.slice(1);

    const capitalizedWord = firstLetterCap + remainingLetters;
    // Freecodecamp
    // F is capitalized

    return ` The Address is: ${streetNumber} ${capitalizedWord}, ${city}, ${state} ${zip}`;
  };

  return <h3>{splitAddress(address)}</h3>;
};

export default DisplayAddress;
