let a = parseFloat(prompt("Nhập số a: "));
let b = parseFloat(prompt("Nhập số b: "));
let c = parseFloat(prompt("Nhập số c: "));

let d=a;
if(d<=b){
    d=b;
}
else if(d<=c){
    d=c;
}

document.write("Số lớn nhất là: "+d);
d=a;
if(d>=b){
    d=b;
}
else if(d>=c){
    d=c;
}
document.write("<br>Số bé nhất là: "+d);