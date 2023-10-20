export default class Grupo {
    constructor(numeroAlumnos, id) {
        this._numeroAlumnos = numeroAlumnos;
        this._id = id;
    }

    get NumeroAlumnos() {
        return this._numeroAlumnos;
    }

    get Id(){
        return this._id;
    }
    set Id(id) {
        this._id = id;
    }
    set NumeroAlumnos(numeroAlumnos) {
        this._numeroAlumnos = numeroAlumnos;
    }
}