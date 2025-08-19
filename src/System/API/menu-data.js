// menu-data.js
import {
  FiSettings, FiUsers, FiCalendar, FiBriefcase, FiPackage, FiShoppingCart,
  FiClipboard, FiPieChart, FiBarChart2, FiTrendingUp, FiLayers, FiDatabase, FiCpu,
  FiLifeBuoy, FiMessageSquare, FiClock, FiFileText, FiMapPin, FiCreditCard,
  FiLock, FiGlobe
} from "react-icons/fi";

const menu = [
  // ==========================
  // === Business Owner Panel ===
  // ==========================

  // === Компания ===
  {
    key: "company",
    title: "Компания",
    icon: FiBriefcase,
    children: [
      {
        title: "Общая информация",
        icon: FiFileText,
        path: "/dashboard/company?tab=general",
        children: [
          { title: "Редактировать данные", path: "/dashboard/company/general/edit" },
          { title: "Юридическая информация", path: "/dashboard/company/general/legal" },
          {
            title: "Брендинг",
            path: "/dashboard/company/general/branding",
            children: [
              { title: "Цветовая схема", path: "/dashboard/company/general/branding/colors" },
              { title: "Логотип", path: "/dashboard/company/general/branding/logo" },
              { title: "Шрифты", path: "/dashboard/company/general/branding/fonts" }
            ]
          }
        ]
      },
      {
        title: "Субдомен",
        icon: FiBriefcase,
        path: "/dashboard/company?tab=subdomain",
        children: [
          { title: "Изменить субдомен", path: "/dashboard/company/subdomain/edit" },
          { title: "SSL / HTTPS", path: "/dashboard/company/subdomain/ssl" }
        ]
      },
      {
        title: "График работы",
        icon: FiClock,
        path: "/dashboard/company?tab=workhours",
        children: [
          { title: "Общие часы работы", path: "/dashboard/company/workhours/general" },
          { title: "Индивидуальные по филиалам", path: "/dashboard/company/workhours/branches" },
          { title: "Перерывы", path: "/dashboard/company/workhours/breaks" }
        ]
      },
      {
        title: "Праздники",
        icon: FiCalendar,
        path: "/dashboard/company?tab=holidays",
        children: [
          { title: "Национальные праздники", path: "/dashboard/company/holidays/national" },
          { title: "Специальные выходные", path: "/dashboard/company/holidays/custom" }
        ]
      },
      {
        title: "Локация",
        icon: FiMapPin,
        path: "/dashboard/company?tab=location",
        children: [
          { title: "Адреса филиалов", path: "/dashboard/company/location/branches" },
          { title: "Карта", path: "/dashboard/company/location/map" }
        ]
      },
      {
        title: "Оплата",
        icon: FiCreditCard,
        path: "/dashboard/company?tab=payments",
        children: [
          { title: "Способы оплаты", path: "/dashboard/company/payments/methods" },
          { title: "Онлайн-платежи", path: "/dashboard/company/payments/online" },
          {
            title: "Настройки платежей",
            path: "/dashboard/company/payments/settings",
            children: [
              { title: "Интеграция с банком", path: "/dashboard/company/payments/settings/bank" },
              { title: "Интеграция с эквайрингом", path: "/dashboard/company/payments/settings/acquiring" }
            ]
          }
        ]
      },
      {
        title: "Реквизиты",
        icon: FiFileText,
        path: "/dashboard/company?tab=billing",
        children: [
          { title: "Банковские реквизиты", path: "/dashboard/company/billing/bank" },
          { title: "Юридические реквизиты", path: "/dashboard/company/billing/legal" },
          { title: "Фискальные данные", path: "/dashboard/company/billing/fiscal" }
        ]
      },
      {
        title: "Контакты",
        icon: FiMessageSquare,
        path: "/dashboard/company?tab=contacts",
        children: [
          { title: "Телефон", path: "/dashboard/company/contacts/phone" },
          { title: "WhatsApp", path: "/dashboard/company/contacts/whatsapp" },
          { title: "Email", path: "/dashboard/company/contacts/email" }
        ]
      },
      {
        title: "Шаблоны сообщений",
        icon: FiMessageSquare,
        path: "/dashboard/company?tab=templates",
        children: [
          { title: "SMS", path: "/dashboard/company/templates/sms" },
          { title: "Email", path: "/dashboard/company/templates/email" },
          { title: "Push", path: "/dashboard/company/templates/push" }
        ]
      }
    ]
  },

  // === Услуги ===
  {
    key: "services",
    title: "Услуги",
    icon: FiPackage,
    children: [
      {
        title: "Все услуги",
        icon: FiPackage,
        path: "/dashboard/services?tab=all",
        children: [
          { title: "Добавить услугу", path: "/dashboard/services/all/add" },
          { title: "Редактировать услугу", path: "/dashboard/services/all/edit" },
          { title: "Архивировать услугу", path: "/dashboard/services/all/archive" }
        ]
      },
      {
        title: "Категории",
        icon: FiLayers,
        path: "/dashboard/services?tab=categories",
        children: [
          { title: "Добавить категорию", path: "/dashboard/services/categories/add" },
          { title: "Редактировать категорию", path: "/dashboard/services/categories/edit" },
          { title: "Удалить категорию", path: "/dashboard/services/categories/delete" }
        ]
      },
      {
        title: "Пакеты / абонементы",
        icon: FiLayers,
        path: "/dashboard/services?tab=packages",
        children: [
          { title: "Создать пакет", path: "/dashboard/services/packages/add" },
          { title: "Редактировать пакет", path: "/dashboard/services/packages/edit" },
          { title: "Удалить пакет", path: "/dashboard/services/packages/delete" }
        ]
      },
      {
        title: "Удалённые услуги",
        icon: FiPackage,
        path: "/dashboard/services?tab=deleted",
        children: [
          { title: "Восстановить услугу", path: "/dashboard/services/deleted/restore" },
          { title: "Полное удаление", path: "/dashboard/services/deleted/permanent" }
        ]
      }
    ]
  },

  // === Товары ===
  {
    key: "products",
    title: "Товары",
    icon: FiShoppingCart,
    children: [
      {
        title: "Все товары",
        icon: FiShoppingCart,
        path: "/dashboard/products?tab=all",
        children: [
          { title: "Добавить товар", path: "/dashboard/products/all/add" },
          { title: "Редактировать товар", path: "/dashboard/products/all/edit" },
          { title: "Удалить товар", path: "/dashboard/products/all/delete" }
        ]
      },
      {
        title: "Категории товаров",
        icon: FiLayers,
        path: "/dashboard/products?tab=categories",
        children: [
          { title: "Добавить категорию", path: "/dashboard/products/categories/add" },
          { title: "Редактировать категорию", path: "/dashboard/products/categories/edit" },
          { title: "Удалить категорию", path: "/dashboard/products/categories/delete" }
        ]
      },
      {
        title: "Склад / Запасы",
        icon: FiDatabase,
        path: "/dashboard/products?tab=inventory",
        children: [
          { title: "Приёмка товара", path: "/dashboard/products/inventory/receive" },
          { title: "Перемещение между филиалами", path: "/dashboard/products/inventory/transfer" },
          { title: "Возврат поставщику", path: "/dashboard/products/inventory/return" },
          { title: "Инвентаризация", path: "/dashboard/products/inventory/audit" },
          { title: "Списание / брак", path: "/dashboard/products/inventory/write-off" }
        ]
      }
    ]
  },

  // === Клиенты ===
  {
    key: "clients",
    title: "Клиенты",
    icon: FiUsers,
    children: [
      {
        title: "База клиентов",
        icon: FiUsers,
        path: "/dashboard/clients?tab=base",
        children: [
          { title: "Добавить клиента", path: "/dashboard/clients/base/add" },
          { title: "Редактировать клиента", path: "/dashboard/clients/base/edit" },
          { title: "Удалить клиента", path: "/dashboard/clients/base/delete" }
        ]
      },
      {
        title: "История посещений",
        icon: FiClipboard,
        path: "/dashboard/clients?tab=history",
        children: [
          { title: "Поиск по имени", path: "/dashboard/clients/history/search" },
          { title: "Фильтр по услуге", path: "/dashboard/clients/history/filter" }
        ]
      },
      {
        title: "Комментарии и заметки",
        icon: FiMessageSquare,
        path: "/dashboard/clients?tab=notes",
        children: [
          { title: "Добавить заметку", path: "/dashboard/clients/notes/add" },
          { title: "Редактировать заметку", path: "/dashboard/clients/notes/edit" },
          { title: "Удалить заметку", path: "/dashboard/clients/notes/delete" }
        ]
      },
      {
        title: "Теги и статусы",
        icon: FiLayers,
        path: "/dashboard/clients?tab=tags",
        children: [
          { title: "Добавить тег", path: "/dashboard/clients/tags/add" },
          { title: "Редактировать тег", path: "/dashboard/clients/tags/edit" },
          { title: "Удалить тег", path: "/dashboard/clients/tags/delete" }
        ]
      }
    ]
  },

  // === Финансы ===
  {
    key: "finance",
    title: "Финансы",
    icon: FiPieChart,
    children: [
      {
        title: "Доходы",
        icon: FiPieChart,
        path: "/dashboard/finance?tab=income",
        children: [
          { title: "Все доходы", path: "/dashboard/finance/income/all" },
          { title: "Добавить доход", path: "/dashboard/finance/income/add" },
          { title: "Отчёт по доходам", path: "/dashboard/finance/income/report" }
        ]
      },
      {
        title: "Расходы",
        icon: FiPieChart,
        path: "/dashboard/finance?tab=expenses",
        children: [
          { title: "Все расходы", path: "/dashboard/finance/expenses/all" },
          { title: "Добавить расход", path: "/dashboard/finance/expenses/add" },
          { title: "Отчёт по расходам", path: "/dashboard/finance/expenses/report" }
        ]
      },
      { title: "Методы оплаты", icon: FiCreditCard, path: "/dashboard/finance?tab=payment-methods" },
      { title: "Онлайн-платежи", icon: FiCreditCard, path: "/dashboard/finance?tab=online-payments" },
      {
        title: "Отчёты",
        icon: FiBarChart2,
        path: "/dashboard/finance?tab=reports",
        children: [
          { title: "По периодам", path: "/dashboard/finance/reports/period" },
          { title: "По сотрудникам", path: "/dashboard/finance/reports/employees" },
          { title: "По услугам/товарам", path: "/dashboard/finance/reports/items" }
        ]
      },
      { title: "Налоги и чеки", icon: FiFileText, path: "/dashboard/finance?tab=taxes" }
    ]
  },

  // === Маркетинг ===
  {
    key: "marketing",
    title: "Маркетинг",
    icon: FiTrendingUp,
    children: [
      { title: "Купоны и акции", icon: FiLayers, path: "/dashboard/marketing?tab=coupons" },
      {
        title: "Рассылки",
        icon: FiMessageSquare,
        path: "/dashboard/marketing?tab=campaigns",
        children: [
          { title: "SMS", path: "/dashboard/marketing/campaigns/sms" },
          { title: "Email", path: "/dashboard/marketing/campaigns/email" },
          { title: "Push", path: "/dashboard/marketing/campaigns/push" }
        ]
      },
      { title: "Реферальная система", icon: FiUsers, path: "/dashboard/marketing?tab=referrals" },
      { title: "Программа лояльности", icon: FiLayers, path: "/dashboard/marketing?tab=loyalty" },
      { title: "AI-рекомендации", icon: FiCpu, path: "/dashboard/marketing?tab=ai-recommendations" },
      { title: "Редактор баннеров", icon: FiPackage, path: "/dashboard/marketing?tab=banner-editor" }
    ]
  },

  // === Продажи ===
  {
    key: "sales",
    title: "Продажи",
    icon: FiShoppingCart,
    children: [
      { title: "POS-система", icon: FiPackage, path: "/dashboard/sales/pos" },
      {
        title: "QR-продажи",
        icon: FiPackage,
        path: "/dashboard/sales/qr",
        children: [
          { title: "Меню по QR", path: "/dashboard/sales/qr/menu" },
          { title: "Быстрый заказ", path: "/dashboard/sales/qr/quick" }
        ]
      }
    ]
  },

  // === AI Центр ===
  {
    key: "ai",
    title: "AI Центр",
    icon: FiCpu,
    children: [
      { title: "Анализ клиентов", icon: FiCpu, path: "/dashboard/ai/analysis" },
      { title: "AI-рекомендации по расписанию", icon: FiCpu, path: "/dashboard/ai/schedule-recommendations" },
      { title: "Автоматизация задач", icon: FiCpu, path: "/dashboard/ai/automation" },
      { title: "Модели чат-ботов", icon: FiCpu, path: "/dashboard/ai/chatbots" }
    ]
  },

  // === HR ===
  {
    key: "hr",
    title: "HR",
    icon: FiUsers,
    children: [
      { title: "Сотрудники", icon: FiUsers, path: "/dashboard/hr?tab=staff" },
      { title: "Роли и доступы", icon: FiSettings, path: "/dashboard/hr?tab=roles" },
      { title: "Оценка KPI", icon: FiBarChart2, path: "/dashboard/hr?tab=kpi" },
      { title: "Задачи команды", icon: FiClipboard, path: "/dashboard/hr?tab=tasks" },
      { title: "Онбординг сотрудников", icon: FiUsers, path: "/dashboard/hr?tab=onboarding" }
    ]
  },

  // === Поддержка ===
  {
    key: "support",
    title: "Поддержка",
    icon: FiLifeBuoy,
    children: [
      { title: "Новые заявки", icon: FiLifeBuoy, path: "/dashboard/support?tab=new" },
      { title: "Активные обращения", icon: FiLifeBuoy, path: "/dashboard/support?tab=active" },
      { title: "История обращений", icon: FiLifeBuoy, path: "/dashboard/support?tab=history" },
      { title: "База знаний", icon: FiLifeBuoy, path: "/dashboard/support?tab=knowledge" },
      { title: "Шаблоны быстрых ответов", icon: FiLifeBuoy, path: "/dashboard/support?tab=templates" }
    ]
  },

  // === Система ===
  {
    key: "system",
    title: "Система",
    icon: FiSettings,
    children: [
      { title: "Обновления", icon: FiSettings, path: "/dashboard/system/updates" },
      { title: "Логи", icon: FiFileText, path: "/dashboard/system/logs" },
      { title: "Безопасность", icon: FiLock, path: "/dashboard/system/security" },
      { title: "Сброс доступа", icon: FiSettings, path: "/dashboard/system/reset-access" },
      { title: "Бэкапы", icon: FiSettings, path: "/dashboard/system/backups" }
    ]
  },

  // === Секторы ===
  {
    key: "sectors",
    title: "Секторы",
    icon: FiBriefcase,
    children: [
      { title: "Рестораны / Кафе / Бары", icon: FiBriefcase, path: "/dashboard/sectors/restaurant" },
      { title: "Салоны красоты / Барбершопы", icon: FiBriefcase, path: "/dashboard/sectors/beauty" },
      { title: "Медицинские услуги / Стоматология", icon: FiBriefcase, path: "/dashboard/sectors/medical" },
      { title: "Психология / Терапия", icon: FiBriefcase, path: "/dashboard/sectors/psychology" },
      { title: "Образование / Курсы", icon: FiBriefcase, path: "/dashboard/sectors/education" },
      { title: "Отели / Апартаменты", icon: FiBriefcase, path: "/dashboard/sectors/hotels" },
      { title: "Фриланс / Онлайн-консультации", icon: FiBriefcase, path: "/dashboard/sectors/freelance" }
    ]
  },

  // ==========================
  // === Planzy Admin Panel ===
  // ==========================
  {
    key: "admin",
    title: "Planzy Admin",
    icon: FiGlobe,
    children: [
      {
        title: "Компании",
        icon: FiBriefcase,
        path: "/dashboard/admin/companies",
        children: [
          { title: "Все компании", path: "/dashboard/admin/companies/all" },
          { title: "Новые заявки", path: "/dashboard/admin/companies/pending" },
          { title: "Заблокированные", path: "/dashboard/admin/companies/blocked" },
          {
            title: "Детали компании",
            path: "/dashboard/admin/companies/details",
            children: [
              { title: "Общая информация", path: "/dashboard/admin/companies/details/general" },
              { title: "Тариф и лимиты", path: "/dashboard/admin/companies/details/plans" },
              { title: "Владелец и доступы", path: "/dashboard/admin/companies/details/owner" },
              { title: "История платежей", path: "/dashboard/admin/companies/details/payments" }
            ]
          }
        ]
      },
      {
        title: "Категории бизнеса",
        icon: FiLayers,
        path: "/dashboard/admin/business-categories",
        children: [
          { title: "Все категории", path: "/dashboard/admin/business-categories/all" },
          { title: "Добавить категорию", path: "/dashboard/admin/business-categories/add" },
          { title: "Редактировать категорию", path: "/dashboard/admin/business-categories/edit" },
          { title: "Удалить категорию", path: "/dashboard/admin/business-categories/delete" }
        ]
      },
      {
        title: "Тарифы и пакеты",
        icon: FiPackage,
        path: "/dashboard/admin/plans",
        children: [
          { title: "Все тарифы", path: "/dashboard/admin/plans/all" },
          { title: "Добавить тариф", path: "/dashboard/admin/plans/add" },
          { title: "Редактировать тариф", path: "/dashboard/admin/plans/edit" },
          { title: "Удалить тариф", path: "/dashboard/admin/plans/delete" },
          {
            title: "Параметры тарифа",
            path: "/dashboard/admin/plans/parameters",
            children: [
              { title: "Лимиты", path: "/dashboard/admin/plans/parameters/limits" },
              { title: "Цена", path: "/dashboard/admin/plans/parameters/pricing" },
              { title: "Срок действия", path: "/dashboard/admin/plans/parameters/duration" }
            ]
          }
        ]
      },
      {
        title: "Пользователи системы",
        icon: FiUsers,
        path: "/dashboard/admin/system-users",
        children: [
          { title: "Все пользователи", path: "/dashboard/admin/system-users/all" },
          { title: "Добавить пользователя", path: "/dashboard/admin/system-users/add" },
          { title: "Редактировать пользователя", path: "/dashboard/admin/system-users/edit" },
          { title: "Удалить пользователя", path: "/dashboard/admin/system-users/delete" },
          {
            title: "Роли и права доступа",
            path: "/dashboard/admin/system-users/roles",
            children: [
              { title: "Все роли", path: "/dashboard/admin/system-users/roles/all" },
              { title: "Добавить роль", path: "/dashboard/admin/system-users/roles/add" },
              { title: "Редактировать роль", path: "/dashboard/admin/system-users/roles/edit" }
            ]
          }
        ]
      },
      {
        title: "Платежи и подписки",
        icon: FiCreditCard,
        path: "/dashboard/admin/payments",
        children: [
          { title: "Все платежи", path: "/dashboard/admin/payments/all" },
          { title: "Активные подписки", path: "/dashboard/admin/payments/subscriptions" },
          { title: "Просроченные платежи", path: "/dashboard/admin/payments/overdue" },
          { title: "Выставить счёт", path: "/dashboard/admin/payments/invoice" }
        ]
      },
      {
        title: "Контент и глобальные настройки",
        icon: FiSettings,
        path: "/dashboard/admin/global-settings",
        children: [
          { title: "Локализация", path: "/dashboard/admin/global-settings/localization" },
          { title: "Шаблоны писем", path: "/dashboard/admin/global-settings/email-templates" },
          { title: "Общие уведомления", path: "/dashboard/admin/global-settings/notifications" },
          { title: "Баннеры и промо", path: "/dashboard/admin/global-settings/banners" }
        ]
      },
      {
        title: "Модерация",
        icon: FiClipboard,
        path: "/dashboard/admin/moderation",
        children: [
          { title: "Карточки компаний", path: "/dashboard/admin/moderation/company-cards" },
          { title: "Отзывы", path: "/dashboard/admin/moderation/reviews" },
          { title: "Изображения", path: "/dashboard/admin/moderation/images" },
          { title: "Логи модераторов", path: "/dashboard/admin/moderation/logs" }
        ]
      },
      {
        title: "Системные настройки",
        icon: FiSettings,
        path: "/dashboard/admin/system-settings",
        children: [
          { title: "API ключи", path: "/dashboard/admin/system-settings/api-keys" },
          { title: "Интеграции", path: "/dashboard/admin/system-settings/integrations" },
          { title: "Мониторинг", path: "/dashboard/admin/system-settings/monitoring" },
          { title: "Бэкапы и восстановление", path: "/dashboard/admin/system-settings/backups" }
        ]
      }
    ]
  }
];

export default menu;
