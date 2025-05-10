import { useState } from "react";
import styles from "./Calculadora.module.css";

const Calculadora = () => {

    const [altura, setAltura] = useState("");
    const [peso, setPeso] = useState("");
    const [imc, setIMC] = useState(null);
    const [classificacao, setClassificacao] = useState("");

    console.log(`Altura ${altura}`)
    console.log(`Peso ${peso}`)

    const calcularIMC = () => {
        if (altura && peso) {
            const imcCalculado = (peso / (altura * altura)).toFixed(2);
            setIMC(imcCalculado);
            definirClassificacao(imcCalculado);
        }
    }

    const definirClassificacao = (valorIMC) => {
        if (valorIMC < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (valorIMC >= 18.5 && valorIMC < 24.9) {
            setClassificacao("Peso normal");
        } else if (valorIMC >= 25 && valorIMC < 29.9) {
            setClassificacao("Sobrepeso");
        } else if (valorIMC >= 30 && valorIMC < 34.9) {
            setClassificacao("Obesidade grau I");
        } else if (valorIMC >= 35 && valorIMC < 39.9) {
            setClassificacao("Obesidade grau II");
        } else {
            setClassificacao("Obesidade grau III (mórbida)");
        }
    }

    return (
        <div className={styles.calculator}>
            <form className={styles.calculatorForm}>
                <div className={styles.calculatorItem}>
                    <label htmlFor="">Altura</label>
                    <input onChange={(e) => setAltura(parseFloat(e.target.value))}
                        type="number"
                        placeholder="Altura em (m), ex: 1,80" />
                </div>
                <div className={styles.calculatorItem}>
                    <label htmlFor="">Peso</label>
                    <input onChange={(e) => setPeso(parseFloat(e.target.value))}
                        type="number"
                        placeholder="Peso em (kg), ex: 75,50" />
                </div>
            </form>

            <button type="button" onClick={calcularIMC}>Calcular</button>

            <div className={styles.resultado}>
            {imc && (
                <>
                <p>
                    Seu IMC é: {imc} 
                </p>
                <p>Classificação: <strong>{classificacao}</strong></p>
                </>
            )}

            </div>

        </div>

    );
};
export default Calculadora;
