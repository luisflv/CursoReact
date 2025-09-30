import LogoSrc from "../assets/images/logoIFSC.png"

function ImagensReact() {
    return (
        <div>
            <p> Imagem utilizada através da pasta public</p>
            <img src="./images/logoIFSC.png" width="100px" alt="Logotipo do IFSC" />
            <p> Imagem utilizada através da pasta SRC</p>
            <img src={LogoSrc} width="100px" alt="Logotipo do IFSC"/>
        </div>
    )
}

export default ImagensReact