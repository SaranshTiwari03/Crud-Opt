import react,{useState} from 'react';
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Employees from './Employees';
import {v4 as uuid} from 'uuid';
import {Link,useNavigate}from 'react-router-dom'


function Add(){
        const [name,setName]=useState('');
        const [age,setAge]=useState('');

        let history=useNavigate();

        const handleSubmit =(e)=>{
            e.preventDefault();
            
            const ids=uuid();
            let uniqueId = ids.slice(0,8);

            let a=name, b=age;
        
            Employees.push({id:uniqueId,Name:a,Age:b});   

            history("/");
        }

    return(

        <div>
            <form className="d-gird gap-2"  style={{margin:"15rem"}}>
                <div className="mb-3 Form.Group " controlId="formName">
                    <input class="form-control" type="text" placeholder="Enter Name" required onChange={(e)=>setName(e.target.value)}/>

                        
                    
                </div>
                <div className="mb-3 Form.Group" controlId="formAge">
                    <input class="form-control" type="text" placeholder="Enter Age"  required onChange={(e)=>setAge(e.target.value)} />

                        
                    
                </div>
                <Button onClick={(e)=>handleSubmit(e)} type="sumbit">Submit</Button>
            </form>
        </div>

    )
}


export default Add;