function calculateAverageMarks(marks) {
    try {
        let sum = 0;

        for (let mark of marks) {
            const num = Number(mark);
            if (isNaN(num)) throw new Error("Non-numeric value found");
            if (num < 0 || num > 100) throw new Error("Marks must be between 0 and 100");
            sum += num;
        }

        const average = sum / marks.length;
        console.log(`Average Marks: ${average}`);
    } catch (error) {
        console.error(error.message);
    }
}

calculateAverageMarks([80, 90, 85]);
