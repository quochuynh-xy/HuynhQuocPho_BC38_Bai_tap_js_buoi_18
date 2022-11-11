var arrInput = [];
var newArrExam9 = [];
// Lấy giá trị người dùng nhập vào gán cho mảng
document.getElementById("insertNumber").onclick = function () {
  var num = document.getElementById("input").value * 1;
  arrInput.push(num);
  document.getElementById("input").value = "";
  document.getElementById("inputArr").innerHTML =
    "[ " + arrInput.toString() + " ]";
  //   console.log(arrInput);
  return arrInput;
};
// Xóa mảng
document.getElementById("removeNumber").onclick = function () {
  arrInput = [];
  document.getElementById("inputArr").innerHTML = "";
};

// 1. Tính tổng các số dương trong mảng.
function exam1() {
  var count = arrInput.length - 1;
  var sum = 0;
  for (var i = 0; i <= count; i++) {
    if (arrInput[i] > 0) {
      sum += arrInput[i];
    }
  }
  document.getElementById("ex1Result").innerHTML =
    "Tổng của các số dương: " + sum;
}
// 2. Đếm có bao nhiêu số dương trong mảng.
function exam2() {
  var count = 0;
  for (var i = 0; i <= arrInput.length - 1; i++) {
    if (arrInput[i] > 0) {
      count++;
    }
  }
  document.getElementById("ex2Result").innerHTML =
    "Số lượng số dương: " + count;
}
//3. Tìm số nhỏ nhất trong mảng.
function exam3() {
  if (arrInput.length == 0) {
    alert("Chưa nhập mảng");
    return;
  }
  var min = arrInput[0];
  var count = arrInput.length - 1;
  for (var i = 0; i <= count; i++) {
    if (arrInput[i] < min) {
      min = arrInput[i];
    }
  }
  document.getElementById("ex3Result").innerHTML = "Số nhỏ nhất: " + min;
}
//4. Tìm số dương nhỏ nhất trong mảng.
/**
 * Có số dương: in ra số dương nhỏ nhất
 * Không có số dương: Không có số dương.
 * Rỗng: Báo rỗng
 */
function exam4() {
  var minOver0;
  for (var i = 0; i <= arrInput.length - 1; i++) {
    if (arrInput[i] > 0) {
      minOver0 = arrInput[i];
      break;
    }
  }
  for (var j = 0; j <= arrInput.length - 1; j++) {
    if (arrInput[j] < minOver0 && arrInput[j] > 0) {
      minOver0 = arrInput[j];
    }
  }
  if (minOver0 == undefined) {
    document.getElementById("ex4Result").innerHTML =
      "Không có số dương trong mảng hoặc mảng rỗng";
  } else {
    document.getElementById("ex4Result").innerHTML =
      "Số dương nhỏ nhất: " + minOver0;
  }
}
//5. Tìm số chẵn cuối cùng trong mảng.
// Nếu mảng không có giá trị chẵn thì trả về -1.
function exam5() {
  var num;
  for (var i = arrInput.length - 1; i >= 0; i--) {
    if (arrInput[i] % 2 == 0 && arrInput[i] > 0) {
      num = arrInput[i];
      break;
    }
  }
  if (num == undefined) {
    document.getElementById("ex5Result").innerHTML = -1;
  } else {
    document.getElementById("ex5Result").innerHTML = num;
  }
}
//6. Đổi chỗ hai số trong mảng.
function exam6() {
  var newArr = arrInput.slice();
  //   console.log(newArr);
  var loc_1 = +document.getElementById("location1").value;
  var loc_2 = +document.getElementById("location2").value;
  var num_1 = newArr[loc_1];
  var num_2 = newArr[loc_2];
  if (
    newArr.length == 0 ||
    loc_1 > newArr.length - 1 ||
    loc_2 > newArr.length - 1 ||
    loc_1 < 0 ||
    loc_2 < 0
  ) {
    alert("Sai giá trị iput hoặc mảng rỗng");
    return;
  }
  newArr.splice(loc_1, 1, num_2);
  //   console.log(arrInput);
  //   console.log(newArr);
  newArr.splice(loc_2, 1, num_1);
  //   console.log(arrInput);
  //   console.log(newArr);
  document.getElementById("ex6Result").innerHTML = "[" + newArr + "]";
}
//7. Sắp xếp tăng dần.
function exam7() {
  var translator = arrInput.slice(); //Tạo mảng trung gian
  var minToMaxArr = []; //Mảng mới sẽ in ra
  var count = translator.length - 1;
  for (var j = 0; j <= count; j++) {
    // translator sẽ được làm mới khi chạy hết vòng for nhỏ
    var min = translator[0];
    var index = 0;
    for (var i = 0; i <= translator.length - 1; i++) {
      if (translator[i] < min) {
        min = translator[i];
        index = i;
      }
    }

    translator.splice(index, 1); // Cắt phần tử ra khỏi mảng cũ
    minToMaxArr.push(min); // nhét phần tử đó vào mảng min-max
  }
  document.getElementById("ex7Result").innerHTML = "[" + minToMaxArr + "]";
}

