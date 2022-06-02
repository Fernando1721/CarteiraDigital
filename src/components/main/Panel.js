export default function Panel(props) {
    
    var caminho = "./img/mao mastercard.png";

    if (props.data.cardname == "") {
        caminho = "./img/mao visa.png";
    } else if (props.data.cardname == "Cartão Black") {
        caminho = "./img/mao mastercard.png";
    } else {
        caminho = "./img/mao visa.png";
    }

    return (
        <div className="panel">
            <img src={caminho}/>
            {console.log(caminho)}
        </div>


    );
}