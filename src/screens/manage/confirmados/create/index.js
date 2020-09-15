import React, {useState} from 'react';
import Layout from '../../../layouts/manage'

const Create = () =>{

  const [inputFields, setInputField] = useState([
    {firstName: 'Carlos', lastName: 'Cardoso'},
  ])

  const addInputField = () =>{
    const limit = 3;
    if (inputFields.length < limit){
      setInputField([...inputFields, {firstName: '', lastName: ''}]);
    }
    console.log("Adicionei Um")
    if (inputFields.length === limit){
      console.log("Limite Alcançado!")
      const button = document.getElementById("addButton");
      button.classList.remove("btn-warning");
      button.classList.add("btn-danger")
      button.disabled = true;
      //alert("Número de Convidados Excedido!");
    }
  }

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
    console.log("InputFields", inputFields)
  }

  const handleChangeInput = (index, event) =>{
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values)
    //console.log(index, event.target.name)
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
                    onChange={event => handleChangeInput(index, event)}
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
                  ></input>
                </div>
                
                {/* Botão de Remover Campo */}
                <div onClick={event => removeInputField(index)} className="btn btn-outline-danger btn-round btn-sm mt-0">
                  <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                    <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                  </svg>
                </div>
              </div>
            )) }

            {/* Botão de Adicionar Campo */}
            <div className="text-right">
              <button id="addButton" onClick={addInputField} type="button" className="btn btn-warning btn-round">Adicionar</button>
            </div>

             {/* Submit Button */}
            <div>
              <button onClick={handleSubmit} type="submit" className="btn btn-success btn-round">Salvar</button>
            </div>
          </form>
        </div>
    </Layout>
  );
}

export default Create