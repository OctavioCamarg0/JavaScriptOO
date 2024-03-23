class Circulo extends Forma {

    constructor(raio) {
        super('Circulo')
        this.raio = raio
    }

    calculaArea() {
        return (Math.PI * (this.raio ** 2)).toFixed(2)
    }
}