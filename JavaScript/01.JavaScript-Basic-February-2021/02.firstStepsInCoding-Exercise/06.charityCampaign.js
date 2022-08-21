function charityCampaign(input) {
    let dayCount = Number(input[0]);
    let cookerCount = Number(input[1]);
    let cakeCount = Number(input[2]);
    let wafflesCount = Number(input[3]);
    let pancakesCount = Number(input[4]);

    let totalCakes = cookerCount * cakeCount;
    let totalWaffles = cookerCount * wafflesCount;
    let totalPancakes = cookerCount * pancakesCount;

    let totalCakesMoney = totalCakes * 45;
    let totalWafflesMoney = totalWaffles * 5.8;
    let totalPancakesMoney = totalPancakes * 3.2;

    let totalMoney = (totalCakesMoney + totalWafflesMoney + totalPancakesMoney) * dayCount;

    totalMoney = totalMoney - (totalMoney / 8);

    console.log(totalMoney);

}

charityCampaign(["23", "8", "14", "30", "16"]);