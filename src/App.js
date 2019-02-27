import React, {Component} from 'react';
import Table from './Table';
import Form from './Form';




class App extends Component {

  handleSubmit = character => {
    this.setState({characters: [...this.state.characters, character]});
}
 
  
     state = {
        characters: [
          {
              'name': 'Charlie',
              'job': 'Janitor'
          },
          {
              'name': 'Mac',
              'job': 'Bouncer'
          },
          {
              'name': 'Dee',
              'job': 'Aspring actress'
          },
          {
              'name': 'Dennis',
              'job': 'Bartender'
          }
      ]
    };
    // remove chreacter function deletes an index of charecter
    removeCharacter = index => {
      const { characters } = this.state;
  
      this.setState({
          characters: characters.filter((character, i) => { 
              // return i if it does not equal index
              return i !== index;
          })
      });
  }

    render() {
      return (
        <div className="container">
          <Table characterData={this.state.characters}
          removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
        )}
      }
    export default App;
