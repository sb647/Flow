import React, { Component } from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom';

class DeleteCategory extends Component {
    state = {
        categoryList: [],
        value: ''
    }

    componentDidMount(){
        axios.get('http://localhost:8080/categoryList')
            .then(response=>{
                this.setState({
                    categoryList:response.data
                })
            })
    }

    handleChange=(e)=>{
        this.setState({
            value:e.target.value
        })
    }

    handleCategorySubmit=(e)=>{
        e.preventDefault();
        const data={
            name: this.state.value
        };

        return axios.post('http://localhost:8080/deleteCategory', data)
            .then(response=>{
                    this.props.history.push('/ADMIN');
                });

    }


    render() {
        const categories = this.state.categoryList.map(c => {
            return (
                <option value={c.name}>{c.name}</option>
            )
        })
        return (
            <div className="container center">

                    <form onSubmit={this.handleCategorySubmit}>
                        <div className="input-field col s12">

                                <select className="browser-default" value={this.state.value}
                                        onChange={this.handleChange}>
                                    <option value="" disabled selected>Please choose category of product:</option>
                                    {categories}
                                </select>
                            </div>
                            <button className="btn red lighten-1 z-depth-0">Delete</button>

                    </form>
            </div>


        )
    }
}
export default withRouter(DeleteCategory);

