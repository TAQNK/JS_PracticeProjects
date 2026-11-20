let records = {};

const getData = () => {
  let res = fetch("https://fakestoreapi.com/products");
  res.then((data) => {
    let result = data.json();
    result.then((d) => {
      let str = "";
      let max = 0;
      records = d;
      for (let i of d) {
        let obj = i;
        if (max < obj.price) {
          max = obj.price;
        }
        str += ` <div class="card">
      <img src="${obj.image}" alt="" id="itemImg"/>
      <h4 id="itemName">${obj.title}</h4>
      <p> 💸 <span id="itemRating">${obj.price}</span></p>
    </div>`;
      }

      document.getElementById("content").innerHTML = str;
      const filterHandler = () => {
        str = "";
        for (let i of d) {
          let obj = i;
          if (obj.price === max) {
            str += ` <div class="card">
      <img src="${obj.image}" alt="" id="itemImg"/>
      <h4 id="itemName">${obj.title}<span class="mostCostly">High<span></h4>
      <p> 💸 <span id="itemRating">${obj.price}</span></p>
    </div>`;
          } else {
            str += ` <div class="card">
      <img src="${obj.image}" alt="" id="itemImg"/>
      <h4 id="itemName">${obj.title}</h4>
      <p> 💸 <span id="itemRating">${obj.price}</span></p>
    </div>`;
          }
        }
        document.getElementById("content").innerHTML = str;
      };
      const filter = document.getElementById("filterBtn");
      filter.addEventListener("click", filterHandler);
    });
  });
  res.catch((err) => console.log(err));
};

getData();
