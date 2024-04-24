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
document.write(bmi);