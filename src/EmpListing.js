import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './EmpListing.css'
const EmpListing = () => {
    const [empdata, empdatachange] = useState(null);
    const navigate = useNavigate();

    const LoadDetail = (id) => {
        navigate("/employee/detail/" + id);
    }
    const LoadEdit = (id) => {
        navigate("/employee/edit/" + id);
    }
    const Removefunction = (_id) => {
        if (window.confirm('Do you want to remove?')) {
            fetch("https://userfrontend-4oq4.vercel.app/api/post/" + _id, {
                method: "DELETE"
            }).then((res) => {
                alert('Removed successfully.')
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }




    useEffect(() => {
        fetch("https://userfrontend-4oq4.vercel.app/api/post").then((res) => {
            return res.json();
        }).then((resp) => {
            empdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    return (
        <div className="container">
            
        
                <div className="card-title">
                    
                    <h2>Users App</h2>
                    <div className="btnAdd">
                        <Link to="employee/create" className="btn btn-success">
                            <button>Añadir Usuario</button>
                            </Link>
                    </div>
                   
                </div>
                
                   
                    <div class="wrapers">
                    {empdata &&
                                empdata.map(item => (
                  
                 
                      <div class="wrapper">
    <div class="img-area">
      <div class="inner-area">
        <img src="https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt=""/>
      </div>
    </div>
    
    <div class="name">{item.name}</div>
    <div class="about">{item.lastName}</div>
    
    <div class="buttons">
      <button onClick={() => { LoadEdit(item._id) }}>Detalles</button>
      <button onClick={() => { Removefunction(item._id) }}>Borrar</button>
      
    </div>
   
  </div>
  
     ))
    }
    </div>
                 
                </div>
           
       
    );
}

export default EmpListing;