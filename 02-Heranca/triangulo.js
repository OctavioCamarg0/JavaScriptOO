class Triangulo extends Forma {
    constructor (base, altura) {
        super('Triângulo');
        this.base = base
        this.altura = altura 
    }

    calculaArea(){
        return (this.base * this.altura) / 2
    }
}