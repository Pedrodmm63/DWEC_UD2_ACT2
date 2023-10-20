export default class Instituto {

    constructor(codigoInsituto, nombre, grupo) {
        this._codigoInstituto = codigoInsituto;
        this._nombre = nombre;
        this._grupo = grupo;
    }

    obtenerCodigoInstituto() {
        return this._codigoInstituto
    }
    setGrupo(grupo){
        this._grupo = grupo;
    }
 
    numTotalAlum(){
        let numTotalAlum = 0;
        for(let i = 0; i < this._grupo.length; i++) {
            numTotalAlum+=this._grupo[i]._numeroAlumnos;
            
        }
        return numTotalAlum;
    }
    addGrupo(grupo){
        this._grupo.push(grupo);
    }
}
