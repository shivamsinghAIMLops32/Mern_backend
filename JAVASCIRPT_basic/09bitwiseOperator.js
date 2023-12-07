// BITWISE OPERATOR -> [&(bitwise and), |(bitwise or), ~(bitwise not), ^(XOR)]

// it will convert a number into its binary form and then compare bit by bit and finalise the bit and convert back to num

console.log(5 & 10);           // 5(0101) & 10(1010) => 0000 = 0    if both true then true
console.log(2 & 5);

console.log(15 & 6);         // 15(1111) & 6(0110) => 0110 => 6

// BITWISE OR (|)
console.log(5 | 10);         // 5(0101) & 10(1010) => 1111 => 15        if one is true it will be true

// BITWISE NOT (~)
console.log(~(5 & 5));      // ~ [(1010) & (1000)] = ~(1000) => 0111  = -1     opposite of output

// BITWISE XOR (^)
console.log(5 ^ 9);          // xor is of sum of bits and carry