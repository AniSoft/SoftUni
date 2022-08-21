function exam(input) {
    let hoursExam = Number(input[0]);
    let minExam = Number(input[1]);
    let hoursArrive = Number(input[2]);
    let minArrive = Number(input[3]);

    let timeExamInMin = hoursExam * 60 + minExam;
    let timeArriveInMin = hoursArrive * 60 + minArrive;

    if (timeExamInMin < timeArriveInMin) {
        console.log("Late");
        let diff = timeArriveInMin - timeExamInMin;
        if (diff < 60) {
            console.log(`${diff} minutes after the start`);
        } else {
            let h = Math.floor(diff / 60);
            let m = diff % 60;
            if (m < 10) {
                console.log(`${h}:0${m} hours after the start`);
            } else {
                console.log(`${h}:${m} hours after the start`);
            }

        }

    } else if (timeArriveInMin === timeExamInMin || timeExamInMin - timeArriveInMin <= 30) {
        console.log("On time");        
        if (timeExamInMin - timeArriveInMin !== 0) {
            let diff = timeExamInMin - timeArriveInMin;
            console.log(`${diff} minutes before the start`);
        } else {
            let diff = timeExamInMin - timeArriveInMin;
            if (diff < 60) {
                console.log(`${diff} minutes before the start`);
            } else {
                let h = Math.floor(diff / 60);
                let m = diff % 60;
                if (min < 10) {
                    console.log(`${h}:0${m} hours before the start`);
                } else {
                    console.log(`${h}:${m} hours before the start`);
                }
            }
        }


    } else {
        console.log("Early");
        if (timeExamInMin - timeArriveInMin !== 0) {
            let diff = timeExamInMin - timeArriveInMin;
            console.log(`${diff} minutes before the start`);
        } else {
            let diff = timeExamInMin - timeArriveInMin;
            if (diff < 60) {
                console.log(`${diff} minutes before the start`);
            } else {
                let h = Math.floor(diff / 60);
                let m = diff % 60;
                if (min < 10) {
                    console.log(`${h}:0${m} hours before the start`);
                } else {
                    console.log(`${h}:${m} hours before the start`);
                }
            }
        }

    }
}

exam(["9", "30", "9", "50"]);
exam(["9", "00", "10", "30"]);
exam(["10", "00", "10", "00"]);
exam(["9", "00", "8", "30"]);
exam(["14", "00", "13", "55"]);
exam(["11", "30", "10", "55"]);
exam(["16", "00", "15", "00"]);
exam(["11", "30", "8", "12"]);
exam(["11", "30", "12", "29"]);