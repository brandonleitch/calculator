let calculator_body = document.querySelector(".calculator-body");


let buttons = {
  clear : {
    area : "clear",
    string : "Clear",
    f : null
  },

  del : {
    area : "delete",
    string : "Del",
    f : null
  },

  add : {
    area : "add",
    string: "+",
    f: null
  },

  subtract : {
    area : "subtract",
    string : "-",
    f: null
  },

  multiply : {
    area : "multiply",
    string : "*",
    f: null
  },

  divide : {
    area : "divide",
    string : "/",
    f: null
  },

  zero : {
    area: "zero",
    string : '0',
    f: null
  },

  one : {
    area : "one",
    string : "1",
    f: null
  },

  two : {
    area : "two",
    string : "2",
    f: null
  },

  three : {
    area : "three",
    string : '3',
    f : null
  },

  four : {
    area : 'four',
    string : '4',
    f: null
  },

  five : {
    area : 'five',
    string: '5',
    f: null
  },

  six : {
    area: "six",
    string : '6',
    f : null
  },

  seven : {
    area : 'seven',
    string : '7',
    f : null
  },

  eight : {
    area : 'eight',
    string : '8',
    f : null
  },

  nine : {
    area : 'nine',
    string : '9',
    f : null
  },

  period : {
    area : 'period',
    string : '.',
    f : null
  },

  equal : {
    area: 'equal',
    string: '=',
    f: null
  }
}

for (let b in buttons) {
  let div = document.createElement("div");
  div.classList.add("button-container");
  div.classList.add(`div-${buttons[b].area}`);

  let button = document.createElement('button');
  button.innerHTML = buttons[b].string;
  button.addEventListener('click', buttons[b].f);

  div.appendChild(button);

  calculator_body.appendChild(div);
}
