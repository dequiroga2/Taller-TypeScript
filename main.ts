import {Serie} from './serie.js';
import {series} from './data.js';

console.log(series)

let seriesTable: HTMLElement = document.getElementById("series")!;
let promedioTable: HTMLElement = document.getElementById("promedio")!;

mostrarSeries(series);
mostrarPromedio(series);

function mostrarSeries(series: Serie[]):void{
    let seriesTbody: HTMLElement = document.createElement("tbody");

    for(let serie of series)
    {
        let trElement:HTMLElement = document.createElement("tr");
        trElement.innerHTML=`<td>${serie.id}</td>
        <td>${serie.nombre}</td>
        <td>${serie.canal}</td>
        <td>${serie.temporadas}</td>`;
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}

function mostrarPromedio(series: Serie[]):void{
    let trElement:HTMLElement = document.createElement("tr");
    let suma:number = 0;
    let promedio:number = 0;
    for(let serie of series)
    {
        let temporadas:number = serie.temporadas;
        suma+=temporadas;
        promedio++;
    }
    promedio=suma/series.length;

    trElement.innerHTML = `<td><b>Promedio de temporadas</b></td><td>${promedio}</td>`;
    promedioTable.appendChild(trElement);
}
