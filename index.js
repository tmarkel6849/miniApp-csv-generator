

let csvText = ``;

const newLine = () => {
  return `
`;
}

const makeCSV = (data) => {
  for (let key in data) {
    if (key === 'children') break;
    csvText += `${key},`;
  }
  csvText = csvText.slice(0, csvText.length - 1);
  csvText += newLine();
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
module.exports.makeCSV = makeCSV;
module.exports.childObj = childObj;
module.exports.newLine = newLine;