import { Component } from "react";




class Search extends Component{
    render (){
        const {value, onChange} = this.props
        return (
            <from>
                <input
                    type = "text"
                    value = {value}
                    onChange = {onChange}
                />
            </from>
        )
    }
}


export default Search