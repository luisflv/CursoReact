

function Renderizacao() {
    function renderizaInformacao(x) {
        if (x) {
            return (
                <h2>Verdadeiro </h2>
            )
        } else {
            return (
                <h2>Falso</h2>
            )
        }
    }

    function mensagemPersonalizada(nome){
        return (
            <h2> Olá, {nome}</h2>
        )
    }

    return (
        <div>
        {renderizaInformacao(true)}
        {renderizaInformacao(false)}
        {mensagemPersonalizada("Luís")}

        </div>
    )
}

export default Renderizacao