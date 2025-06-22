import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const DashboardPage = () => {
  const [business, setBusiness] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBusiness = async () => {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("https://localhost:7264/api/business/work/my", {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) {
          throw new Error("İşletme bilgileri alınamadı.");
        }

        const data = await response.json();
        setBusiness(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchBusiness();
  }, []);

  if (loading) return <div className="dashboard-container">Yükleniyor...</div>;
  if (error) return <div className="dashboard-container">{error}</div>;

  return (
    <div className="dashboard-container">
      <h2>👋 Merhaba, {business.name}</h2>
      <p><strong>Açıklama:</strong> {business.description}</p>
      <p><strong>Kategori:</strong> {business.categoryKey}</p>

      <div className="dashboard-actions">
        <button className="dashboard-button" disabled>İşletmeni Düzenle</button>
        <button className="dashboard-button" disabled>Hizmetleri Yönet</button>
      </div>
    </div>
  );
};

export default DashboardPage;
