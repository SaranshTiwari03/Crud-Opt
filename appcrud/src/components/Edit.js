import react,{useState, useEffect} from 'react';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate}from 'react-router-dom'


function Edit(){
        const [name,setName]=useState('');
        const [age,setAge]=useState('');
        const [id,setId]=useState('');

        let history=useNavigate();

        var index =Employees.map(function(e){
            return e.id
        }).indexOf(id);

        const handleSubmit =(e)=>{
            e.preventDefault();
            
            
            let a= Employees[index];
            a.Name=name;
            a.Age=age;

        
           
            history("/");
        }

        useEffect(()=>{
            setName(localStorage.getItem('Name'))
            setAge(localStorage.getItem('Age'))
            setId(localStorage.getItem('Id'))
        },[])

    return(

        <div>
            <form className="d-gird gap-2"  style={{margin:"15rem"}}>
                <div className="mb-3 Form.Group " controlId="formName">
                    <input class="form-control" type="text" placeholder="Enter Name" value={name} required onChange={(e)=>setName(e.target.value)}/>

                        
                    
                </div>
                <div className="mb-3 Form.Group" controlId="formAge">
                    <input class="form-control" type="text" placeholder="Enter Age"  value={age} required onChange={(e)=>setAge(e.target.value)} />

                        
                    
                </div>
                <Button onClick={(e)=>handleSubmit(e)} type="sumbit">Update</Button>
            </form>
        </div>

    )
}


export default Edit;