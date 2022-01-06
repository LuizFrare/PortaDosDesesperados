import Cartao from "../components/Cartao"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"

export default function Form() {

  const [qtdPortas, setqtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return(
    <div className={styles.form}>
      <div>
        <Cartao bgcolor="#FF6700"> 
          <h1 className={styles.titulo}>Porta dos Desesperados</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica text="Quantidade Portas?"
          value={qtdPortas}
          onChange={novaQtd => setqtdPortas(novaQtd)} />
        </Cartao>
      </div>

      <div>
        <Cartao>
        <EntradaNumerica text="Porta com presente?"
          value={comPresente}
          onChange={novaPortaComPresente => setComPresente(novaPortaComPresente)} />
        </Cartao>
        <Cartao bgcolor="#0892d0">
          <Link passHref href={`/jogo/${qtdPortas}/${comPresente}`}>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  )
}
