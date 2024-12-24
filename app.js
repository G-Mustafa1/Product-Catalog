let product = [
   {
      id: 1,
      title: "Rain Jacket Women ",
      price: 39.99,
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
      rating: { rate: 3.8, count: 679 },
    },
    {
      id: 2,
      title: "Women's 3-in-1 ",
      price: 56.99,
      category: "women's clothing",
      image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
      rating: { rate: 2.6, count: 235 },
   },
   {
      id: 3,
      title: "Mens Casual T-Shirts ",
      price: 22.3,
      category: "men's clothing",
      image:
         "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      rating: { rate: 4.1, count: 259 },
   },
   {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      rating: { rate: 2.1, count: 430 },
   },
   {
      id: 5,
      title: "Mens Cotton Jacket",
      price: 55.99,
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      rating: { rate: 4.7, count: 500 },
   },
   {
      id: 6,
      title: "Acer bi 21.5 inches ",
      price: 599,
      category: "electronics",
      image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
      rating: { rate: 2.9, count: 250 },
   },
   {
      id: 7
      ,
      title:
         "Samsung 49-Inch 144Hz  ",
      price: 999.99,
      category: "electronics",
      image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
      rating: { rate: 2.2, count: 140 },
   },
   
];
const meinCard = document.getElementById('mein-card');
const cards = document.createElement('div');
const h1 = document.createElement('h1');
// h1.setAttribute('onclick','hy1()')
cards.setAttribute('class', 'cardes')
function card() {
   cards.innerHTML = ""
   product.map((item) => {
      cards.innerHTML += `
           <div class="card">
               <img src="${item.image}" alt="">
               <div class="titel"><b>Titel:</b> ${item.title}</div>
               <div class="price"><b>Price:</b> ${item.price}</div>
               <div class="catagery"><b>Category:</b> ${item.category}</div>
               <div class="pm" style="display: flex; justify-content: space-between;">
                  <div class="rate"><b>Rate:</b> ${item.rating.rate}</div>
                  <div class="count"><b>Count:</b> ${item.rating.count}</div>
               </div>
                <div class="btns d-flex justify-content-center">
               <button onclick="btnclick(${item.id})" class="btn btn-danger" type="submit">Delete</button> 
              </div> 
            </div>
      `
   })
   if(product.length == 0){
      h1.textContent = 'No Products Available'
   }
   cards.appendChild(h1);
}

meinCard.appendChild(cards);
card()

function btnclick(id){
   console.log(id ,"id");
   product = product.filter((item) => {
    let cl = item.id !== id;
    return cl
   })   
   card()
}