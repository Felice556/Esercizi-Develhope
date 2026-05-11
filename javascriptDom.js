const html = document.documentElement;
const body = html.children[1];
const ul = body.children[0];
const li = ul.children[1];

console.log(li); // mostra il secondo elemento della lista (li)

const ulFather = ul.parentElement;
console.log(ulFather); // mostra il padre di ul (body)
const liSiblings = li.nextElementSibling;
console.log(liSiblings); // mostra il fratello successivo di li (il terzo elemento della lista)
const liPreviousSibling = li.previousElementSibling;
console.log(liPreviousSibling); // mostra il fratello precedente di li (il primo elemento della lista)
