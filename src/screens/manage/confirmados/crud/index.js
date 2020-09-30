import React, {useState} from 'react';
import { connect } from 'react-redux';
import NavManage from '../../../../components/navbar/manage';
import AddModal from '../../../../components/modal/addModal';
import EditModal from '../../../../components/modal/editModal';
import DeleteModal from '../../../../components/modal/deleteModal';
import { createConfirmado } from '../../../../actions/confirmedActions';
import Footer from '../../../../components/footer';
import { Redirect } from 'react-router-dom';

const Crud = ({ account, createConfirmado, confirmados }) =>{
  const [inputFields, setInputField] = useState(confirmados)
  
  const [showAddModal, setShowAddModal] = useState(false);
  const closeAddModalHandler = () => setShowAddModal(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const closeEditeModalHandler = () => setShowEditModal(false);
  
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const closeDeleteModalHandler = () => setShowDeleteModal(false);
  
  const [idConfirmado, setIdConfirmado] = useState(-1);

  if (!account){
    return <Redirect to="/" />
  }
  if (!account.confirmado){
    return <Redirect to="/manage" />
  }
  
  const limit = account.invitations - 1;
  const addInputField = () =>{
    setShowAddModal(true);
    // if (inputFields.length < limit){
    //   setInputField([...inputFields, {name: ''}]);
    // }
    
    // if (inputFields.length === limit){
    //   alert("Número de Convidados Excedido!");
    // }
  }

  const removeInputField = (id) =>{
    setShowDeleteModal(true);
    setIdConfirmado(id);
    // const fields = [...inputFields];
    // fields.splice(index, 1);
    // setInputField(fields);
    
  }

  const editInputField = (id) =>{
    setIdConfirmado(id);
    setShowEditModal(true);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    inputFields.map((inputField) =>(
      //console.log(`Acompanhante => ${inputField.firstName} ${inputField.lastName}`)
      createConfirmado({name: `${inputField.firstName} ${inputField.lastName}`})
    ))
  }

  const handleChangeInput = (index, event) =>{
    const values = [...inputFields];
    values[index][event.target.name] = event.target.value;
    setInputField(values)
    //console.log(index, event.target.name)
  }

  const name = account.name.split(" ");
  const firstName = name[0];
  const lastName = name[1];

  return (
    <React.Fragment>
      {showAddModal ? 
        <div className="back-drop">
          <AddModal show={showAddModal} close={closeAddModalHandler} />
        </div> 
      : null}

      {showEditModal ? 
        <div className="back-drop">
          <EditModal id={idConfirmado} show={showEditModal} close={closeEditeModalHandler} />
        </div> 
      : null}
      
      {showDeleteModal ? 
        <div className="back-drop">
          <DeleteModal id={idConfirmado} show={showDeleteModal} close={closeDeleteModalHandler} />
        </div> 
      : null}

      <NavManage>
        <div className="list-names">
          <div className="row">
            <label>Nome</label>
          </div>

          <div className="row">
            <div className="col lg-10 teste">
              <input className="content-form-input" placeholder={account.name} readOnly={true}></input>
            </div>
          </div>

          { confirmados && confirmados.length ?
            inputFields.map((confirmado, index)=>{
              return(
                <div className="row" key={index}>
                  <div className="col lg-7 teste">
                    <input id={String(confirmado.id)} className="content-form-input" placeholder={confirmado.name} disabled={true}></input>
                  </div>
                  <div onClick={()=>editInputField(confirmado.id)} className="col lg-1">Edit</div>
                  <div onClick={()=>removeInputField(confirmado.id)} className="col lg-1">Delete</div>
                </div>
              )
            })
            : null
          }

          {inputFields.length<limit ?
            <div id="button-place">
              <button onClick={addInputField} type="button" className="btn-manage"> Adicionar Acompanhante </button>
            </div>
          : null
          }

        </div>
      </NavManage>
      <Footer/>
    </React.Fragment>
  );
}

const mapStateToProps = (state) =>{
  return {
    account: state.account.account,
    confirmado: state.confirmado.confirmado,
    confirmados: state.confirmado.confirmados}
}
export default connect(mapStateToProps, {createConfirmado})(Crud)




{/* <div className="w-50 mx-auto">
<form onSubmit={handleSubmit}>
  
<div className="row mb-2">

      <div className="col-md-5">
        <input
          name="firstName" 
          type="text" 
          className="form-control text-center" 
          value={firstName}
          placeholder={firstName || 'First Name'}
          readOnly="readOnly"
          // disabled="disabled"
        ></input>
      </div>
      

      <div className="col-md-5">
        <input 
          name="lastName"
          type="text" 
          className="form-control text-center" 
          value={lastName}
          placeholder={lastName || 'Last Name'}
          readOnly="readOnly"
          // disabled="disabled"
        ></input>
      </div>
    </div>

  { inputFields.map((inputField, index) =>(
    <div className="row mb-2" key={index}>
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
      

      <div onClick={event => removeInputField(index)} className="btn btn-outline-danger btn-round btn-sm mt-0">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
          <path fillRule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
        </svg>
      </div>
    </div>
  )) }


  ****Botão de Adicionar Campo****

  <div className="text-right">
    <button id="addButton" onClick={addInputField} type="button" className="btn btn-warning btn-round">Adicionar Acompanhante</button>
  </div>


  <div>
    <button onClick={handleSubmit} type="submit" className="btn btn-success btn-round">Salvar</button>
  </div>
</form>
</div> */}