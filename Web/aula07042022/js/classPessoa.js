class pessoa {
    constructor (pNome, pDtNasc) {
        this.nome = pNome;
        this.dtNasc = new Date(pDtNasc);
    }
    getNome() {
        return this.nome;
    }
    getDtNasc() {
        return this.dtNasc;
    }
    idade() {
        var hoje = new Date();
        return hoje.getFullYear() - this.dtNasc.getFullYear();
    }
}