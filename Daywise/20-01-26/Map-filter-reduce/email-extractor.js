/*
Email Domain Extractor
Given an array of email addresses:
Use map() and string methods to extract domain names.
Use filter() to keep only domains ending with .com.
Use forEach() to display them.
*/

let emails = [
  "user1@gmail.com",
  "admin@yahoo.in",
  "test@outlook.com",
  "info@company.org",
  "contact@amazon.com"
];

// extract domain names
let domains = emails.map(e => e.split("@")[1]);
// keep only .com domains
let comDomains = domains.filter(d => d.endsWith(".com"));
// display domains
comDomains.forEach(d => console.log(d));
