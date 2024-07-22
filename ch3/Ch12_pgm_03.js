// Sample data
const countries = [
    { name: 'Finland', languages: [{ name: 'Finnish' }, { name: 'Swedish' }] },
    { name: 'Sweden', languages: [{ name: 'Swedish' }, { name: 'English' }] },
    { name: 'Norway', languages: [{ name: 'Norwegian' }, { name: 'English' }] }
  ];
  
  // Function to count the total number of languages
  const countTotalLanguages = (countries) => {
    const languageSet = new Set();
    countries.forEach(country => {
      country.languages.forEach(language => {
        languageSet.add(language.name);
      });
    });
    return languageSet.size;
  };
  
  // Function to find the most spoken languages
  const mostSpokenLanguages = (countries, topN) => {
    const languageCount = {};
  
    countries.forEach(country => {
      country.languages.forEach(language => {
        if (languageCount[language.name]) {
          languageCount[language.name]++;
        } else {
          languageCount[language.name] = 1;
        }
      });
    });
  
    // Convert to array of objects and sort by frequency
    const sortedLanguages = Object.entries(languageCount)
      .map(([name, count]) => ({ [name]: count }))
      .sort((a, b) => Object.values(b)[0] - Object.values(a)[0])
      .slice(0, topN);
  
    return sortedLanguages;
  };
  
  // Output total number of languages
  console.log('Total number of languages:', countTotalLanguages(countries));
  
  // Output the most spoken languages
  console.log('Most spoken languages (10):', mostSpokenLanguages(countries, 10));
  console.log('Most spoken languages (3):', mostSpokenLanguages(countries, 3));
  