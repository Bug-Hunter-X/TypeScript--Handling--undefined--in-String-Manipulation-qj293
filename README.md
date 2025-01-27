# TypeScript: Handling 'undefined' in String Manipulation

This repository demonstrates a common TypeScript error related to handling undefined values when working with strings. The `printName` function takes a string or null as input.  However, it doesn't explicitly handle the case where the input is undefined, leading to a compile-time error.

The `bug.ts` file contains the erroneous code. The `bugSolution.ts` file presents a corrected version demonstrating how to safely handle potential undefined values, avoiding the TypeScript error.  This illustrates best practices for type safety in TypeScript.