/* When the input field receives input, convert the value from fahrenheit to celsius */
function FahrenheittoCelsius(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}
function temperatureConverter(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=(valNum*1.8)+32;
}
function CelsiustoKelvin(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=valNum+273.15;
}
function KelvintoCelsius(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputCelcius").innerHTML=valNum-273.15;
}
function KelvintoFahrenheit(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputFahrenheit").innerHTML=((valNum-273.15)*1.8)+32;
}
function last(valNum) {
  valNum = parseFloat(valNum);
  document.getElementById("outputKelvin").innerHTML=((valNum-32)/1.8)+273.15;
}
