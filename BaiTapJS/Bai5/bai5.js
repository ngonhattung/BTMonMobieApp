const calcAverage = (value1, value2, value3) => {
    return (value1 + value2 + value3) / 3
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins * 2 > avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`)
    } else if (avgKoalas * 2 > avgDolhins)
    else
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);

}