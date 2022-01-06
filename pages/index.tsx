import Cartao from "../components/Cartao"
import styles from "../styles/Form.module.css"
import Link from "next/link"
import EntradaNumerica from "../components/EntradaNumerica"
import { useState } from "react"
import Image from "next/image"
import Logo from "../assets/logo.png"

export default function Form() {

  const [qtdPortas, setqtdPortas] = useState(3)
  const [comPresente, setComPresente] = useState(1)

  return(
    <div className={styles.form}>
      <Image src={Logo} className={styles.imagem} alt="Logo"/>
      <div>
        <Cartao bgcolor="#FF6700"> 
          <h1 className={styles.titulo}>Informe a quantidade de portas e a porta escolhida</h1>
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
