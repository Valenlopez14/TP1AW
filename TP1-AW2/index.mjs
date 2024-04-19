import { informacion } from "./informacion.mjs";
import fs from 'fs/promises'
import http from 'node:http'


const fechaActual = new Date();
const dia = fechaActual.getDate();
const mes = fechaActual.getMonth() + 1;
const año = fechaActual.getFullYear();
let archivo = `./log-(${dia}-${mes}-${año}).txt`;

const servidor = http.createServer((peticion, respuesta)=>{
    const ruta = peticion.url;
    if (ruta !== '/log') {
        respuesta.end('Ingrese /log despues del puerto para generar archivo')
    }
     if (ruta === '/log'){
        async function escribir(){
            try {
                let fd
                fd = await fs.open(archivo, 'a')
                await fs.writeFile(fd, informacion)
                await fs.appendFile(fd, `Servidor iniciado el ${tiempoInicio.toLocaleString()}\n`);
                fd.close()
                respuesta.end('Reporte generado con exito')
            } catch (error) {
                respuesta.end('Error al generar el reporte')
            }
        }

    escribir()
    }
})

process.on('SIGINT', async () => {
    try {
        const tiempoCierre = new Date();
        await fs.appendFile(archivo, `Servidor cerrado el ${tiempoCierre.toLocaleString()}\n`);
        const inicio = tiempoInicio;
        const cierre = tiempoCierre;
        const segundosAbierto = (cierre - inicio) / 1000;
        const minutosAbierto = segundosAbierto / 60;
        const minutosRedondeados = minutosAbierto.toFixed(2);
        await fs.appendFile(archivo, `El servidor estuvo abierto: ${minutosRedondeados} minutos`);
        process.exit(0);
    } catch (error) {
        console.log('Error');
        process.exit(1);
    }
});

const tiempoInicio = new Date()
servidor.listen(2000)
