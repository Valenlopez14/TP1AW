import os from "node:os"

const procesador = JSON.stringify(os.cpus())
const MemoriaLibre = ((os.freemem()/1024/1024/1024)).toFixed(2)
const MemoriaTotal = ((os.totalmem()/1024/1024/1024)).toFixed(2)
const memoriaUsada = MemoriaTotal - MemoriaLibre 
const red = JSON.stringify(os.networkInterfaces())

let informacion = ""
informacion += os.EOL
informacion += "-------------------------"
informacion += os.EOL
informacion += "Procesador"
informacion += os.EOL
informacion += procesador
informacion += os.EOL
informacion += os.EOL
informacion += "Memoria Libre"
informacion += os.EOL
informacion += MemoriaLibre
informacion += os.EOL
informacion += os.EOL
informacion += "Memoria Usada"
informacion += os.EOL
informacion += memoriaUsada
informacion += os.EOL
informacion += os.EOL
informacion += "Memoria Total"
informacion += os.EOL
informacion += MemoriaTotal
informacion+= os.EOL
informacion += os.EOL
informacion += "Interfaz de Red"
informacion += os.EOL
informacion += red
informacion += os.EOL
informacion += os.EOL

export {informacion} 