import React  , { Component } from 'react'
import {bindActionCreators } from 'redux'
import {  connect }  from 'react-redux'
import { getList  , showUpdate , showDelete}  from './billingCycleActions'

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList()

        }

        
        renderRows() {
            const list = this.props.list || []
            return list.map((todoList  , index)=> 
                <tr key={index}>
                <td>{todoList.name}</td>
                <td>{todoList.month}</td>
                <td>{todoList.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(todoList)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() =>  this.props.showDelete(todoList)}>
                        <i className='fa fa-trash-o'></i>
                    </button>
                </td>
                </tr>
            )
            }    
    
    render(){
        
        return (
            <div>
                <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Mês</th>
                        <th>Ano</th>
                        <th>Ações</th>
                    </tr>
                </thead>
               
                <tbody>

                {this.renderRows()}
               
                </tbody>
                </table>
            </div>  
        )
    }
}
const mapStateToProps = state => ({list: state.billingCycle.list})
const mapDispatchToProps = dispatch => bindActionCreators({getList , showUpdate , showDelete}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList)