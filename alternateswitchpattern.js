let sw = 1;
for (let i = 0; i < 5; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
        row = row + sw;
        sw = 1 - sw;

    }

    console.log(row);
}

// 0
// 10
// 101
// 010101