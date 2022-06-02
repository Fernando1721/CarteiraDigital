export default function Cards(props) {
    const PassarDados = (pr) => {
        props.action(pr);
    }
    return (

        <div className="conteudo">
            <h2>Cards</h2>

        <div className="cards">    
                {props.data.map((itens,ix)=>(
                    <div key={ix} onClick={() => PassarDados(itens)}>
                        <h3>{itens.cardname}</h3>
                        <p>{itens.cartdlimit}</p>
                        <p>{itens.usebalance}</p>
                        <p className="preco">R$ {itens.preco}</p>
                        <p>
                        {itens.cardname.substring(0,12)==="Cartão Black" ? 
                            <img src="../img/visa.png"/>
                        : 
                            <img src="../img/mastercard.png"/>
                         }
                         </p>
                        </div>
                ))}
           </div> 
        </div>
    );
}