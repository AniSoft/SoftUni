function salary(input) {
    let openTabs = Number(input[0]);
    let icomeSalary = Number(input[1]);
    let isLostSalary = false;
    let index = 2;

    for (let i = 1; i <= openTabs; i++) {
        let name = input[index];
        index++;
        if (name == "Facebook") {
            icomeSalary -= 150;
        } else if (name == "Instagram") {
            icomeSalary -= 100;
        } else if (name === "Reddit") {
            icomeSalary -= 50;
        }

        if (icomeSalary <= 0) {
            console.log("You have lost your salary.");
            isLostSalary = true;
            break;
        }
    }

    if (!isLostSalary) {
        console.log(icomeSalary.toFixed(0));
    }
}

salary(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebok"]);
// salary(["3", "500", "Github.com", "Stackoverflow.com", "softuni.bg"]);