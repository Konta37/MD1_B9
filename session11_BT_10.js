let a = parseFloat(prompt("Nhập ngày"));
let b = parseFloat(prompt("Nhập tháng"));
switch (b) {
  case 1:
    if (a <= 19) {
      document.write("Ma kết");
    } else if (a > 20) {
      document.write("Bảo Bình");
    }
    break;
  case 2:
    if (a <= 18) {
      document.write("Bảo Bình");
    } else if (a > 18) {
      document.write("Song Ngư");
    }
    break;
  case 3:
    if (a <= 20) {
      document.write("Song Ngư");
    } else if (a > 20) {
      document.write("Bạch Dương");
    }
    break;
  case 4:
    if (a <= 19) {
      document.write("Bạch Dương");
    } else if (a > 19) {
      document.write("Kim Ngưu");
    }
    break;
  case 5:
    if (a <= 20) {
      document.write("Kim Ngưu");
    } else if (a > 20) {
      document.write("Song Tử");
    }
    break;
  case 6:
    if (a <= 21) {
      document.write("Song Tử");
    } else if (a > 21) {
      document.write("Cự Giải");
    }
    break;
  case 7:
    if (a <= 22) {
      document.write("Cự Giải");
    } else if (a > 22) {
      document.write("Sư Tử");
    }
    break;
  case 8:
    if (a <= 22) {
      document.write("Sư Tử");
    } else if (a > 22) {
      document.write("Xử Nữ");
    }
    break;
  case 9:
    if (a <= 22) {
      document.write("Xử Nữ");
    } else if (a > 22) {
      document.write("Thiên Bình");
    }
    break;
  case 10:
    if (a <= 23) {
      document.write("Thiên Bình");
    } else if (a > 23) {
      document.write("Hổ cáp");
    }
    break;
  case 11:
    if (a <= 21) {
      document.write("Hổ cáp");
    } else if (a > 21) {
      document.write("Nhân Mã");
    }
    break;
  case 12:
    if (a <= 21) {
      document.write("Nhân Mã");
    } else if (a > 21) {
      document.write("Ma Kết");
    }
    break;
}
