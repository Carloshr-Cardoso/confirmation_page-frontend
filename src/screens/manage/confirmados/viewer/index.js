import React, {useState} from 'react';
import { connect } from 'react-redux';
import Layout from '../../../layouts/manage';
import { Link } from 'react-router-dom';

//Video em 22:23

const Viewer = (props) =>{
  const { account, confirmado, getConfirmados } = props;
  let firstName = '';
  let lastName = '';
  
  if(account){
    const name = account.name.split(" ");
    firstName = name[0];
    lastName = name[1];
  }


  const [inputFields, setInputField] = useState([{firstName, lastName}])

  const removeInputField = (index) =>{
    const button = document.getElementById("addButton");
    button.classList.remove("btn-danger");
    button.classList.add("btn-warning")
    button.disabled = false;
    const fields = [...inputFields];
    fields.splice(index, 1);
    setInputField(fields);
    
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    // inputFields.map((inputField) =>(
    //   //console.log(`Acompanhante => ${inputField.firstName} ${inputField.lastName}`)
    //   createConfirmado({name: `${inputField.firstName} ${inputField.lastName}`})
    // ))
  }

  return (
    <Layout>
        <div className="w-50 mx-auto">
          <form onSubmit={handleSubmit}>
            
          
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
                    readOnly={true}
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
                    readOnly={true}
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

const mapStateToProps = (state) =>{
  return {account: state.account.account, confirmado: state.confirmado.confirmado}
}
export default connect(mapStateToProps)(Viewer)
