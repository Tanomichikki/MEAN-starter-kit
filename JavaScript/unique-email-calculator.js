function collectUniqueEmails(emails) {
    try {
        if (!emails.length) throw new Error("Empty input array");

        const emailSet = new Set();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        for (let email of emails) {
            if (!emailRegex.test(email)) throw new Error(`Invalid email: ${email}`);
            emailSet.add(email);
        }

        console.log([...emailSet]);
    } catch (error) {
        console.error(error.message);
    }
}

collectUniqueEmails(["test@mail.com", "test@mail.com", "user@gmail.com"]);
