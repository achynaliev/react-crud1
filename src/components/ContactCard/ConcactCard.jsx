import React, { useState } from "react";
import "./card.css";
import ModalEdit from "../EditModal/EditModal";

const ConcactCard = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(props, "card");
  return (
    <div className="card" style={{ width: "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">{props.contact.firstname}</h5>
        <h5 className="card-title">{props.contact.lastname}</h5>
        <h5 className="card-title">{props.contact.phone}</h5>
        <h5 className="card-title">{props.contact.email}</h5>
      </div>
      <button data-bs-toggle="modal" onClick={handleShow}>
        Edit
      </button>
      <button
        onClick={() => props.deleteContact(props.index)}
        className="btn btn-danger deleteCard"
      >
        Delete
      </button>
      <ModalEdit
        handleClose={handleClose}
        show={show}
        contact={props.contact}
        updateContact={props.updateContact}
        index={props.index}
      />
    </div>
  );
};

export default ConcactCard;
