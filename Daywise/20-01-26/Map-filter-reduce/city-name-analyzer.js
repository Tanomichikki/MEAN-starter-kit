const cities = ["Delhi","Amsterdam","Oslo","Berlin","Udaipur"];

cities
  .filter(c => /^[aeiou]/i.test(c))
  .map(c => c.toUpperCase())
  .forEach(c => console.log(c));
