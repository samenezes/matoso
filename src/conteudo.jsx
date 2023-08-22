function Conteudo() {

        var valores = fetch('https://opentdb.com/api.php?amount=30&category=15').then(res=> 
        {
                res.json().then(dados=> {
                    console.log(dados)
                    
                    const teste1 = document.querySelector("#teste1")

                    teste1.innerHTML += 
                    `
                        <td> ${dados.response_code} </td>
                        <td> ${dados.correct_answer}</td>
                        <td> ${dados.category}</td>
                    `

                })
        }
    )
    


    return (
        <>  
            <table id="table">
                <tbody id="teste1"></tbody>

            </table>
        </>
    )

}

export default Conteudo