const emails = ["a@x.com","b@y.com","c@x.com","d@z.org","e@y.com"];

const domains = emails
  .map(e => e.split("@")[1])
  .reduce((acc, d) => {
    acc[d] = (acc[d] || 0) + 1;
    return acc;
  }, {});

console.log(domains);
