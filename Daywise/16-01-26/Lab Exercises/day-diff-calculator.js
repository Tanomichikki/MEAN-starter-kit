function daysDifference(startDateStr, endDateStr) {
    try {
        const start = new Date(startDateStr);
        const end = new Date(endDateStr);

        if (isNaN(start) || isNaN(end)) throw new Error("Invalid date input");
        if (end < start) throw new Error("End date cannot be earlier than start date");

        const diffTime = end - start;
        const diffDays = diffTime / (1000 * 60 * 60 * 24);

        console.log(`Days Difference: ${diffDays}`);
    } catch (error) {
        console.error(error.message);
    }
}

daysDifference("2024-01-01", "2024-01-10");
