function trackAttendance(dateStr, attendees) {
    try {
        const date = new Date(dateStr);
        if (isNaN(date)) throw new Error("Invalid date input");

        const attendanceSet = new Set();

        for (let attendee of attendees) {
            if (attendanceSet.has(attendee)) {
                throw new Error("Duplicate attendance entry");
            }
            attendanceSet.add(attendee);
        }

        console.log(`Attendance Date: ${date.toDateString()}`);
        console.log(`Total Attendance: ${attendanceSet.size}`);
    } catch (error) {
        console.error(error.message);
    }
}

trackAttendance("2024-10-10", ["A1", "A2", "A3"]);
