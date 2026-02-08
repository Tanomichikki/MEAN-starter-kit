let emails = ["user@gmail.com", "admin@yahoo.com", "test@outlook.com"];
let domains = [];

for (let i = 0; i < emails.length; i++) {
    let parts = emails[i].split("@");
    domains.push(parts[1]);
}

console.log(domains);
