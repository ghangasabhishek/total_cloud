import React, { Component } from 'react'
import GridView from "./GridView"
import "../App.css"

export class DisplayUsers extends Component {

  constructor(props){
    super(props)

    this.state = {
      loading: true,
      userList: null
    }

  }

  async componentDidMount(){
    const url = "https://reqres.in/api/users?delay=3"
    const response = await fetch(url)
    const jsonData = await response.json()
    this.setState({
      loading: false,
      userList: jsonData.data
    })
  }


  render() {
    return (
      <div>
        {this.state.loading ?
          <div className = " loader "  />
          :
          this.state.userList != null && 
          <GridView
            userList = {this.state.userList}
          />
        }
      </div>
    )
  }
}

export default DisplayUsers
