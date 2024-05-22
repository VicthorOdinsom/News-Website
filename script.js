function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.right === "0px") {
        menu.style.right = "-250px";
    } else {
        menu.style.right = "0px";
    }
}

//Tables Pag
const table = document.getElementById("teamTable");
        const rows = table.getElementsByTagName("tr");
        for (let i = 0; i < rows.length; i++) {
            row = rows[i];
            if (row.getElementsByTagName("td")[0].textContent == "1") {
                row.classList.add('highlight');
            }
        }

//Math Page
function generateTabuada() {
    const num = parseInt(document.getElementById("num").value);
    const op = document.getElementById("op").value;
    let result = "";

    for (let i = 1; i <= 10; i++) {
      switch (op) {
        case "+":
          result += `${i} + ${num} = ${i + num}<br>`;
          break;
        case "-":
          result += `${i} - ${num} = ${i - num}<br>`;
          break;
        case "*":
          result += `${i} × ${num} = ${i * num}<br>`;
          break;
        case "/":
          if (num!== 0) {
            result += `${i} ÷ ${num} = ${i / num}<br>`;
          } else {
            result += `Erro: não é possível dividir por zero!<br>`;
          }
          break;
      }
    }

    document.getElementById("result").innerHTML = result;
  }