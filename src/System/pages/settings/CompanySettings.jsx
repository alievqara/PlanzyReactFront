import React, { useState, useEffect } from "react";
import TabNavigation from "../../components/settings/TabNavigation";
import TabGeneralInfo from "../../components/settings/TabGeneralInfo";
import TabSubdomain from "../../components/settings/TabSubdomain";
import TabServices from "../../components/settings/TabServices";
import TabSchedule from "../../components/settings/TabSchedule";
import TabHolidays from "../../components/settings/TabHolidays";
import TabLocation from "../../components/settings/TabLocation";
import NoCompanyState from "../../components/settings/NoCompanyState";
import LoadingScreen from "../../components/common/LoadingScreen";

import {
  getMyCompany,
  createCompany,
  updateCompany,
  deleteCompany,
} from "../../API/companyApi";

const tabs = [
  { key: "general", label: "📝 Общая информация" },
  { key: "subdomain", label: "🌐 Субдомен" },
  { key: "services", label: "🛠️ Услуги" },
  { key: "schedule", label: "📆 График работы" },
  { key: "holidays", label: "🎉 Праздники" },
  { key: "location", label: "📍 Локация" },
];

export default function CompanySettings() {
  const [company, setCompany] = useState(null);
  const [activeTab, setActiveTab] = useState("general");
  const [loading, setLoading] = useState(true);

  // 📌 Загрузка информации о компании
  const loadCompany = async () => {
    setLoading(true);
    try {
      const data = await getMyCompany();
      setCompany(data);
    } catch (err) {
      console.error("Не удалось получить информацию о компании", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadCompany();
  }, []);

  // 📌 Создание компании
  const handleCreateCompany = async (data) => {
    try {
      const newCompany = await createCompany(data);
      setCompany(newCompany);
    } catch (err) {
      console.error(err);
      alert("❌ Не удалось создать компанию");
    }
  };

  // 📌 Обновление компании
  const handleUpdateCompany = async (data) => {
    try {
      const updated = await updateCompany(data);
      setCompany(updated);
    } catch (err) {
      console.error(err);
      alert("❌ Не удалось обновить данные компании");
    }
  };

  // 📌 Удаление компании
  const handleDeleteCompany = async () => {
    if (!window.confirm("❗ Вы уверены, что хотите удалить компанию?")) return;
    try {
      await deleteCompany();
      setCompany(null);
    } catch (err) {
      console.error(err);
      alert("❌ Не удалось удалить компанию");
    }
  };

  // 📌 Экран загрузки
  if (loading) return <LoadingScreen text="Загрузка данных компании..." />;

  // 📌 Если компании нет
  if (!company) {
    return <NoCompanyState onCreate={handleCreateCompany} />;
  }

  // 📌 Если компания есть
  return (
    <div className="company-settings">
      <TabNavigation tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="tab-content">
        {activeTab === "general" && (
          <TabGeneralInfo company={company} onUpdate={handleUpdateCompany} />
        )}
        {activeTab === "subdomain" && (
          <TabSubdomain company={company} onUpdate={handleUpdateCompany} />
        )}
        {activeTab === "services" && (
          <TabServices company={company} onUpdate={handleUpdateCompany} />
        )}
        {activeTab === "schedule" && (
          <TabSchedule company={company} onUpdate={handleUpdateCompany} />
        )}
        {activeTab === "holidays" && (
          <TabHolidays company={company} onUpdate={handleUpdateCompany} />
        )}
        {activeTab === "location" && (
          <TabLocation company={company} onUpdate={handleUpdateCompany} />
        )}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button className="delete-button" onClick={handleDeleteCompany}>
          🗑 Удалить компанию
        </button>
      </div>
    </div>
  );
}
