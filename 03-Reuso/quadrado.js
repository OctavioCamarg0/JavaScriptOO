class Quadrado extends Forma {

    constructor(lado) {
        super('Quadrado');
        this.lado = lado;
    }

    calculaArea() {
        return this.lado * this.lado;
    }
}