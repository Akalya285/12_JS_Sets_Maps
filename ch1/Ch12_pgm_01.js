// 1. Create an empty set
const emptySet = new Set();
console.log('Empty set:', emptySet);

// 2. Create a set containing 0 to 10 using loop
const numberSet = new Set();
for (let i = 0; i <= 10; i++) {
  numberSet.add(i);
}
console.log('Set of numbers 0 to 10:', numberSet);

// 3. Remove an element from a set
numberSet.delete(5); // removing the number 5 from the set
console.log('Set after removing 5:', numberSet);

// 4. Clear a set
numberSet.clear();
console.log('Set after clearing:', numberSet);

// 5. Create a set of 5 string elements from array
const stringArray = ['apple', 'banana', 'cherry', 'date', 'elderberry'];
const stringSet = new Set(stringArray);
console.log('Set of 5 string elements:', stringSet);

// 6. Create a map of countries and number of characters of a country
const countries = ['Finland', 'Sweden', 'Norway'];
const countryMap = new Map();
countries.forEach(country => {
  countryMap.set(country, country.length);
});
console.log('Map of countries and number of characters:', countryMap);
