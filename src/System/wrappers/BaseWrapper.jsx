import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Topbar from "../components/Topbar";
import PageNavigationBar from "../components/settings/PageNavigationBar";

import { getDashboardSummary, getDashboardFavorites } from "../API/dashboardApi";
// Eğer şirket uçları da burada kullanılacaksa:
// import { getMyCompany } from "../../api/companyApi";

import "../style/Base.css";

const BaseWrapper = ({
  title,
  subtitle,
  showBack = false,
  backTo = -1,
  breadcrumbs = [],
  actions = null,
  loading: externalLoading = false,
  empty: externalEmpty = false,
}) => {
  const navigate = useNavigate();

  // ----- STATE -----
  const [loading, setLoading] = useState(true);
  const [empty, setEmpty] = useState(false);
  const [error, setError] = useState(null);

  // Dashboard veri havuzu
  const [summary, setSummary] = useState(null);

  // Arama, filtre, tarih, favoriler
  const [searchQuery, setSearchQuery] = useState("");
  const [dateRange, setDateRange] = useState({ from: null, to: null });
  const [activeFilters, setActiveFilters] = useState([
    { key: "status", label: "Статус: Активный", value: "active" },
    { key: "category", label: "Категория: Все", value: "all" },
  ]);
  const [favorites, setFavorites] = useState([]);         // [{ key, name }, ...]
  const [selectedFavorite, setSelectedFavorite] = useState(null);

  // Abort & debounce
  const abortRef = useRef(null);
  const searchDebounceRef = useRef(null);

  const startAbortable = () => {
    if (abortRef.current) abortRef.current.abort();
    abortRef.current = new AbortController();
    return abortRef.current.signal;
  };

  // ----- API CALLS -----
  const fetchFavorites = useCallback(async () => {
    try {
      const data = await getDashboardFavorites();
      setFavorites(Array.isArray(data) ? data : []);
    } catch (e) {
      console.error("favorites error:", e);
      // Favoriler kritik değil; sessiz geçebiliriz
    }
  }, []);

  const fetchSummary = useCallback(
    async (opts = {}) => {
      const signal = startAbortable();
      setLoading(true);
      setError(null);

      try {
        const params = {
          q: searchQuery || undefined,
          from: dateRange?.from || undefined,
          to: dateRange?.to || undefined,
          status: activeFilters.find((f) => f.key === "status")?.value,
          category: activeFilters.find((f) => f.key === "category")?.value,
          favorite: selectedFavorite || undefined,
          ...opts,
        };

        // `request` wrapper'ında signal birleşimi basit tutuldu; burada sadece çağırıyoruz.
        const data = await getDashboardSummary(params, { signal });
        setSummary(data);
        const isEmpty =
          !data ||
          (Array.isArray(data?.items) && data.items.length === 0) ||
          (Array.isArray(data?.metrics) && data.metrics.length === 0);
        setEmpty(isEmpty);
      } catch (e) {
        if (e.name !== "AbortError") {
          console.error("summary error:", e);
          setError(e);
        }
      } finally {
        setLoading(false);
      }
    },
    [searchQuery, dateRange, activeFilters, selectedFavorite]
  );

  // İlk yükleme
  useEffect(() => {
    (async () => {
      await Promise.all([fetchFavorites(), fetchSummary()]);
      // Örn: şirketi yoksa yönlendirmek istiyorsan:
      // const company = await getMyCompany();
      // if (!company) navigate("/company/onboarding");
    })();

    return () => {
      if (abortRef.current) abortRef.current.abort();
      if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Filtre/arama/tarih/favori değiştiğinde summary çek
  useEffect(() => {
    fetchSummary();
  }, [fetchSummary]);

  // ----- HANDLERS (PageNavigationBar) -----
  const handleSearch = useCallback((q) => {
    if (searchDebounceRef.current) clearTimeout(searchDebounceRef.current);
    searchDebounceRef.current = setTimeout(() => {
      setSearchQuery(q);
    }, 300);
  }, []);

  const handleAddClick = useCallback(() => {
    // örn. yeni kayıt oluşturma akışı
    console.log("add clicked");
    // navigate("/appointments/new");
  }, []);

  const handleSettingsClick = useCallback(() => {
    navigate("/company/settings");
  }, [navigate]);

  const handleDateApply = useCallback((range) => {
    setDateRange(range); // { from: 'YYYY-MM-DD', to: 'YYYY-MM-DD' }
  }, []);

  const handleFavoriteSelect = useCallback((favKey) => {
    setSelectedFavorite(favKey || null);
  }, []);

  const handleClearBadge = useCallback((key) => {
    setActiveFilters((prev) => prev.filter((f) => f.key !== key));
  }, []);

  // UI için badge listesi
  const filterBadges = useMemo(
    () =>
      activeFilters.map((f) => ({
        label:
          f.key === "status"
            ? `Статус: ${f.value === "active" ? "Активный" : f.value}`
            : f.key === "category"
            ? `Категория: ${f.value === "all" ? "Все" : f.value}`
            : `${f.key}: ${f.value}`,
        onClear: () => handleClearBadge(f.key),
      })),
    [activeFilters, handleClearBadge]
  );

  // Çocuk sayfalara aktarılacak context
  const outletContext = useMemo(
    () => ({
      summary,
      refresh: fetchSummary,
      searchQuery,
      dateRange,
      activeFilters,
      setActiveFilters,
      favorites,
      selectedFavorite,
      setSelectedFavorite,
      setDateRange,
      setSearchQuery,
      loading,
      error,
    }),
    [
      summary,
      fetchSummary,
      searchQuery,
      dateRange,
      activeFilters,
      favorites,
      selectedFavorite,
      loading,
      error,
    ]
  );

  // Dışarıdan prop ile gelen loading/empty öncelikli
  const effectiveLoading = externalLoading || loading;
  const effectiveEmpty = externalEmpty || empty;

  return (
    <div className="base-wrapper">
      <Topbar />

      <PageNavigationBar
        onSearch={handleSearch}
        onAddClick={handleAddClick}
        onSettingsClick={handleSettingsClick}
        onDateApply={handleDateApply}
        onFavoriteSelect={handleFavoriteSelect}
        favorites={favorites}
        activeFavorite={selectedFavorite}
        filterBadges={filterBadges}
      />

      <div className="base-content">
        {effectiveLoading ? (
          <div className="base-loading">Загрузка...</div>
        ) : error ? (
          <div className="base-empty">Ошибка загрузки. Повторите попытку.</div>
        ) : effectiveEmpty ? (
          <div className="base-empty">Нет данных для отображения</div>
        ) : (
          <Outlet context={outletContext} />
        )}
      </div>
    </div>
  );
};

export default BaseWrapper;
