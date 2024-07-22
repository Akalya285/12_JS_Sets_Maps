const map = new Map();
console.log(map); // Map(0) {}


const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
];
const map = new Map(countries);
console.log(map); // Map(3) {"Finland" => "Helsinki", "Sweden" => "Stockholm", "Norway" => "Oslo"}
console.log(map.size); // 3

console.log(countriesMap.get('Finland')); // Helsinki

console.log(countriesMap.has('Finland')); // true

for (const entry of countriesMap) {
  console.log(entry);
}
// Output:
// ["Finland", "Helsinki"]
// ["Sweden", "Stockholm"]
// ["Norway", "Oslo"]
for (const [country, city] of countriesMap) {
  console.log(country, city);
}
// Output:
// Finland Helsinki
// Sweden Stockholm
// Norway Oslo
