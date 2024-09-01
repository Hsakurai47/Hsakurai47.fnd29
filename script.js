'use strict'
// 1行目に記載している 'use strict' は削除しないでください

// let button1 = document.getElementById('resistBtn');
// let button2 = document.getElementById('kikkakeBtn');
// let button3 = document.getElementById('resultBtn');
// let button4 = document.getElementById('kadaiBtn');
const text1 = "レクサス電システム設計部　コクピットシステム設計室　2G";
const text2 ="Javascriptを理解し、他の言語PowerAPPなどを習得し今後使う機会を持ちたい。将来的にはPythonを使用できるようになりたい";
const text3 = "JavaおよびCSSなどの概念は理解できた。ただメソッドは多数の種類がありすべては覚えきれない。上手く検索して使用するメソッドをピックアップし、使えるようになりたい";
const text4 = "今回を受講した技術をどうやって業務改善に活かすか悩みどころ";

function on_click( text, h_tag ){
    let h_text = document.createElement(h_tag);
    h_text.textContent= text;
    document.body.appendChild(h_text);
} 

// button1.onclick = click1;
//button1.onclick = on_click( text1, "h2" );
// button2.onclick = click2;
// button3.onclick = click3;
// button4.onclick = click4;


// function click1(){
//     let h2_text = document.createElement('h2');
//     console.log(h2_text);
//     h2_text.textContent=text1;
//     document.body.appendChild(h2_text);
// }

// function click2(){
//     let h3_text = document.createElement('h3');
//     console.log(h3_text);
//     h3_text.textContent=text2;
//     document.body.appendChild(h3_text);
// }
// function click3(){
//     let h4_text = document.createElement('h4');
//     console.log(h4_text);
//     h4_text.textContent=text3;
//     document.body.appendChild(h4_text);
// }

// function click4(){
//     let h5_text = document.createElement('h5');
//     console.log(h5_text);
//     h5_text.textContent=text4;
//     document.body.appendChild(h5_text);
// }

