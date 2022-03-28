let url = "https://hexschool.github.io/js-filter-data/data.json";
let data;

let showData = [];
let category = "";

let filter = document.querySelector(".filter");
filter.addEventListener("click", filterCategory);

// execution
callAPI();

// functions
function callAPI() {
  axios
    .get(url)
    .then(function (res) {
      data = res.data.filter((a) => a.作物名稱);
      render(data);
    })
    .catch((err) => {
      console.log("[Failed]", err);
    });
}

function render(data) {
  let str = "";
  data.forEach((b, index) => {
    // TODO(Done): 改成 ES6 的 Template Literals (字面字串符)
    const content = `
    <tr>
    <td>${b.作物名稱}</td>
    <td>${b.市場名稱}</td>
    <td>${b.上價}</td>
    <td>${b.中價}</td>
    <td>${b.下價}</td>
    <td>${b.平均價}</td>
    <td>${b.交易量}</td>
    </tr>`;

    str += content;
  });

  let table = document.querySelector(".table-content");
  table.innerHTML = str;
}

function filterCategory(e) {
  if (e.target.nodeName == "BUTTON") {
    category = e.target.dataset.category;
    showData = data.filter((i) => {
      return i.種類代碼 == category;
    });
    render(showData);
  }
}
