// //console.log("Hello Việt Nam");
// //console.log("Nguyễn Thế Hiển");


// // Variable (biến)
// // = là phép gán
// // vế bên phải dấu bằng thực thi trước
// // kiểu dữ liệu
// // String
// // Number
// // Boolean
// // undefined
// // null

// var username = "Cybersoft";
// console.log("username la: " + username);


// var numberStudent = 40;
// console.log("sĩ số của lớp là : " + numberStudent);


// var islogin = false; //true/false
// console.log("islogin : " + islogin);
// // khai báo biến
// var age = 5;
// // gán giá trị || gán lại giá trị mới cho biến
// age = 22;
// console.log("Tuổi " + age);


// var fullName = null;
// console.log("Họ tên " + fullName);

// /**
// * các loại toán tử
// (+) nối chuỗi || công giá trị 
//  */

// // +
// var number1 = 10;
// var number2 = 5;
// var tong = 0;

// // gán lại giá trị mới cho biến tổng
// tong = number1 + number2
// console.log("Tổng :" + tong);


// //-
// var hieu = number1 - number2;
// console.log("hiệu : " + hieu);

// //*
// var tich = number1 * number2
// console.log("tích : " + tich);


// // {/}: chia lấy phần nguyên
// var thuong = number1 / number2
// console.log("thương : " + thuong);


// // % : chia lấy phần dư
// var soDu = number1 % number2;
// console.log("soDu : " + soDu);


// // ++ tăng 1 đơn vị 
// // ++counter tăng 1 đơn vị xóng gán vào newCounter
// // counter++ gán newCounter trước khi tăng 1 đơn vị

// var counter = 0;
// var newCounter = ++counter;
// console.log("newCounter : " + newCounter);


// // // phép gán (=)
// // var sun = 0;
// // // phép (+=)
// // var number3 = 10;
// // sum += number3; // sum = sum + number3
// // console.log("sum : " + sum);


// /**
//  * Hằng số
//  */
// const PI = 3.14;
// /**
//  * Mô hình 3 khối
//  * - đầu vào
//  * - xử lí 
//  * - đầu ra
//  */

// // tính cạnh huyền tam giác vuông
// // đầu vào
// /**
//  * cạnh 1 = 3 
//  * cạnh 2 = 4
//  * 
//  * Xử lý 
//  * tạo biến canhj1 gán giá trị là 3
//  * tạo biến canhj2 gán giá trị là 4
//  * tạo biến cạnh huyền gán giá trị là 0
//  * 
//  * 
//  * + 
//  */
// var ac = 0;
// var ab = 0;
// var bc = 0;
// ac = 3;
// ab = 4;
// bc = Math.sqrt(ac * ac + ab * ab);
// console.log(bc);

// /**
//  * Tong 3 ky so
//  * Giả sử:
//  *  n = 145 => 1 + 4 +5
//  * 
//  * đầu vào 
//  *  n = 235
//  * xử lý 
//  * 
//  *  + tách lấy hàng trăm => n/100 => làm tròn số Math.floor(n/100)
//  * + tách lấy hàng chục => n % 100/10 => làm tròn số Math.floor(n % 100/10)
//  * + tách lấy hàng đơn vị  => n % 10
//  * 
//  *      tổng = hàng trăm + chục + đơn vị
//  * đầu ra
//  * 
//  *      + tổng =
//  */



// var n = 235
// var hangtram = Math.floor(n / 100);
// var hangchuc = Math.floor(n % 100 / 10);
// var hangdonvi = n % 10;
// var tongkyso = hangtram + hangchuc + hangdonvi;
// console.log("Tong 3 ký số : " + tongkyso);


/**
 * Bài tập js nộp
 * bài 1: Viết chương trình tính tiền lương nhân viên
 * đàu vào 
 * n = 6
 * xử lý 
 * +) ta có lương 1 ngày : 100.000
 * +) giả sử người dùng nhập số ngày làm là 6 ngày 
 * +) ta có : lương nhân viên = lương 1 ngày * số ngày làm
 *  đầu ra 
 *  lương nhân viên
 */

var songaylam = 22;
var luong1ngay = 100000;

var luongnhanvien = luong1ngay * songaylam;
console.log("Lương nhân viên : " + luongnhanvien);

/**
 * bài 2: Tính giá trị trung bình
 * đầu vào 
 * a = 5
 * b = 4
 * c = 6
 * d = 8
 * e = 7
 * xừ lý
 *   giá trị trung bình của 5 số : gitritb = ( a + b + c + d + e) / 5
 * 
 * đầu ra 
 *  gí trị trung bình :
 */
var a = 5;
var b = 4;
var c = 6;
var d = 8;
var e = 7;
var giatriTB = (a + b + c + d + e) / 5;
console.log('Giá trị trung bình : ' + giatriTB);

/**
 * bài 3: Quy đổi tiền
 * đầu vào 
 *  số tiền người dùng nhập n = 200 USD
 * Xử lý 
 *  Số tiền quy đổi = số tiền người nhập * số tiền VND
 * đầu ra 
 *  số tiền quy đổi : 
 */
var sotienNguoiNhap = 200;
var sotienVND = 23500;
var sotienQD = sotienNguoiNhap * sotienVND;
console.log('Số tiền quy đổi : ' + sotienQD);

/**\
 * bài 4: Tính diện tích chu vi hình chữ nhật 
 * đầu vào 
 * chiều dài = 4
 * chiều rộng = 2
 * xử lý 
 *  diện tích = dài * rộng
 * chu vi = (dài + rộng) * 2
 */

var a = 4
var b = 2
var dientich = a * b;
console.log('Diện tích hình chữ nhật : ' + dientich);
var chuvi = (a + b) * 2;
console.log('Chu vi hình chữ nhật : ' + chuvi);

/**
 * bài 5: Tính tổng 2 ký số
 * đầu vào n = 45
 * xử lý
 * +) tách lấy hàng đơn vị  m % 10
 * +) tách lấy hàng chục n /10
 * đầu ra 
 * tổng 2 ký số:
 * 
 */
var n = 45;
var hangdonvi = n % 10;
var hangchuc = n / 10;
var tong = hangdonvi + hangchuc;
console.log('Tổng 2 ký số : ' + tong);
