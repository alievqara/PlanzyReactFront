import React, { useMemo, useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FiArrowLeft, FiCalendar, FiPlus, FiSettings, FiSearch, FiStar, FiFilter
} from "react-icons/fi";
import "../../style/Topbar.css";



const PageNavigationBar = ({
  onSearch,
  onAddClick,
  onSettingsClick,
  onDateApply,
  onFavoriteSelect,
  onFiltersApply, // <- yeni
  favorites = ["Отчёт «Июль»", "Список клиентов", "Быстрые фильтры"],
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showCalendar, setShowCalendar] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showFilters, setShowFilters] = useState(false); // <- yeni
  const [searchValue, setSearchValue] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Filters state (UI)
  const [fltStatus, setFltStatus] = useState("all");
  const [fltCategory, setFltCategory] = useState("all");
  const [fltSort, setFltSort] = useState("newest");

  const calendarRef = useRef(null);
  const favRef = useRef(null);
  const filtersRef = useRef(null);


  useEffect(() => {
    const handler = (e) => {
      if (calendarRef.current && !calendarRef.current.contains(e.target)) setShowCalendar(false);
      if (favRef.current && !favRef.current.contains(e.target)) setShowFavorites(false);
      if (filtersRef.current && !filtersRef.current.contains(e.target)) setShowFilters(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const isServicesPage = location.pathname.includes("/services");

  const handleSearch = (e) => {
    const v = e.target.value;
    setSearchValue(v);
    onSearch?.(v);
  };

  const applyDateRange = () => {
    onDateApply?.({ from: dateFrom, to: dateTo });
    setShowCalendar(false);
  };

  const clearDateRange = () => {
    setDateFrom("");
    setDateTo("");
  };

  const applyFilters = () => {
    onFiltersApply?.({
      status: fltStatus,
      category: fltCategory,
      sort: fltSort,
    });
    setShowFilters(false);
  };

  const resetFilters = () => {
    setFltStatus("all");
    setFltCategory("all");
    setFltSort("newest");
  };

  return (
    <div className="page-navigation-bar">
      {/* SOL */}
      <div className="pnb-left">
        <button className="pnb-icon-btn" onClick={() => navigate(-1)} title="Назад">
          <FiArrowLeft />
          <span className="btn-label">Назад</span>
        </button>
      </div>

      {/* ORTA */}
      <div className="pnb-center">
        <div className="pnb-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Поиск…"
            value={searchValue}
            onChange={handleSearch}
          />
        </div>
      </div>

      {/* SAĞ */}
      <div className="pnb-right">
        {/* Takvim / tarih range */}
        <div className="pnb-calendar" ref={calendarRef}>
          <button
            className="pnb-icon-btn"
            onClick={() => setShowCalendar((s) => !s)}
            title="Выбрать период"
          >
            <FiCalendar />
            <span className="pnb-date-label">
              {dateFrom && dateTo ? `${dateFrom} — ${dateTo}` : new Date().toLocaleDateString("ru-RU")}
            </span>
          </button>

          {showCalendar && (
            <div className="pnb-calendar-pop">
              <div className="pnb-date-grid">
                <label>
                  <span>С:</span>
                  <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)} />
                </label>
                <label>
                  <span>По:</span>
                  <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)} />
                </label>
              </div>
              <div className="pnb-date-actions">
                <button className="pnb-btn-secondary" onClick={clearDateRange}>
                  Очистить
                </button>
                <button className="pnb-btn-primary" onClick={applyDateRange}>
                  Применить
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Favoriler */}
        <div className="pnb-favorites" ref={favRef}>
          <button
            className="pnb-icon-btn"
            onClick={() => setShowFavorites((s) => !s)}
            title="Избранное"
          >
            <FiStar />
            <span className="pnb-fav-label">Избранное</span>
          </button>

          {showFavorites && (
            <div className="pnb-fav-pop">
              {favorites.length === 0 ? (
                <div className="pnb-fav-empty">Пусто</div>
              ) : (
                favorites.map((f, i) => (
                  <button key={i} className="pnb-fav-item" onClick={() => { onFavoriteSelect?.(f); setShowFavorites(false); }}>
                    <FiStar /> {f}
                  </button>
                ))
              )}
            </div>
          )}
        </div>

        {/* Фильтры (dropdown) */}
        <div className="pnb-filters" ref={filtersRef}>
          <button
            className="pnb-icon-btn"
            onClick={() => setShowFilters((s) => !s)}
            title="Фильтры"
          >
            <FiFilter />
            <span className="pnb-filter-label">Фильтры</span>
          </button>

          {showFilters && (
            <div className="pnb-filters-pop">
              <div className="pnb-filters-section">
                <div className="pnb-filters-title">Статус</div>
                <div className="pnb-filters-row">
                  <label><input type="radio" name="status" value="all" checked={fltStatus==="all"} onChange={(e)=>setFltStatus(e.target.value)} /> Все</label>
                  <label><input type="radio" name="status" value="active" checked={fltStatus==="active"} onChange={(e)=>setFltStatus(e.target.value)} /> Активные</label>
                  <label><input type="radio" name="status" value="archived" checked={fltStatus==="archived"} onChange={(e)=>setFltStatus(e.target.value)} /> Архив</label>
                </div>
              </div>

              <div className="pnb-filters-section">
                <div className="pnb-filters-title">Категория</div>
                <select className="pnb-select" value={fltCategory} onChange={(e)=>setFltCategory(e.target.value)}>
                  <option value="all">Все</option>
                  <option value="hair">Парикмахер</option>
                  <option value="nails">Ногти</option>
                  <option value="massage">Массаж</option>
                  <option value="it">IT / разработка</option>
                </select>
              </div>

              <div className="pnb-filters-section">
                <div className="pnb-filters-title">Сортировка</div>
                <select className="pnb-select" value={fltSort} onChange={(e)=>setFltSort(e.target.value)}>
                  <option value="newest">Сначала новые</option>
                  <option value="oldest">Сначала старые</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
              </div>

              <div className="pnb-filters-actions">
                <button className="pnb-btn-secondary" onClick={resetFilters}>Сбросить</button>
                <button className="pnb-btn-primary" onClick={applyFilters}>Применить</button>
              </div>
            </div>
          )}
        </div>

        {/* Yeni Ekle */}
        <button
          className="pnb-add-btn"
          onClick={onAddClick}
          title={isServicesPage ? "Добавить услугу" : "Добавить"}
        >
          <FiPlus />
          <span>{isServicesPage ? "Добавить услугу" : "Добавить"}</span>
        </button>

        {/* Sayfa ayarları */}
        <button className="pnb-icon-btn" onClick={onSettingsClick} title="Настройки страницы">
          <FiSettings />
        </button>
      </div>
    </div>
  );
};

export default PageNavigationBar;
