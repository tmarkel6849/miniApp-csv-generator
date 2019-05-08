// let form = document.getElementsByTagName('form')[0];

// form.addEventListener('submit', e => {
//   e.preventDefault();
//   let formValue = form.children[1].value
//   console.log(JSON.stringify(formValue));
//   form.children[1].value = "";
// });



let sampleData = {
  "firstName": "Joshie",
  "lastName": "Wyattson",
  "county": "San Mateo",
  "city": "San Mateo",
  "role": "Broker",
  "sales": 1000000,
  "children": [{
      "firstName": "Beth Jr.",
      "lastName": "Johnson",
      "county": "San Mateo",
      "city": "Pacifica",
      "role": "Manager",
      "sales": 2900000,
      "children": [{
          "firstName": "Smitty",
          "lastName": "Won",
          "county": "San Mateo",
          "city": "Redwood City",
          "role": "Sales Person",
          "sales": 4800000,
          "children": []
        },
        {
          "firstName": "Allen",
          "lastName": "Price",
          "county": "San Mateo",
          "city": "Burlingame",
          "role": "Sales Person",
          "sales": 2500000,
          "children": []
        }
      ]
    },
    {
      "firstName": "Beth",
      "lastName": "Johnson",
      "county": "San Francisco",
      "city": "San Francisco",
      "role": "Broker/Sales Person",
      "sales": 7500000,
      "children": []
    }
  ]
};
let csvText = ``;

const makeCSV = (data) => {
  for (let key in data) {
    if (key === 'children') break;
    csvText += `${key},`;
  }
  csvText = csvText.slice(0, csvText.length - 1);
  csvText += newLine();
  //loop over all object skipping the keys
  for (let key in data) {
    if (Array.isArray(data[key])) {
      if (data[key].length > 0) {
        childObj(data[key]);
        continue;
      } else {
        continue;
      }
    }
    csvText += `${data[key]},`;
  }
  csvText = csvText.slice(0, csvText.length - 1);
}
const childObj = (array) => {
  for (let obj of array) {
    csvText = csvText.slice(0, csvText.length - 1);
    csvText += newLine();
    for (let key in obj) {
      if (Array.isArray(obj[key])) {
        if (obj[key].length > 0) {
          csvText = csvText.slice(0, csvText.length - 1);
          csvText += newLine();
          childObj(obj[key]);
          continue;
        } else {
          continue;
        }
      }
      csvText += `${obj[key]},`;
    }
  }
}

const newLine = () => {
  return `
`;
}