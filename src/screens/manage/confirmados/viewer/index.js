import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../../layouts/manage'

const Viewer = () =>{

  const [inputFields, setInputField] = useState([
    {firstName: 'Carlos', lastName: 'Cardoso'},
  ])


  const handleChangeInput = (index, event) =>{
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values)
  }

  return (
    <Layout>
        <div className="w-50 mx-auto">
          <form>
            
            { inputFields.map((inputField, index) =>(
              <div className="row mb-2" key={index}>
                {/* Primeiro Nome */}
                <div className="col-md-5">
                  <input
                    name="firstName" 
                    type="text" 
                    className="form-control text-center" 
                    value={inputField.firstName}
                    placeholder={inputField.firstName || 'First Name'} 
                    onChange={event => handleChangeInput(index, event)}
                    readOnly="readOnly"
                  ></input>
                </div>
                
                {/* Segundo Nome */}
                <div className="col-md-5">
                  <input 
                    name="lastName"
                    type="text" 
                    className="form-control text-center" 
                    value={inputField.lastName}
                    placeholder={inputField.lastName || 'Last Name'} 
                    onChange={event => handleChangeInput(index, event)}
                    readOnly="readOnly"
                  ></input>
                </div>
                
              </div>
            )) }

            {/* Submit Button */}
            <div>
              <button type="button" className="btn btn-success btn-round"> <Link to="/manage/confirmados/create"> Editar </Link> </button>
            </div>

          </form>
        </div>
    </Layout>
  );
}

export default Viewer
