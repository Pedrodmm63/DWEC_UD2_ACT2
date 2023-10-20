import Instituto from "./ej2Ins.js";
import Grupo from "./ej2Gr.js";

let grupo1 = new Grupo(5, 1);
let grupo2 = new Grupo(10, 2);
let grupos = [grupo1, grupo2];

let instituto = new Instituto(1, "fleming", grupos);
console.log("ID: " + instituto._codigoInstituto  + " nombre: " + instituto._nombre);
console.log("En: " + instituto._nombre + " hay " + instituto.numTotalAlum() + " alumnos ");

let grupo3 = new Grupo(35, 3);
instituto.addGrupo(grupo3)
console.log(grupos);