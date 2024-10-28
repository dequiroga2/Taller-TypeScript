import { series } from './data.js';
console.log(series);
var seriesTable = document.getElementById("series");
var promedioTable = document.getElementById("promedio");
mostrarSeries(series);
mostrarPromedio(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(serie.id, "</td>\n        <td>").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedio(series) {
    var trElement = document.createElement("tr");
    var suma = 0;
    var promedio = 0;
    for (var _i = 0, series_2 = series; _i < series_2.length; _i++) {
        var serie = series_2[_i];
        var temporadas = serie.temporadas;
        suma += temporadas;
        promedio++;
    }
    promedio = suma / series.length;
    trElement.innerHTML = "<td><b>Promedio de temporadas</b></td><td>".concat(promedio, "</td>");
    promedioTable.appendChild(trElement);
}
