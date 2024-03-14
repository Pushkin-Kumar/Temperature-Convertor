const celsiusEle = document.getElementById("celsius");
const fahrenheitEle = document.getElementById("fahrenheit");
const kelvinEle = document.getElementById("kelvin");
console.log(celsiusEle, fahrenheitEle, kelvinEle);

function computeTemp(e) {
  console.log(e);
  const currValue = +e.target.value;
  switch (e.target.name) {
    case "celsius":
      kelvinEle.value = (currValue + 273.32).toFixed(2);
      fahrenheitEle.value = (currValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsiusEle.value = ((currValue - 32) / 1.8).toFixed(2);
      kelvinEle.value = ((currValue - 32) / 1.8 + 273.32).toFixed(2);
      break;
    case "kelvin":
      celsiusEle.value = (currValue - 273.15).toFixed(2);
      fahrenheitEle.value = ((currValue - 273.15) * 1.8 + 32).toFixed(2);
      break;
    default:
      break;
  }
}
