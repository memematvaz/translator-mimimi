


class App extends React.Component {
  constructor(props) {
    super(props);
    this.renderShowDetails = this.renderShowDetails.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
    this.handleCheckbox = this.handleCheckbox.bind(this)
    this.state = {
      data: [],
      search: '',
      isChecked: false
    }
  }

  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data
        })
      })
  }

  handleSearch(currentTargetValue) {
    this.setState({ search: currentTargetValue })
  }

  handleCheckbox() {
    this.setState(prevState => {
      return {
        isChecked: !prevState.isChecked
      }
    })
  }

  renderShowDetails(props) {
    console.log(props)
    const urlId = props.match.params.id;
    const dataCard = this.state.data;
    for (let card of dataCard) {
      if (card.show.id === parseInt(urlId)) {
        return <ShowDetails cards={card} />
      }
    }
  }

  componenDidUpdate() { console.log(this.state) }

  render() {

    return (
      <div className="container">
        <Switch>
          <Route exact path="/">
            <h1 className="Main_title">Shows</h1>
            <Filters
              handleSearch={this.handleSearch}
              value={this.state.search}
              handleCheckbox={this.handleCheckbox}
              isChecked={this.state.isChecked} />

            <ShowList
              data={this.state.data}
              search={this.state.search}
              isChecked={this.state.isChecked} />
          </Route>
          <Route path="/card/:id" render={this.renderShowDetails} />
        </Switch>
      </div>
    );
  }
}
export default App;
