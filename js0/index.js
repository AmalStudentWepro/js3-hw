let bank = [
    {
        id: 1,
        name: "shrzod_bomba",
        tax: 12,
        budget: 20000,
        expenses: [3000, 7000, 4000],
    },
    {
        id: 2,
        name: "farrux_market_med",
        tax: 18,
        budget: 100000,
        expenses: [35000, 4000, 50000]
    },
    {
        id: 3,
        name: "amal_GameClub",
        tax: 12,
        budget: 18000,
        expenses: [2000, 3000, 1500]
    },
    {
        id: 4,
        name: "ilya_hookah",
        tax: 15,
        budget: 30000,
        expenses: [10000,2000,3000]
    },
    {
        id: 5,
        name: "ahmad_nosfrush",
        tax: 0,
        budget: 10000,
        expenses: [1000, 2000, 500]
    },
]


console.table(bank);

// создать всем новый ключ расходы где показывается расходы за месяц (expensesPerMonth)





// посчитать итог каждой компании 
for (let item of bank) {
    item.expensesPerMonth = item.expenses.reduce((vsego, currentExpense) => vsego + currentExpense, 0);
    
    item.Incom = item.budget - item.expensesPerMonth;
}

// найти компанию которая меньше всех платит налог 
let maloNologov = bank.reduce((lowest, current) => {
    return (lowest.tax < current.tax ? lowest : current);
}, bank[0]);







console.table(bank);

console.log(`Компания с самой низкой налоговой ставкой: ${maloNologov.name}`);



// tax = нологи
// consumption = расход