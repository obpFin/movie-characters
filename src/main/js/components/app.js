const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./../client');

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {characters: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/api/movieCharacters'}).done(response => {
			this.setState({characters: response.entity._embedded.movieCharacters});
		});
	}

	render() {
		return (
			<CharacterList characters={this.state.characters}/>
		)
	}
}

class CharacterList extends React.Component{
	render() {
		var characters = this.props.characters.map(character =>
			<Character key={character._links.self.href} character={character}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
						<th>Url</th>
					</tr>
					{characters}
				</tbody>
			</table>
		)
	}
}

class Character extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.character.firstName}</td>
				<td>{this.props.character.lastName}</td>
				<td>{this.props.character.description}</td>
				<td>{this.props.character.imgUrl}</td>
			</tr>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('react'));
