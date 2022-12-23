//1번 문제
let books = [
  {
    no: 'inbn0002', title: '스프링',
    writer: '김기자', price: 40000
  },
  {
    no: 'inbn0003', title: '자바',
    writer: '이순신', price: 25000
  },
  {
    no: 'inbn0004', title: 'SQL',
    writer: '을지문덕', price: 32000
  }
]
//배열의 데이터로 태그 그리기
bookPut()
//가격 총금액
priceTotal()

// console.log(document.getElementById('list') = '')
// let div = document.getElementById('list')
// list.innerHTML = ''
function bookPut() {
  for (let i = 0; i < books.length; i++) {
    let data =
    `
    <tr>
    <td><input type="checkbox"></td>
    <td>${books[i].no}</td>
    <td>${books[i].title}</td>
    <td>${books[i].writer}</td>
    <td class="price">${books[i].price}</td>
    <td><button id="btn" name="button">삭제</button></td>
    </tr>
    `
    
    list.innerHTML += data
  }
}

//let b = document.getElementsByTagName('button')[0]
//let bodyList = document.getElementById("list")

//삭제
//전파기능을 적용시 키기위해 버튼 이벤트의 적용범위를 list로 한다 => 그렇게 하면 list 전 범위에 삭제 버튼의 기능이 적용되기 때문에 삭제 버튼에만 기능을 적용시키기 위해 아래 if문을 사용한다.
list.addEventListener("click", function (ev) {
  if (ev.target.nodeName == "BOTTON") {
    //ev.target.closest("tr").remove()
    let no = ev.target.closest("tr").children[1].innerText;
    for (let i = 0 ; i<books.length; i++){
      if(books[i].no == no){
        books.splice(i,1)
      }
    }
    //배열 삭제 
    //배열의 데이터로 태그 그리기
    bookPut()
    //금액 계산
    priceTotal()
  }
})


//2번
// 버튼에 아이디 값을 주고 찾아내자
btnAdd.addEventListener("click", function () {
  let addObj = {
    no: no.value, title: title.value,
    writer: writer.value, price: price.value
  }
  //입력값 체크
  if (!inputCheck()) {
    return;
  }
  //배열에 추가              
  books.push(addObj)
  //금액 계산
  priceTotal()
  //배열의 내용을 태그로 그림
  bookPut()
  //텍스트 필드 클리어
  inputClear()

})

function inputClear() {
  no.value = ''
  title.value = ''
  writer.value = ''
  price.value = ''
}

function inputCheck() {
  if (no.vlaue == "") {
    alert("도서 번호,도서명 등록")
    no.focus()
    return false
  }
  if (title.value == "") {
    alert("도서 번호,도서명 등록")
    title.focus()
    return false
  }
  return true
}

//3번
//가격을 가져오는 방법은 배열에서 가져오는 방법 태그에서 가져오는 방법 두개다

function priceTotal() {
  let total = 0;
  for (let i = 0; i < books.length; i++) {
    total += books[i].price;
  }
  totalPrice.innerHTML = total;

}