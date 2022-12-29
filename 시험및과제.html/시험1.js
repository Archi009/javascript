
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


// console.log(document.getElementById('list') = '')
let div = document.getElementById('list')
div.innerHTML = ''
let fill = function () {
  for (let i = 0; i < books.length; i++) {
    let data =
                 `
                <tr>
                <td><input type="checkbox"></td>
                <td>${books[i].no}</td>
                <td>${books[i].title}/td>
                <td>${books[i].writer}</td>
                <td class="price">${books[i].price}</td>
                <td><button id="btn" name="button">삭제</button></td>
                </tr>
                 `

    div.innerHTML += data
  }
}
fill()
//let b = document.getElementsByTagName('button')[0]



div.addEventListener("click", function (ev) {
  let b = ev.target
  if (b.nodeName == 'BUTTON') {
    b.closest("tr").remove()
  }
}
)

//2번 문제

let btn1 = document.getElementsByClassName('btn btn-primary col-sm-2')[0]

btn1.addEventListener("click", function () {

  let q = document.getElementsByClassName("form-control").value
  console.log(q)
  for (let i = 0; i < 5; i++) {
    let arr = q[i]
    console.log(arr)

    books.push({
      no: arr[0], title: arr[1],
      writer: arr[2], price: arr[3]
    })
  }

  fill()
})

