function printName(name: string | null | undefined): void {
  if (name === undefined || name === null) {
    console.log('No name provided');
  } else {
    console.log(name.toUpperCase());
  }
}

printName(null); // Output: No name provided
printName('John'); // Output: JOHN
printName(undefined); // Output: No name provided