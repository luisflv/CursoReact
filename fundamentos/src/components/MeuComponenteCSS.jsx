import React from 'react'
/*import './MeuComponenteCSS.css'*/
import style from './MeuComponenteCSS.module.css'

function MeuComponenteCSS() {
  return (
    <div>

        <h2 className={style.title}> Título do meu componente </h2>
        <h2 style={{color:"purple"}}> Título com CSS inline </h2>
    </div>
  )
}

export default MeuComponenteCSS