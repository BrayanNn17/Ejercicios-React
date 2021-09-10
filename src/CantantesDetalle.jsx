import React from "react";

const cantantes =[
    
    {
        "id": 1,
      "nombre":"Maria Becerra",
      "edad":21,
      "genero":"F",
      "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFV_NgNFXIC2Pvs7OkIUi3dQuWMmgrMIwldw&usqp=CAU", 
      "generoC":"reggaeton",
      "Aniodecomienzo":"2019",
      "primeracancion":"Tú"
    
    },
    {
        "id": 2,
        "nombre":"Tiago",
        "edad":19,
        "genero":"M",
        "imagen":"https://upload.wikimedia.org/wikipedia/commons/e/ee/Tiago_PZK.jpg", 
        "generoC":"R&B",
        "Aniodecomienzo":"2018",
        "primeracancion":"Bandolero"
      },
      {
        "id": 3,
        "nombre":"Luck ra",
        "edad":20,
        "genero":"M",
        "imagen":"https://images.genius.com/75b4d1bbde7c0b940d94cba3cee7cecd.300x300x1.jpg",
        "generoC":"Pop",
        "Aniodecomienzo":"2018",
        "primeracancion":"No Quiero Más"
    },
      {
        "id": 4,
        "nombre":"Duki",
        "edad":25,
        "genero":"M",
        "imagen":"data:image/jpeg;base64,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" ,
        "generoC":"Trap",
        "Aniodecomienzo":"2016",
        "primeracancion":"No vendo trap"
      },
      {
        "id": 5,
        "nombre":"Khea",
        "edad":21,
        "genero":"M",
        "imagen":"https://yt3.ggpht.com/hVwsylZYvVTtoUVFH708oDrOeOsRxctzBhb5ERTmYKz0QBnzWllJTAORXnJbpF-8MiEL25g5=s900-c-k-c0x00ffffff-no-rj", 
        "generoC":"Trap y pop",
        "Aniodecomienzo":"2017",
        "primeracancion":"B.U.H.O"
      },
      
      {
        "id": 6,
        "nombre":"Lit killah",
        "edad":21,
        "genero":"M",
        "imagen":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5_9i2eObPdqJt629zbhW6ZrmXC5HVKDHrA&usqp=CAU",
        "generoC":"Trap, rap y pop",
        "Aniodecomienzo":"2017",
        "primeracancion":"Destroy"
        
      }
    ]
      
    const CantantesDetalle = ({match}) => {
        const cantante = cantantes.filter(c => c.id === parseInt(match.params.id))[0];
        return( 
        
        <>

        {
           cantante ? ( 
                     <div className="card">
                       <div className="card-boy">
                              <h2 className="card-title">{cantante.nombre}</h2>
        
                                  <p className="card-text">Edad: {cantante.edad}.</p>
                                 <p className="card-text">Genero: {cantante.genero}.</p>
                                 <p className="card-text">Genero que canta: {cantante.generoC}.</p>
                                 <p className="card-text">Año de comienzo: {cantante.Aniodecomienzo}.</p>
                                 <p className="card-text">Primera cancion: {cantante.primeracancion}.</p>
                                 <p className="card-text">Imagen:<br/><img style={{ width: '20%' }} src={cantante.imagen}  />.</p>
                        </div>
                    </div>
          ):
          <h1>El Id no existe</h1>

        }


        <a href={`/Cantantes`}>Ver todos</a>
       
        </>
        );
    };
    
    
    export default CantantesDetalle;