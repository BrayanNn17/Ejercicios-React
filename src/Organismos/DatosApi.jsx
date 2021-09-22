import React, {Component} from "react";
import { unmountComponentAtNode } from "react-dom";
import axios from "axios";


class DatosApi extends Component{
     
    constructor(props){
        super(props);

        this.state  = {
            posts: []
        }
    }

    componentDidMount(){
        axios.get('http://my-json-server.typicode.com/BrayanNn17/datajson/Cantantes')
        .then(response => {
            this.setState({
                posts: response.data
            })
        })
       /* fetch('https://jsonplaceholder.typicode.com/posts', {method: 'get'} )
        .then(response => response.json())
        .then(dataResponse =>{
        this.setState({
            posts: dataResponse
        })
    });*/
    }

    render(){
        const {posts} = this.state
        return (
            <>
            <div>
                {
                    posts.map( u => (

                        <>
                          <p>{u.id}</p>
                          <p>{u.nombre}</p>
                          <p>{u.edad}</p>
                          <p>{u.genero}</p>
                          <img style={{width:'20%'}} src={u.imagen}></img>
                          
                        </>

                    ))
                }
 

            </div>
            </>
        )
    }


}

export default DatosApi;