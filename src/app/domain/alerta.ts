export class Alerta {
    
    private _categoria: string;
    private _descricao: string;
    private _flagTipo: number;
    private _margem: number;
    private _pontoDeVenda: string;
    private _produto: string;

    constructor() { }

    get categoria() : string {
        return this._categoria;
    }

    get descricao() : string {
        return this._descricao;
    }

    get flagTipo() : number {
        return this._flagTipo;
    }

    get margem() : number {
        return this._margem;
    }

    get pontoDeVenda() : string {
        return this._pontoDeVenda;
    }

    get produto() : string {
        return this._produto;
    }

}
