import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './EmpEdit.css'
const EmpEdit = () => {
    const { empid } = useParams();

    //const [empdata, empdatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:3000/api/post/" + empid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            
            setName(resp.name);
            setLastName(resp.lastName);
            setMotherName(resp.phone);
            setAge(resp.age);
            setBirthday(resp.birthday);
            setStatus(resp.status);
            setPhone(resp.phone);
            setCountry(resp.country);
            setState(resp.state);
            setMunicipality(resp.municipality);
            setCity(resp.city);
            setCp(resp.cp);
            setLanguaje(resp.languaje);
            setHobby(resp.hobby);
            setPreferences(resp.preferences);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const[id,idchange]=useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [MotherName, setMotherName] = useState("");
    const [age, setAge] = useState("");
    const [birthday, setBirthday] = useState("");
    const [status, setStatus] = useState("");
    const [phone, setPhone] = useState("");
    const [country, setCountry] = useState("");
    const [state, setState] = useState("");
    const [municipality, setMunicipality] = useState("");
    const [city, setCity] = useState("");
    const [cp, setCp] = useState("");
    const [languaje, setLanguaje] = useState("");
    const [hobby, setHobby] = useState("");
    const [preferences, setPreferences] = useState("");
    const[validation,valchange]=useState(false);


    const navigate=useNavigate();

    const handlesubmit=(e)=>{
      e.preventDefault();
      const empdata={id,name,lastName,MotherName,age,birthday,status,phone,country,state,municipality,city,cp,languaje,hobby,preferences};
      

      fetch("http://localhost:3000/api/post/"+ empid,{
        method:"PATCH",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(empdata)
      }).then((res)=>{
        alert('Saved successfully.')
        navigate('/');
      }).catch((err)=>{
        console.log(err.message)
      })

    }
    return ( 
        <div>

        
        <section class="containers">
      <header>Detalles</header>
      <form action="#" class="form"  onSubmit={handlesubmit}>
     
        <div class="input-box">
          <label>Nombre</label>
          <input placeholder="Escriba su Nombre" required value={name} onMouseDown={e=>valchange(true)} onChange={e=>setName(e.target.value)}  />
        </div>
        <div class="input-box">
          <label>Apellido</label>
          <input placeholder="Escriba su Apellido" required value={lastName} onChange={e=>setLastName(e.target.value)}  />
        </div>

        <div class="input-box">
          <label>Apellido Materno</label>
          <input placeholder="Escriba su Apellido Materno" required value={MotherName} onChange={e=>setMotherName(e.target.value)}  />
        </div>

        <div class="column">
          <div class="input-box">
            <label>Telefono</label>
            <input type="number" placeholder="ingrese su numero" required value={phone} onChange={e=>setPhone(e.target.value)} />
          </div>
          <div class="input-box">
            <label>Edad</label>
            <input type="number" placeholder="ingrese su edad" required value={age} onChange={e=>setAge(e.target.value)} />
          </div>
          <div class="input-box">
            <label>Dia de Nacimiento</label>
            <input type="text" placeholder="Enter birth date" required value={birthday} onChange={e=>setBirthday(e.target.value)} />
          </div>
        </div>
        
        
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Ingrese su Estado Civil" required value={status} onChange={e=>setStatus(e.target.value)} />
      
          <input type="text" placeholder="Ingrese su Estado" required value={state} onChange={e=>setState(e.target.value)} />
          <input type="text" placeholder="Ingrese su Municipio" required value={municipality} onChange={e=>setMunicipality(e.target.value)}/>
          <div class="column">
          <input type="text" placeholder="Ingrese su Pais" required value={country} onChange={e=>setCountry(e.target.value)} />
            <input type="text" placeholder="Ingrese su ciudad" required value={city} onChange={e=>setCity(e.target.value)} />
          </div>
          <div class="column">
            
            <input type="number" placeholder="Ingrese su codigo postal" required value={cp} onChange={e=>setCp(e.target.value)}/>
          </div>
          <div class="column">
            
            <input type="text" placeholder="Ingrese sus hobbies" required value={hobby} onChange={e=>setHobby(e.target.value)}/>
            <input type="text" placeholder="Ingrese sus preferencias" required value={preferences} onChange={e=>setPreferences(e.target.value)}/>
            <input type="text" placeholder="Ingrese su idioma" required value={languaje} onChange={e=>setLanguaje(e.target.value)}/>

          </div>
        </div>
        <button  type="submit">Save</button>
      <Link to="/" >
        
      <button>Back</button></Link>
      </form>
    </section>
    </div>
     );
}
 
export default EmpEdit;