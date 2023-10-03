// array-iterator-methods-lab

// ========================================

// testing connection
// console.log(`main.js is connected!`)

// ========================================


const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];
  
  // Array.prototype.filter()
  // 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's
  
  const inventors1500s = inventors.filter((inventor) => {
    // return true if the two following statements are both true: year property of inventor is greater than or equal to 1500 and year property of inventor is less than 1600
    return (inventor.year >= 1500) && (inventor.year < 1600);
  });

  console.log(inventors1500s);


  
  // Array.prototype.map()
  // 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
  // Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)

  const inventorsNamesOnly = inventors.map((inventor) => {
    // return an array where idx 0 is the first property of inventory and idx 1 is last property of inventor
    return [inventor.first, inventor.last];
  });

  console.log(inventorsNamesOnly);

  
  
  // Array.prototype.sort()
  // 3. Sort the inventors by birth date (year property), in ascending order

  const inventorsSortedByYear = inventors.sort((inventorOne, inventorTwo) => {
    // compare year property of on inventory to that of the next - I'm not 100% sure on how sort works since it wasn't in the video we reviewed in class, I will ask about sort tomorrow morning
    return (inventorOne.year - inventorTwo.year);
  })

  console.log(inventorsSortedByYear);


  
  // Array.prototype.find()
  // 4. Find the inventor object with the first name of 'Ada'
  
  const inventorAda = inventors.find((inventor) => {
    // return the object where inventor's first property is Ada
    return inventor.first === "Ada";
  });
  
  console.log(inventorAda);

  
  
  // Array.prototype.reduce()
  // 5. How many years did all the inventors live?
  
  // set acc to 0 to start with, add the difference between inventor's passed property and inventor's year property for each inventor
  const totalLivingYears = inventors.reduce((acc, inventor) => acc + (inventor.passed - inventor.year), 0);

  console.log(totalLivingYears);
  
  
  
  const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator
  
  // create a new array by first, going through each object (called person) in the existing array
  const namesFirstLast = people.map((person) => {
      // for each person (object in the old array), split the string into an array, with the last name in idx 0 and first name in idx 1
      const nameSplit = person.split(", ");
      // create an empty array as a the reusable placeholder for the last and first names
      const nameFirstLast = [];
      // for each newly created array (looks like: [lastName, firstName]), go through the array and place each name in the beginning of the nameFirstLast placeholder array
      nameSplit.forEach((name) => {
        nameFirstLast.unshift(name);
      })
      // join the first and last name and delimit them by using a comma and a space - nameFirstLast is now a string... return the string as a a new entry into the namesFirstLast array
      return nameFirstLast.join(", ");
  });

  console.log(namesFirstLast);
  
  
  
  const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".

  const dataTypeCounts = data.reduce((acc, vehicle) => {
    // create a variable for accumulator named acc, make it an empty object
    // vehicle in the first iteration is car, is the car property of the empty object falsy or truthy? it's undefined since there isn't a car property in the EMPTY object named arr, therefore, it is falsy, so set the acc object's car property to have a value of 1
    // vehicle in the second iteration is car, is the car property of the acc object falsy or truthy? The car property of the acc object has a value of 1, so it is truthy. Because it is truthy, take the car property's value and add 1 to it, making it 2. Set object acc's car property value to 2.
    // continue using this logic for the rest of the data array
    acc[vehicle] = acc[vehicle] ? acc[vehicle] + 1 : 1;
    return acc;
  }, {});

  console.log(dataTypeCounts);


  
  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
  
  // testing getFullYear method of new Date()
  // console.log(new Date().getFullYear()); // outputs 2023

  // iterate each object in the devs array, the moment true is returned, return true and exit the loop, set any19OrOver to true
  const any19OrOver = devs.some((person) => {
    // define a variable called currentYear using the getFullYear method of new Date()
    const currentYear = new Date().getFullYear();
    // for each person in the devs array, return true if currentYear minus the value of the year property of the person is greater than or equal to 19
    return (currentYear - person.year) >= 19;
  });

  console.log(any19OrOver);
  


  // Array.prototype.every()
  // 9. Check if everyone is 19 or older?
  
  // same as question 8 EXCEPT, because we used .every instead of .some, the moment an iteration returns false, return false to the all19OrOver variable and exit the loop
  const all19OrOver = devs.every((person) => {
    const currentYear = new Date().getFullYear();
    return (currentYear - person.year) >= 19;
  });

  console.log(all19OrOver);
  
  
  const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
  ];
  
  // Array.prototype.find()
  // 10. Find the comment with the id of 823423
  
  // iterate through the comments array, compare the value of the id property of each object (named "comment") to the value of targetID, return true if it's a match
  // once the first "true" is found, return true and assign the matching object to targetComment and exit the loop
  const targetComment = comments.find((comment) => {
    // define a variable named targetID as the id we are looking for, we define a variable here so we can easily change the code if we need to
    const targetID = 823423;
    return comment.id === targetID;
  });

  console.log(targetComment);
  


  // Array.prototype.findIndex()
  // 11. Find the index of the comment with an id of 123523
  
  // same as question 10 except instead of returning the object itself, return the index number of the object we are looking for within the comments array
  const targetIndex = comments.findIndex((comment) => {
    const targetID = 123523;
    return comment.id === targetID;
  });

  console.log(targetIndex);
  
  