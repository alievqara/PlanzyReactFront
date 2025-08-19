import React from "react";
import BaseWrapper from "../../wrappers/BaseWrapper";
import TabGeneralInfo from "./TabGeneralInfo";

const CompanyGeneralTab = ({ company, onEdit }) => {
  return (
    <BaseWrapper
      title="Общая информация"
      subtitle="Просмотр и редактирование базовых данных компании"
      showBack={false}
      breadcrumbs={[
        { label: "Dashboard", to: "/" },
        { label: "Компания", to: "/company" },
        { label: "Настройки", to: "/company/settings" },
        { label: "Общая информация" }
      ]}
    >
      <TabGeneralInfo company={company} onEdit={onEdit} />
    </BaseWrapper>
  );
};

export default CompanyGeneralTab;
