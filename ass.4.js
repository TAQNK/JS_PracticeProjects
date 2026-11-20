let res = fetch("https://fakestoreapi.com/products");

res.then((data) => {
  let result = data.json();

  result.then((d) => {
    let str = "";
    for (let i of d) {
      let obj = i;
      str += ` <div class="card">
      <img src="${obj.image}" alt="" id="itemImg"/>
      <h4 id="itemName">${obj.title}</h4>
      <p> ⭐ <span id="itemRating">${obj.price}</span></p>
    </div>`;
    }

    document.getElementById('content').innerHTML = str;
  });
});

res.catch((err) => console.log(err));
