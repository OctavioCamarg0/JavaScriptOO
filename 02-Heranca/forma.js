class Forma {

    constructor(tipoDeForma = 'Forma abstrata'){
        // this.tipoDeForma = "Forma abstrata";
        this.tipoDeForma = tipoDeForma;
    }

    imprimeForma(){
        try {
            alert (`Tipo de Forma: ${this.tipoDeForma} - Área ${this.calculaArea()}`);
            //alert(`Tipo de forma: ${this.tipoDeForma}`);
        }
        catch (error) {
            alert ('O código está com erro');
        }
    }

    calculaArea(){
        throw new Error('o método calculaArea() deve ser implementado na subClass.');
    }

}