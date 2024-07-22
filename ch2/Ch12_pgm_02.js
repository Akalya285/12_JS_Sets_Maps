const a = [4, 5, 8, 9];
const b = [3, 4, 5, 7];

// Helper function to convert an array to a Set
const arrayToSet = (array) => new Set(array);

// 1. Find the union of a and b
const union = (setA, setB) => new Set([...setA, ...setB]);

// 2. Find the intersection of a and b
const intersection = (setA, setB) => new Set([...setA].filter(item => setB.has(item)));

// 3. Find the difference of a and b (a with b)
const difference = (setA, setB) => new Set([...setA].filter(item => !setB.has(item)));

// Convert arrays to sets
const setA = arrayToSet(a);
const setB = arrayToSet(b);

// Perform the operations
const unionSet = union(setA, setB);
const intersectionSet = intersection(setA, setB);
const differenceSet = difference(setA, setB);

// Print results
console.log('Union of a and b:', [...unionSet]);
console.log('Intersection of a and b:', [...intersectionSet]);
console.log('Difference of a and b (a with b):', [...differenceSet]);
