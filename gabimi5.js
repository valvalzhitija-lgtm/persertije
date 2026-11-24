
const mosha = 12;
let cmimi;

if (mosha < 6) {
    cmimi = 0;
} else if (mosha < 18) {
    cmimi = 2;
} else if (mosha < 65) {
    cmimi = 5;
} else {
    cmimi = 3;
}

console.log(`Mosha ${mosha}: bileta kushton ${cmimi} €`);
