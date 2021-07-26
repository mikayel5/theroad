import { Component } from "react";



//Model 1
// function Search(props){
//     const {value, onChange,children} = props
//         return (
//             <from>
//                 {children}<input
//                     type = "text"
//                     value = {value}
//                     onChange = {onChange}
//                 />
//             </from>
            
//         )
    



//Model 2
//   }
//   function Search({value, onChange,children} ){
//         return (
//             <from>
//                 {children}<input
//                     type = "text"
//                     value = {value}
//                     onChange = {onChange}
//                 />
//             </from>
            
//         )
    
//   }


const Search =({value, onChange, onSubmit, children})=>
    <form onSubmit={onSubmit}>
                 <input
                     type = "text"
                     value = {value}
                     onChange = {onChange}
                     
                 />
                 <button type="submit">
                     {children}
                 </button>
             </form>

    

export default Search