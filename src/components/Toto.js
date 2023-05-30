import { Fragment } from "react"

const Toto = props => {
  return (
    <Fragment>
        <h2>{props.name}</h2>
        <button onClick={() => props.reponseTotoProps("Non, je veux regarder la télé !")} disabled={props.leState.disabled}
            // Compléter cette section
        >Réponse</button>
        
        <p>{props.leState.messageToto}</p> 
    </Fragment>
  )
}

export default Toto