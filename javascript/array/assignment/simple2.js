let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle", "Amazon"];

//keep first 3
console.log(itCompanies.slice(0,3));

//keep last 3
console.log(itCompanies.slice(itCompanies.length-3, itCompanies.length));

//cut middle elements
/* first half: console.log( (itCompanies.slice(0, Math.floor(itCompanies.length / 2)) ));
   second half: console.log(itCompanies.slice(Math.ceil(itCompanies.length / 2), itCompanies.length)); */
console.log((itCompanies.slice(0, Math.floor(itCompanies.length / 2))).concat(itCompanies.slice(Math.ceil(itCompanies.length / 2), itCompanies.length)));

//cut first 
console.log(itCompanies.slice(1, itCompanies.length));

//cut last 
console.log(itCompanies.slice(0, itCompanies.length - 1));

