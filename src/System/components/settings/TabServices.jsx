import React, { useState } from "react";
import ServiceCard from "../cards/ServiceCard";
import ServiceModal from "../modals/ServiceModal";
import DeleteConfirmModal from "../modals/DeleteConfirmModal";

const TabServices = () => {
  const [services, setServices] = useState([
    { id: 1, name: "Массаж спины", duration: 30, price: 2000, description: "Расслабляющий массаж", active: true },
    { id: 2, name: "Педикюр", duration: 45, price: 1500, description: "", active: false },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editingService, setEditingService] = useState(null);
  const [showDeleted, setShowDeleted] = useState(false);
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const handleAddClick = () => {
    setEditingService(null);
    setModalOpen(true);
  };

  const handleSaveService = (newService) => {
    if (newService.id) {
      setServices((prev) =>
        prev.map((s) => (s.id === newService.id ? { ...s, ...newService } : s))
      );
    } else {
      const id = Math.max(0, ...services.map((s) => s.id)) + 1;
      setServices([...services, { ...newService, id, active: true }]);
    }
    setModalOpen(false);
  };

  const handleEdit = (service) => {
    setEditingService(service);
    setModalOpen(true);
  };

  const handleSoftDelete = (id) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, deleted: true } : s)));
  };

  const handleRestore = (id) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, deleted: false } : s)));
  };

  const handleHardDelete = () => {
    setServices((prev) => prev.filter((s) => s.id !== confirmDeleteId));
    setConfirmDeleteId(null);
  };

  const handleToggleActive = (id) => {
    setServices((prev) => prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s)));
  };

  return (
    <div className="tab-content">
      <div className="services-header">
        <h3>Услуги</h3>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <button className="add-service-button" onClick={handleAddClick}>➕ Добавить услугу</button>
          <button className="add-service-button" onClick={() => setShowDeleted(!showDeleted)}>
            {showDeleted ? "🔁 Активные" : "🗑️ Удалённые"}
          </button>
        </div>
      </div>

      <div className="services-list">
        {services
          .filter((s) => showDeleted ? s.deleted : !s.deleted)
          .map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onEdit={handleEdit}
              onSoftDelete={handleSoftDelete}
              onDelete={() => setConfirmDeleteId(service.id)}
              onRestore={handleRestore}
              onToggleActive={handleToggleActive}
              isDeleted={showDeleted}
            />
          ))}
      </div>

      {modalOpen && (
        <ServiceModal
          service={editingService}
          onClose={() => setModalOpen(false)}
          onSave={handleSaveService}
        />
      )}

      {confirmDeleteId && (
        <DeleteConfirmModal
          onConfirm={handleHardDelete}
          onCancel={() => setConfirmDeleteId(null)}
        />
      )}
    </div>
  );
};

export default TabServices;
