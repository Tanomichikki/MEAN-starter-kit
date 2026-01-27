const voters = new Set();

function addVoter(voterId, dobStr) {
    try {
        if (voters.has(voterId)) throw new Error("Duplicate voter ID");

        const dob = new Date(dobStr);
        if (isNaN(dob)) throw new Error("Invalid date of birth");

        const age = new Date().getFullYear() - dob.getFullYear();
        if (age < 18) throw new Error("Underage voter");

        voters.add(voterId);
        console.log("Voter added");
    } catch (error) {
        console.error(error.message);
    }
}

addVoter("V101", "2000-01-01");
