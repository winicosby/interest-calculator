const data = [
    {
        principal: 2500,
        time: 1.8
    },
    {
        principal: 1000,
        time: 5
    },
    {
        principal: 3000,
        time: 1
    },
    {
        principal: 2000,
        time: 3
    },
]


function interestCalculator(data) {
    const interestData = data.map((obj) => {
        if (obj.principal >= 2500 && obj.time > 1 && obj.time < 3) {
            obj.rate = 3;
        } else if (obj.principal >= 2500 && obj.time >= 3) {
            obj.rate = 4;
        } else if (obj.principal < 2500 && obj.time <= 1) {
            obj.rate = 2;
        } else {
            obj.rate = 1;
        }

        obj.interest = (obj.principal * obj.rate * obj.time) / 100;
        return obj
    });

    console.log(interestData);
    return interestData;
}

interestCalculator(data);
