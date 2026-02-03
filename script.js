const nilaiList = ["A","A-","B+","B","B-","C+","C","C-"];

const emojiMap = {
  "A":"😄",
  "A-":"😊",
  "B+":"🙂",
  "B":"🙂",
  "B-":"😐",
  "C+":"😕",
  "C":"😟",
  "C-":"😢"
};

document.querySelectorAll("td.nilai").forEach(td => {
  const select = document.createElement("select");

  nilaiList.forEach(n => {
    const opt = document.createElement("option");
    opt.value = n;
    opt.textContent = n;
    select.appendChild(opt);
  });

  select.value = "A";

  const span = document.createElement("span");
  span.className = "print-value";
  span.textContent = "A";

  td.appendChild(select);
  td.appendChild(span);

  update(td, "A");

  select.addEventListener("change", e => {
    update(td, e.target.value);
  });
});

function update(td, nilai) {
  td.querySelector(".print-value").textContent = nilai;
  td.nextElementSibling.textContent = emojiMap[nilai] || "";
}