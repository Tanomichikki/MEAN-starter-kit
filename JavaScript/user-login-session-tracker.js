const loginSessions = new Map();

function addLogin(userId) {
    try {
        if (!userId) throw new Error("Invalid user ID");
        if (loginSessions.has(userId)) throw new Error("Duplicate user ID");

        loginSessions.set(userId, new Date());
    } catch (error) {
        console.error(error.message);
    }
}

function getLoginTime(userId) {
    console.log(loginSessions.get(userId));
}

addLogin("user101");
getLoginTime("user101");
