import React from 'react';
import * as XLSX from 'xlsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";

const DataToExcel = ({ data, filename, sheetName }) => {
    const dataToExcel = () => {
        // verificacion
        if (!data || data.length === 0) {
            alert("No hay datos para exportar a Excel");
            return;
        }

        // campos a exportar 
        const Fields = data.map(({ temperatura, humedad_relativa, CO2, VOC, intensidad_luminosa, createdAt }) => ({
            temperatura,
            humedad_relativa,
            CO2,
            VOC,
            intensidad_luminosa,
            createdAt
        }));

        // encabezado de la hoja 
        const header = ['Temperaturas (°C)', 'Humedades Relativas (%)', 'CO2 (ppm)', 'VOC (mg/m3)', 'Intensidades Luminosas (LUX)', 'Fecha y hora de publicación'];

        //combinacion de datos y el encabezado
        const sheetData = [header, ...Fields.map(item => Object.values(item))];

        // Crear una nueva hoja de cálculo
        const ws = XLSX.utils.aoa_to_sheet(sheetData);

        // Crear un libro de trabajo
        const wb = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, sheetName || 'Sheet 1');

        // Guardar el archivo Excel
        XLSX.writeFile(wb, filename || 'exported_data.xlsx');
    };

    return (
        <button className="btn btn-success" style={{marginLeft: "10px"}} onClick={dataToExcel}>
            <i className="bi bi-cloud-arrow-down-fill"></i> Descargar datos
        </button>
    );
};

export default DataToExcel;
