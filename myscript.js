function Avg(){
    let vatly = +prompt("Nhap diem vat ly");
    let hoa = +prompt("Nhap diem hoa");
    let sinhhoc = +prompt('Nhap diem sinh hoc');
    let avg = (vatly+hoa+sinhhoc)/3;
    document.write(avg);
}
function Sum(){
    let vatly = +prompt("Nhap diem vat ly");
    let hoa = +prompt("Nhap diem hoa");
    let sinhhoc = +prompt('Nhap diem sinh hoc');
    let sum = vatly+hoa+sinhhoc;
    document.write(sum);
}

function Temperature(){
    let C = prompt("Nhap nhiet do");
    let F = (1.8*C) + 3;
    document.write(F);
}