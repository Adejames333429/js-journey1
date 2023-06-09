const companies = [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

// companies.forEach(function(company) {
//   console.log(company.name)
//   console.log(company.category);
//   console.log(company.start);
// });

// let doDrink = [];
// for(let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     doDrink.push(ages[i]);
//   }
// }

// const doDrink = ages.filter(function(age) {
//   if(age >= 21) {
//     return true;
//   }
// });

const doDrink = ages.filter(age => age >= 21);
// console.log(doDrink);

// const retailCompanies = companies.filter(function(company) {
//   if(company.category === 'Retail') {
//     return true;
//   }
// });

const retailCompanies = companies.filter(company => company.category === 'Retail');

// console.log(retailCompanies);
const eightiesCompanies = companies.filter(company => (company.start >= 
  1980 && company.start <= 1985));
  // console.log(retailCompanies);
  // console.log(eightiesCompanies);

  const techCompanies = companies.filter(company => company.category === 'Technology');
  // console.log(techCompanies);

  const lastedTenYears = companies.filter(company => (company.end - company.start >= 10));
  // console.log(lastedTenYears);
  // const companyNames = companies.map(function(company) {
  //   return company.name;
  // });

  const testMap = companies.map(company =>`${company.category} [${company.start} - ${company.end}]`);

  // console.log(testMap);
  const agesSquare = ages
    .map(age => Math.sqrt(age)) 
    .map(age => age * 2);

  // console.log(agesSquare);

  // console.log(multiplyByTwo);
  // const sortedCompanies = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });




  const sortedCompanies = companies.sort((c1, c2) => (c1.start > c2.start ? 1 : -1));
  // console.log(sortedCompanies);

  const sortAges = ages.sort((a, b) => a - b);

  // console.log(sortAges);

  let ageSum = 0;
  for (i = 0; i < ages.length; i++){
    ageSum += ages[i];
  }

  // console.log(ageSum);

  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a , b) => a + b, 0);
    
    console.log(combined);
