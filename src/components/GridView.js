import React, { Component } from 'react'
import "../App.css"
import UserDetails from "./UserDetails"


export class GridView extends Component {

  constructor(props){
    super(props)

    this.state = {
      showUserDetails: false,
      selectedUserId: null,
      sortingOrder: 'None'
    }
  }

  userDetails = (userId) => {
    this.setState({
      showUserDetails: true,
      selectedUserId: userId
    })
    
  }

  displayUsers = (sortOrder) => {
    switch(sortOrder){
      case 'FirstName':
        const newList = this.props.userList.map((user) => user.first_name).sort()

        return(
          <div className = "container">
          {newList.map((name) => {
            const user = this.props.userList.find(user => user.first_name === name);
              return(
                    <div 
                      className = "child" 
                      onClick = {() => this.userDetails(user.id)}
                      key = {user.id}
                    >
                      <img src = {user.avatar}/>
                      <p>{user.first_name} {user.last_name}</p>
                    </div>
              )
            })}
          </div>
        )

      case 'LastName':
          const newList2 = this.props.userList.map((user) => user.last_name).sort()

          return(
            <div className = "container">
            {newList2.map((name) => {
              const user = this.props.userList.find(user => user.last_name === name);
                return(
                      <div 
                        className = "child" 
                        onClick = {() => this.userDetails(user.id)}
                        key = {user.id}
                      >
                        <img src = {user.avatar}/>
                        <p>{user.first_name} {user.last_name}</p>
                      </div>
                )
              })}
            </div>
          )

      default:
          return(
            <div className = "container">
            {this.props.userList.map((user) => {
                return(
                      <div 
                        className = "child" 
                        onClick = {() => this.userDetails(user.id)}
                        key = {user.id}
                      >
                        <img src = {user.avatar}/>
                        <p>{user.first_name} {user.last_name}</p>
                      </div>
                )
              })}
            </div>
          )
    }
  }

  selectOrder = (event) => {
    this.setState({sortingOrder: event.target.value})
  }
  

  render() {
    const styles = {
      textAlign: "center",
    }
    const selectorStyle = {
      textAlign: "right",
      marginRight: "50px",
      marginBottom: "20px"
      

    }

    return (
      <React.Fragment>
        {this.state.showUserDetails ? 
        <UserDetails userId = {this.state.selectedUserId} />
        :
        <div className="App">
          <div>
            <h1 style={styles}>Users</h1>
            
            <div style = {selectorStyle}>
              <select style = {selectorStyle} value={this.state.sortingOrder} onChange = {this.selectOrder} >
                <option value="None" >None</option>
                <option value="FirstName" >First Name</option>
                <option value="LastName" >Last Name</option>
              </select>
            </div>
          </div>
          
          {this.displayUsers(this.state.sortingOrder)}
          
          </div>
        }
      </React.Fragment>
      
    )
  }
}

export default GridView