//8. Tìm số nguyên tố đầu tiên trong mảng.
function exam8() {
  //   var arrInput = [12, -2, -4, 0, 1, 10,4,6, 8, 6, 0, 20];
  if (arrInput.length == 0) {
    alert("Mảng rỗng");
    document.getElementById("ex8Result").innerHTML = -1;
  }
  for (var i = 0; i <= arrInput.length - 1; i++) {
    var number = arrInput[i];
    var check = true; // Điều kiện
    // Vòng for để kiểm tra number có phải là số nguyên tố không
    // Số 2 sẽ không lọt vào vòng for do nó chia 2 < j khởi đầu
    for (var j = 2; j <= number / 2; j++) {
      if (number % j == 0 && number > 1) {
        check = false;
      }
    }
    if (check == true && number > 1) {
      document.getElementById("ex8Result").innerHTML = number;
      break;
    } else {
      document.getElementById("ex8Result").innerHTML = -1;
    }
  }
}
// 9. Đếm xem trong mảng có bao nhiêu số nguyên.
//Thêm mảng có số thực.
document.getElementById("insertUninteger").onclick = function () {
  var num = document.getElementById("numberInsert").value * 1;
  document.getElementById("numberInsert").value = "";
  newArrExam9.push(num);
  document.getElementById("insertedArray").innerHTML = "[" + newArrExam9 + "]";
};
// Xóa hết phần tử mảng vừa thêm
document.getElementById("delnewArrExam9").onclick = function () {
  newArrExam9 = [];
  document.getElementById("insertedArray").innerHTML = "----";
};
function exam9() {
  var count_integer = 0;
  //   var count_unInteger = 0;
  if (newArrExam9.length == 0) {
    alert("Chưa thêm phần tử vào mảng");
    return;
  }
  for (var i = 0; i <= newArrExam9.length - 1; i++) {
    var checking = Number.isInteger(newArrExam9[i]);
    if (checking == true) {
      count_integer++;
    }
  }
  if (count_integer == 0) {
    document.getElementById("ex9Result").innerHTML =
      "Mảng mới không tồn tại số nguyên";
  } else {
    document.getElementById("ex9Result").innerHTML =
      "Số lượng số nguyên: " + count_integer;
  }
}
//10. So sánh số lượng số dương và số lượng số âm trong mảng
function exam10() {
  var messenger = document.getElementById("ex10Result");
  var under_0 = 0;
  var over_0 = 0;
  for (var i = 0; i < arrInput.length; i++) {
    var number = arrInput[i];
    if (number < 0) {
      under_0++;
    } else if (number > 0) {
      over_0++;
    }
  }
  if (arrInput.length == 0) {
    alert("Mảng rỗng");
    return;
  }
  if (under_0 == over_0) {
    messenger.innerHTML = "Số lượng số dương = số lượng số âm";
  } else if (under_0 > over_0) {
    messenger.innerHTML = "Số lượng số âm nhiều hơn số dương";
  } else {
    messenger.innerHTML = "Số lượng số dương nhiều hơn số âm";
  }
}
