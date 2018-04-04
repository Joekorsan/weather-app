import React, {Component} from 'react'


class UserInput extends Component {
  state = {
    city:''
  }



  render(){


    return (
      <form onSubmit={(event) => { event.preventDefault; this.props.changeCity(this.state.city)
      }}>
        <input  type='text' value={this.state.city} onChange={event => this.setState({city:event.target.value})}/>
        <button type="submit"> view weather </button>
      </form>

    )
  }

}

export default UserInput
