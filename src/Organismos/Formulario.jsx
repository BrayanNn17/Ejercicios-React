import React , {Component} from "react";

class Formulario extends Component{

    constructor(props){

        super(props);

        this.state = {
            nombre: "",
            apellido: ""
        }

       this.cambiarNombre = this.cambiarNombre.bind(this)
       this.cambiarApellido= this.cambiarApellido.bind(this)
    }
    cambiarNombre(e){
        this.setState({
            nombre: e.target.value
        })
    }
    cambiarApellido(e){
        this.setState({
            apellido: e.target.value
        })
    }
    render(){
         return(
             <div id="elemento" style={{marginTop:'6%'}}>
            <h1>Formulario</h1>
             <form autoComplete="off">
                 
                 <input type="text" name="nombre" placeholder="Ingresa el nombre" onChange={this.cambiarNombre}/>
                 <input type="text" name="apellido" placeholder="Ingresa el nombre" onChange={ this.cambiarApellido}/>
                 <input type="submit" value="Enviar"/>
                 </form>
                 <br/>
                 <br/>
                 <h4>{ `Nombre: ${this.state.nombre}` }</h4>  
                 <h4>{ `Apellido: ${this.state.apellido}` }</h4>   
             </div>
         )


    } 

    componentDidMount(){
        let elemento= document.getElementById('elemento')
        console.log(elemento);
    }

    componentDidUpdate(prevProps, prevState){
     console.log(prevState);
     console.log(prevProps);
     console.log("-------------");


    }

}
export default Formulario;