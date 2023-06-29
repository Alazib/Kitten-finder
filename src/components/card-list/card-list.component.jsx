import { Component } from "react"
import "./card-list.styles.css"
import Card from "../card/card.component"

class CardList extends Component {
  render() {
    const { kittens } = this.props

    console.log("render en card", kittens)
    return (
      <div className="card-list">
        {kittens.map((kitten) => {
          const { id, name, email } = kitten
          return <Card id={id} name={name} email={email}></Card>
        })}
      </div>
    )
  }
}

export default CardList
