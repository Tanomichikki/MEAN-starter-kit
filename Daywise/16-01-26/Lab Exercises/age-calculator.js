function calculateAge(dobString) {
    try {
        const dob = new Date(dobString);
        if (isNaN(dob)) throw new Error("Invalid date format");

        const today = new Date();
        if (dob > today) throw new Error("Date of birth cannot be in the future");

        let age = today.getFullYear() - dob.getFullYear();
        const m = today.getMonth() - dob.getMonth();

        if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
            age--;
        }

        console.log(`Age: ${age} years`);
    } catch (error) {
        console.error(error.message);
    }
}

calculateAge("2000-05-10");
