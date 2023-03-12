import {Form,  Modal } from "react-bootstrap"
import { useRef } from "react"
import { useBudgets } from "../contexts/BudgetsContext"


export default function  AddBudgetModal({show, handleClose}) {
    const nameRef = useRef()
    const maxRef = useRef()
    const {addBudget} = useBudgets()
    
    function handleSubmit(e) {
        e.preventDefault()
        addBudget(
        {
           name: nameRef.current.value,
           max: parseFloat(maxRef.current.value) 
        })
        handleClose()
    }
  return (
    
   <Modal   show={show} onHide={handleClose}>
   
    <Form className="mb-3" onSubmit={handleSubmit} >
      <Modal.Header closeButton>
      <Modal.Title >New Budget</Modal.Title>
      </Modal.Header>
      <Modal.Body  >
        <Form.Group  controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control className="mb-3 shadow-none" ref={nameRef} type="text" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="max">
            <Form.Label >Maximum Spending</Form.Label>
            <Form.Control  className="mb-3 shadow-none" ref={maxRef} type="number" required min={0} step={0.01} />
        </Form.Group>
        <div  className="d-flex justify-content-end">
            <button className="addbudget-exp-btn"  type="submit">Add</button>
        </div>
      </Modal.Body>
    </Form>
    
   </Modal>
  )
}
