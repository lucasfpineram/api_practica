export class User {
    constructor(
        public id_persona: string,
        public id_persona_sup: string,
        public doc: string,
        public mail: string,
        public nombre: string,
        public apellido: string,
        public perfiles: string[]
    ) {}
}
