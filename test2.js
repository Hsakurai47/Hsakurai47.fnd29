const form = document.querySelector(".form");
const exportBtn = document.querySelector(".exportBtn");
const editBtn = document.querySelector(".editBtn");
const tbody = document.querySelector(".tbody");

// console.log(form);
// console.log(exportBtn);
// console.log(editBtn);
// console.log(tbody);

const APP = {
    // 入力した一時保存配列
    data:[],
    init(){
        APP.addListeners();
    },
    addListeners(){
        form.addEventListener("submit",APP.createData);
    },

    createData(e){
        e.preventDefault();
        const formData = new FormData(form);
        /* データを保存する */
        APP.data.push(Array.from(formData.values()));
        /* データを行を追加する */
        const tr = document.createElement("tr");
        tr.innerHTML = "";
        for(let entry of formData.entries()){
            tr.innerHTML += `<td>${entry[1]}</td>`;
        }
        tbody.append(tr);
        /* データをクリアする */
        form.reset();
    }
};

document.addEventListener("DOMContentLoaded",APP.init);

