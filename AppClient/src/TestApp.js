import React, { Component } from 'react'
import CheckboxGroup from './CheckboxGroup';


class Clause extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render () {
    const {column_names, operators} = this.props;

    return (
      <div style={{border: "1px solid black", backgroundColor: "white"}}>
        <span>
        <input type="checkbox"/>
        <span>NOT</span>      
        </span>

        <span>
          <select>
            {column_names.map((column, idx) => {
              return (<option key={idx}>{column}</option>)
            })}
          </select>
        </span>

        <span>
          <select>
            {operators.map((operator, idx) => {
              return (<option key={idx}>{operator.operator}</option>)
            })}
          </select>
        </span>

        <input style={{minWidth: "200px"}} type="text" />

        <span>
        🗑
        </span>

      </div>
    )
  }



}

class TestAppWrapper extends Component {
  constructor(props){
    super(props);

    this.state = {
      clauses: []
    }


    this.column_names = ["patients", "case_file_id", "site_id", "result_code"]

    this.operators = [
        {operator: "=", requirement: ""},
        {operator: ">", requirement: ""},
        {operator: "<", requirement: ""},
        {operator: ">=", requirement: ""},
        {operator: "<=", requirement: ""},
        {operator: "<>", requirement: ""},
        {operator: "in", requirements: "["},
        {operator: "like", requirements: "%"}
    ]

    this.addClause = this.addClause.bind(this);

  }

  addClause() {
    var clauses = this.state.clauses;
    clauses.push(<Clause operators={this.operators} column_names={this.column_names}/>)
    this.setState({clauses: clauses})
  }


  render() {


    return (
      <div style={{backgroundColor: "red"}}>
          {"SELECT DISTINCT "} <br/>

          <CheckboxGroup fields={this.column_names} checked={[]} /><br/>
          {"FROM combined_view"}

          <button onClick={this.addClause}>Add Clause + </button>
          {this.state.clauses.map((clause) => {
            return (clause)
          })
           }
          
           <button>Run</button>
      </div>
    )
  }
}



export default TestAppWrapper
