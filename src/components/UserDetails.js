import React, { Component } from 'react'

export class UserDetails extends Component {

  constructor(props){
    super(props)

    this.state = {
      loading: true,
      userId : this.props.userId,
      userDetails : null
    }

  }

  async componentDidMount(){
    const url = `https://reqres.in/api/users/${this.state.userId}`
    const response = await fetch(url)
    const jsonData = await response.json()
    this.setState({
      loading: false,
      userDetails: jsonData.data
    })
  }

  render() {
    const {userDetails} = this.state
    return (
      <div className= "App">
        {this.state.loading ?
          <div className = " loader "  />
          :
          userDetails!= null &&
          <div>
            <img src = {userDetails.avatar} />
            <h2>{userDetails.first_name} {userDetails.last_name}</h2>
            <p>{userDetails.email}</p>
          </div>
        }
      </div>
    )
      
  }
}

export default UserDetails
