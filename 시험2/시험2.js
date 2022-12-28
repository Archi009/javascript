let users = [
  { userno: "100", email: "aa@b.com", username: "김기자", point: 250 },
  { userno: "101", email: "bb.yedam.ac", username: "이순신", point: 150 },
  { userno: "102", email: "cc.naver.com", username: "을지문덕", point: 100 },
];

booksMake();

//조회
function booksMake() {
  list.innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    list.innerHTML += `<tr>
    <td>${users[i].userno}</td>
    <td>${users[i].email}</td>
    <td>${users[i].username}</td>
    <td class="point">${users[i].point}</td>
    <td><button>삭제</button></td>
  </tr>`;
  }
}

//추가
btnAdd.addEventListener("click", function (ev) {
  let add = {
    userno: userno.value,
    email: email.value,
    username: username.value,
    point: parseInt(point.value),
  };

  // if (!email.value == ) {
  //   alert("email을 입력하시오");
  //   clear();
  //   return;
  // }
  users.push(add);
  booksMake();

  clear();
});

//삭제
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BUTTON") {
    let del = ev.target.closest("tr").children[0].innerText;
    for (let i = 0; i < users.length; i++) {
      if (users[i].userno == del) {
        users.splice(i, 1);
      }
    }
    booksMake();
  }
});

//합계
btnSum.addEventListener("click", function pointCal() {
  let sum = 0;
  for (let i = 0; i < users.length; i++) {
    sum += users[i].point;
  }
  totalPoint.innerHTML = sum;
});

// function pointCal() {
//   let sum = 0;
//   for (let i = 0; i < users.length; i++) {
//     sum += users[i].point;
//   }
//   totalPoint.innerHTML = sum;
// }

//input clear
function clear() {
  userno.value = "";
  email.value = "";
  username.value = "";
  point.value = "";
}
//포인트 값이 숫자가 아니면 알람
