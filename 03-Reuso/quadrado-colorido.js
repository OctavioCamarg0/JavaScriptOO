class QuadradoColorido extends Quadrado {
    constructor (lado, cor) {
        super(lado);
        this.cor = cor;
    }

    imprimeForma(){
        try {
            alert (`Tipo de Forma: ${this.tipoDeForma} ${this.cor} - Área ${this.calculaArea()}`);
            //alert(`Tipo de forma: ${this.tipoDeForma}`);
        }
        catch (error) {
            alert ('O código está com erro');
        }
    }
}