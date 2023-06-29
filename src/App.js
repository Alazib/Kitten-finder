import "./App.css"
import { Component } from "react"
import CardList from "./components/card-list/card-list.component"
import SearchBox from "./components/search-box/search-box.component"

class App extends Component {
  constructor() {
    super()

    this.state = {
      kittens: [],
      searchField: "",
    }
    console.log("constructor")
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(() => {
          return { kittens: users }
        })
      )
    console.log("mounted")
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase()

    this.setState(() => {
      return { searchField: searchField }
    })
  }

  render() {
    console.log("render")
    const { kittens, searchField } = this.state
    const { onSearchChange } = this

    const kittensFiltered = kittens.filter((kitten) =>
      kitten.name.toLocaleLowerCase().includes(searchField)
    )
    return (
      <div className="App">
        <h1 className="app-title">Kitten Finder</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder="search kitten"
          className="search-box__kittens"
        />
        <CardList kittens={kittensFiltered} />
      </div>
    )
  }
}

export default App
