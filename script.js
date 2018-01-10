const calculator_body = document.querySelector(".calculator-body");
const display = document.querySelector('.display');
const numeric = document.querySelector('.numeric');

let a = {
  value : 0
}

let b = {
  value : 0
}

let current_value = a;

let period = false;

const buttons = gen_buttons();

for (let b in buttons) {
  const div = document.createElement("div");
  div.classList.add("button-container");
  div.classList.add(`div-${buttons[b].area}`);

  const button = document.createElement('button');
  button.innerHTML = buttons[b].string;
  button.addEventListener('click', buttons[b].f);

  div.appendChild(button);

  calculator_body.appendChild(div);
}

update_display();

function numeric_button(n) {
  return function() {
    current_value.value = parseFloat(`${current_value.value}${period ? "." : ""}${n}`);;
    period = false;
    update_display();
  }
}

function operation_button(f) {
  return function(){
    current_value = b;
    op = f;
  }
}


function gen_buttons() {
  return {
    clear : {
      area : "clear",
      string : "Clear",
      f : () => {
        a.value = 0;
        b.value = 0;
        op = null;
        clear_display();
      }
    },

    del : {
      area : "delete",
      string : "Del",
      f : () => {
        if (period) {
          period = false;
        }
        else{
          let value_str = `${current_value.value}`
          if (value_str.charAt(value_str.length - 2) == ".") period = true;
          current_value.value = value_str.length == 1 ? 0 : parseFloat(value_str.substring(0, value_str.length - 1));
        }
        update_display();
      }
    },

    add : {
      area : "add",
      string: "+",
      f: operation_button((x,y) => x + y)
    },

    subtract : {
      area : "subtract",
      string : "-",
      f: operation_button((x,y) => x - y)
    },

    multiply : {
      area : "multiply",
      string : "*",
      f: operation_button((x,y) => x * y)
    },

    divide : {
      area : "divide",
      string : "/",
      f: operation_button((x,y) => x / y)
    },

    zero : {
      area: "zero",
      string : '0',
      f: numeric_button(0)
    },

    one : {
      area : "one",
      string : "1",
      f: numeric_button(1)
    },

    two : {
      area : "two",
      string : "2",
      f: numeric_button(2)
    },

    three : {
      area : "three",
      string : '3',
      f : numeric_button(3)
    },

    four : {
      area : 'four',
      string : '4',
      f: numeric_button(4)
    },

    five : {
      area : 'five',
      string: '5',
      f: numeric_button(5)
    },

    six : {
      area: "six",
      string : '6',
      f : numeric_button(6)
    },

    seven : {
      area : 'seven',
      string : '7',
      f : numeric_button(7)
    },

    eight : {
      area : 'eight',
      string : '8',
      f : numeric_button(8)
    },

    nine : {
      area : 'nine',
      string : '9',
      f : numeric_button(9)
    },

    period : {
      area : 'period',
      string : '.',
      f : () => {
        period = true;
        update_display();
      }
    },

    equal : {
      area: 'equal',
      string: '=',
      f: () => {
        a.value = op(a.value, b.value);
        b.value = 0;
        current_value = a;
        update_display();
        op = null;
      }
    }
  }
}

function update_display() {
  let raw_str = `${current_value.value}${period ? "." : ""}`;
  numeric.innerHTML =  raw_str.length <= 10 ? raw_str : raw_str.substring(0, 10);
}

function clear_display() {
  numeric.innerHTML = "";
}
