function getPastEvent() {
    return new Promise((resolve) => {
        setTimeout(() => {
            const events = [
                { year: 1990, name: "World Wide Web Invented" },
                { year: 2001, name: "Wikipedia Launched" },
                { year: 1969, name: "Moon Landing" },
                { year: 2020, name: "Global Pandemic" },
                { year: 1989, name: "Fall of Berlin Wall" }
            ];
            const randomIndex = Math.floor(Math.random() * events.length);
            resolve(events[randomIndex]);
        }, Math.random() * 1000);
    });
}

let arr = [];

async function travelThroughHistory() {
    try {
        const result = await getPastEvent();

        return result;

    } catch (error) {
        console.log(error.message);
    }
};

const id = setInterval(async () => {
    const event = await travelThroughHistory();
    arr.push(event);
}, 50);

setTimeout(() => {
    clearInterval(id);
    arr = arr.sort((a, b) => a.year - b.year).filter((events, i, self) => i === self.findIndex(event => event.name === events.name)).filter(events => events.year < 2000);
    console.log(arr);
}, 1000);

