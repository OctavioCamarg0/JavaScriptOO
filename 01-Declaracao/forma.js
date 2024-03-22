class Forma {

    constructor(){
        this.tipoDeForma = "Forma abstrata";
    }

    imprimeForma(){
        alert (`Tipo de Forma: ${this.tipoDeForma} - Área ${this.calculaArea()}`)
        //alert(`Tipo de forma: ${this.tipoDeForma}`);
    }

    calculaArea(){
        throw new Error('o método calculaArea() deve ser implementado na subClass.')
    }

}