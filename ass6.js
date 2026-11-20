async function getData() {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "https://fakestoreapi.com/products", true);

    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        const data = JSON.parse(xhr.responseText);

        resolve(data);
      } else {
        reject(new Error("Request failed"));
      }
    });

    xhr.addEventListener("error", () => {
      reject(new Error("Network error"));
    });
  });
}

async function displayData() {
  try {
    const data = await getData();

    console.log(data);

    let str = "";

    for (const obj of data) {
      str += `
        <div class="card">
          <img src="${obj.image}" alt="" id="itemImg"/>

          <h4 id="itemName">
            ${obj.title}
          </h4>

          <p>💸 <span id="itemRating">${obj.price}</span></p>
        </div>`;
    }

    document.getElementById("content").innerHTML = str;
  } catch (error) {
    console.error(error);
  }
}

displayData();
