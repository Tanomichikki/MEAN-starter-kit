const eventMap = new Map();

function addEvent(dateStr, eventName) {
    try {
        const date = new Date(dateStr);
        if (isNaN(date)) throw new Error("Invalid date key");
        if (eventMap.has(dateStr)) throw new Error("Duplicate event date");

        eventMap.set(dateStr, eventName);
    } catch (error) {
        console.error(error.message);
    }
}

function displayEvents() {
    eventMap.forEach((event, date) => {
        console.log(`${date}: ${event}`);
    });
}

addEvent("2024-12-25", "Christmas Party");
displayEvents();
