import React from "react";
import "../../style/Modal.css";

const DeleteConfirmModal = ({ onConfirm, onCancel }) => (
  <div className="modal-backdrop">
    <div className="modal-content">
      <h3>Вы уверены, что хотите удалить услугу навсегда?</h3>
      <div className="form-actions">
        <button className="save-button" onClick={onConfirm}>Да, удалить</button>
        <button className="check-button" onClick={onCancel}>Отмена</button>
      </div>
    </div>
  </div>
);

export default DeleteConfirmModal;
