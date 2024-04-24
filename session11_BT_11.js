//Bài 1
document.write("Bài 1: <br>");
let bai1 = parseFloat(prompt("Bài 1: Nhập tuổi của bạn: "));
if(bai1>=18){
    document.write("Bạn đủ 18 tuổi. <br>");
}
else{
    document.write("Bạn chưa đủ 18 tuổi. <br>");
}
//Bài 2
document.write("Bài 2: <br>");
let bai2 = parseFloat(prompt("Bài 2: Nhập số giờ trong ngày (Chỉ nhập số giờ, không được phút)"));
if (bai2<18){
    document.write("Good day. <br>");
}
else{
    document.write("Good evening. <br>");
}
//Bài 3
document.write("Bài 3: <br>");
let bai3 = parseFloat(prompt("Bài 3: Nhập số giờ trong ngày (Chỉ nhập số giờ, không được phút)"));
if (bai3<10){
    document.write("Good morning. <br>");
}
else if(bai3 >=10 && bai3 <20){
    document.write("Good day. <br>");
}
else {
    document.write("Good evening. <br>");
}
//Bài 4
document.write("Bài 4: <br>");
let bai4 = parseInt(prompt("Bài 4: Nhập sô nguyên: "));
if(bai4%2==0){
    document.write(bai4+" Đây là số chẵn.<br>");
}
else{
    document.write(bai4+" Đây là số lẻ.<br>");
}
//Bài 5
document.write("Bài 5: <br>");
let bai5 = parseInt(prompt("Bài 5: Nhập sô nguyên: "));
let bai5_2 = bai5%2;
switch (bai5_2) {
    case 0:
        document.write(bai5+"Đây là số chẵn.<br>");
        break;
    default:
        document.write(bai5+"Đây là số lẻ.<br>");
        break;
}
//Bài 6
document.write("Bài 6: <br>");
let bai6 = prompt("Bài 6: Nhập 1 trong các màu sau: (xanh, đỏ, vàng)");
switch (bai6) {
    case "xanh":
        document.write("Bạn vừa nhập vào màu: "+ bai6 +". <br>");
        break;
    case "đỏ":
        document.write("Bạn vừa nhập vào màu: "+ bai6 +". <br>");
        break;
    case "vàng":
        document.write("Bạn vừa nhập vào màu: "+ bai6 +". <br>");
        break;
    default:
        document.write("Chúc mừng bạn nhập sai màu. <br>");
        break;
}
//Bài 7
document.write("Bài 7: <br>");
let bai7 = parseFloat(prompt("Bài 7: Nhập vào số nguyên x"));
if(bai7==0){
    document.write("x = 0. <br>");
}
else if(bai7>0){
    document.write("x là số nguyên dương. <br>");
}
else{
    document.write("x là số nguyên âm. <br>");
}
//Bài 8
document.write("Bài 8: <br>");
let weight = parseFloat(prompt("Nhập cân nặng: "));
let height = parseFloat(prompt("Nhập chiều cao: "));
let bmi = weight / (height ** 2);
document.write("theo WHO");
document.write("<br>");
if (bmi < 18.5) {
  document.write("Cân nặng thấp.");
} else if (18.5 <= bmi && bmi <= 24.9) {
  document.write("Bình thường.");
} else if ((bmi = 25)) {
  document.write("Bình thường ");
} else if (25 < bmi && bmi <= 29.9) {
  document.write("và tiền béo phì ");
} else if (30 <= bmi && bmi <= 34.9) {
  document.write("và béo phì độ I ");
} else if (35 <= bmi && bmi <= 39.9) {
  document.write("và béo phì độ II ");
} else if (bmi >= 40) {
  document.write("và béo phì độ III ");
}
document.write("<br>");
document.write("theo IDI & WPRO");
document.write("<br>");
if (18.5 <= bmi && bmi <= 22.9) {
  document.write("Bình thường");
} else if ((bmi = 23)) {
  document.write("Thừa cân ");
} else if (23 < bmi && bmi <= 24.9) {
  document.write("và tiền béo phì ");
} else if (25 <= bmi && bmi <= 29.9) {
  document.write("và béo phì độ I ");
} else if (bmi >= 30) {
  document.write("và béo phì độ III ");
}
document.write(bmi +"<br>");
//Bài 9
document.write("Bài 9: <br>");
let bai9_toan = parseFloat(prompt("Nhập điểm các môn. Đầu tiên là Toán: "));
let bai9_li = parseFloat(prompt("Nhập điểm môn Lí: "));
let bai9_hoa = parseFloat(prompt("Nhập điểm môn Hoá: "));
let bai9_van = parseFloat(prompt("Nhập điểm môn Văn: "));
let bai9_su = parseFloat(prompt("Nhập điểm môn Sử: "));
let bai9_dia = parseFloat(prompt("Nhập điểm môn Địa: "));
let bai9_tb = (bai9_toan+bai9_li+bai9_hoa+bai9_van+bai9_su+bai9_dia)/6;
if(bai9_tb<5){
    document.write("xếp loại YẾU. <br>");
}
else if(5<bai9_tb && bai9_tb<=6.4){
    document.write("xếp loại TRUNG BÌNH. <br>");
}
else if(6.5<=bai9_tb && bai9_tb<=7.9){
    document.write("xếp loại KHÁ. <br>");
}
else if(8<=bai9_tb){
    document.write("xếp loại GIỎI. <br>");
}
//Bài 10
document.write("Bài 10: <br>");
let a = parseFloat(prompt("Mời nhập tháng vào (1/2.../12)"));
switch (a) {
    case 1:
    case 3:    
    case 5:
    case 7:   
    case 8:
    case 10:
    case 12:
        document.write("Tháng "+a+" có 31 ngày");
        break; 
    case 4:
    case 6:    
    case 9:
    case 11:   
        document.write("Tháng "+a+" có 30 ngày");
        break;  
    case 2:
        document.write("Tháng "+a+" có 28 ngày");
        break;  
}