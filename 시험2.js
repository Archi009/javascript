let goods = [
  {
    no: "1",
    title: "스프링",
    price: 40000,
    desc: "스프링은 프레임 워크",
  },
  {
    no: "2",
    title: "자바",
    price: 25000,
    desc: " 자바는 언어 ",
  },
  {
    no: "3",
    title: "SQL",
    price: 32000,
    desc: " SQL은 서버",
  },
];
makeTag();
let cartlist = [];
// List.addEventListener("click", function (ev) {
//   let btn = ev.target
//   if
// });

//조회

function makeTag() {
  for (let i = 0; i < goods.length; i++) {
    let tag = `<div class="card" data-no=${goods[i].no}>
    <img src="./3일차/img/멍.jpg" alt="Denim Jeans" style="width: 100%" />
    <h1>${goods[i].title}</h1>
    <p class="price">${goods[i].price}</p>
    <p>
      ${goods[i].desc}
    </p>
    <p><button class="cart">Add to Cart</button>
    <button class="del" >del to Cart</button></p>
    
  </div>`;
    document.getElementById("list").innerHTML += tag;
  }
}
//장바구니 추가 삭제
document.getElementById("list").addEventListener("click", function (ev) {
  let btnCart = ev.target;
  if (btnCart.classList.contains("cart")) {
    //if (btnCart.nodeName == "BUTTON") {
    let price = btnCart.closest(".card").querySelector(".price").innerHTML;
    console.log(price);
  } else if (btnCart.classList.contains("del")) {
    //삭제
    let idx = btnCart.closest(".card").getAttribute("data-no");
    for (let i = 0; i < goods.lingth; i++) {
      if (goods[i].no == no) {
        goods.splice(i, 1);
        break;
      }
    }
    console.log(goods);
    btnCart.closest(".card").remove();
  }
});
