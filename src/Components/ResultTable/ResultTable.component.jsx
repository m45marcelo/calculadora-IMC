import TableClassification from "../TableClassification/TableClassification.component";
import "./Resulttable.styles.scss";

const ResultTable = ({ inputsConfirm, valueAltura, valuePeso }) => {
    const pesoNumber = Number(valuePeso);
    let altura = "";
    if (valueAltura.length === 1 || valueAltura.length === 2) {
        altura = valueAltura[0];
    } else if (valueAltura.length === 3) {
        altura = valueAltura[0] + valueAltura[2];
    } else if (valueAltura.length === 4) {
        altura = valueAltura[0] + valueAltura[2] + valueAltura[3];
    }
    const alturaNumber = Number(altura);

    const resultIMC = (valor) => {
        if (valor < 17) return "Muito abaixo do peso";
        if (valor >= 17 && valor <= 18.49) return "Abaixo do peso";
        if (valor >= 18.5 && valor <= 24.99) return "Peso normal";
        if (valor >= 25 && valor <= 29.99) return "Acima do peso";
        if (valor >= 30 && valor <= 34.99) return "Obesidade I";
        if (valor >= 35 && valor <= 39.99) return "Obesidade II (severa)";
        if (valor > 40) return "Obesidade III (mórbida)";
    };

    const calculateIMC = (altura, peso) => {
        const alturaM2 = (altura * altura) / 1000;
        const result = (peso / alturaM2) * 10;
        return result;
    };

return (
    <div className="tableContainer">
        { 
            inputsConfirm ? (
                <table className="resultTable">
                    <thead>
                        <tr>
                            <th scope="col">Peso</th>
                            <th scope="col">Altura</th>
                            <th scope="col">IMC</th>
                            <th scope="col">Resultado</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{valuePeso}</td>
                            <td>{valueAltura}</td>
                            <td>
                                {calculateIMC(alturaNumber, pesoNumber).toFixed(2)}
                            </td>
                            <td>
                                {resultIMC(
                                    calculateIMC(alturaNumber, pesoNumber).toFixed(
                                        2
                                    )
                                )}
                            </td>
                        </tr>
                    </tbody>
                </table>    
            ) : (
                <div className="containerMessage">
                    <p>Saiba agora se está no seu peso ideal!</p>
                </div> 
            )
        }
        <TableClassification/>
    </div>
);
};

export default ResultTable;
