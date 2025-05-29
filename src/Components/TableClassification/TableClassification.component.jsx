import "./TableClassification.styles.scss"
const TableClassification = () => {
    return(
        <table className="tableClassification">
            <thead>
                <tr>
                    <th scope="col">IMC</th>
                    <th scope="col">Classificação</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Menos de 17</td>
                    <td>Muito abaixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 17 e 18,49</td>
                    <td>Abaixo do peso</td>
                </tr>
                <tr>
                    <td>Entre 18,5 e 24,99</td>
                    <td>Peso normal</td>
                </tr>
                <tr>
                    <td>Entre 25 e 29,99</td>
                    <td>Acima do peso</td>
                </tr>
                <tr>
                    <td>Entre 30 e 34,99</td>
                    <td>Obesidade I</td>
                </tr>
                <tr>
                    <td>Entre 35 e 39,99</td>
                    <td>Obesidade II (severa)</td>
                </tr>
                <tr>
                    <td>Acima de 40</td>
                    <td>Obesidade III (mórbida)</td>
                </tr>
            </tbody>
        </table>
    )
}

export default TableClassification