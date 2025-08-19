import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiGrid, FiLogOut } from "react-icons/fi";
import menu from "../API/menu-data";
import "../style/Sidebar.css";
import { ReactComponent as LogoPlanzy } from "../../assets/LogoPlanzy.svg";
import { ReactComponent as LeftIcon } from "../../assets/left.svg";
import SidebarUserPanel from "./settings/SidebarUserPanel";

const COLLAPSE_KEY = "planzy.sidebar.collapsed";

const Sidebar = () => {
  const location = useLocation();

  // Mobil drawer & masaüstü collapse
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(COLLAPSE_KEY) || "false");
    } catch {
      return false;
    }
  });

  const [groups, setGroups] = useState({});

  const makeKey = useCallback((parentKey, item, idx) => {
    const base = `${parentKey}${item.title || "item"}-${idx}-${item.path || ""}`;
    return base.replace(/\s+/g, "-").toLowerCase();
  }, []);

  const currentPath = location.pathname + location.search;

  const isActive = useCallback(
    (path) => {
      if (!path) return false;
      return currentPath === path || currentPath.startsWith(path);
    },
    [currentPath]
  );

  const isParentActive = useCallback(
    (items = []) =>
      items.some(
        (item) =>
          (item.path && isActive(item.path)) ||
          (item.children && isParentActive(item.children))
      ),
    [isActive]
  );

  // Aktif route’a göre parent grupları otomatik aç
  useEffect(() => {
    const openGroups = {};
    const openMatchingParents = (items, parentKey = "") => {
      items.forEach((item, idx) => {
        const key = makeKey(parentKey, item, idx);
        if (isParentActive([item])) openGroups[key] = true;
        if (item.children) openMatchingParents(item.children, key);
      });
    };
    openMatchingParents(menu);
    setGroups((prev) => ({ ...prev, ...openGroups }));
  }, [location.pathname, location.search, makeKey, isParentActive]);

  // Ekran genişleyince mobil drawer’ı kapat
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Route değişince mobil drawer’ı kapat
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, location.search]);

  // Escape ile mobil drawer kapat
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const toggleGroup = (key) =>
    setGroups((prev) => ({ ...prev, [key]: !prev[key] }));

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  const toggleCollapse = () =>
    setIsCollapsed((prev) => {
      const next = !prev;
      try {
        localStorage.setItem(COLLAPSE_KEY, JSON.stringify(next));
      } catch {}
      return next;
    });

  const collapsedEffective = useMemo(
    () => (isOpen ? false : isCollapsed),
    [isOpen, isCollapsed]
  );

  const renderMenuItems = useCallback(
    (items, parentKey = "") =>
      items.map((item, idx) => {
        const key = makeKey(parentKey, item, idx);
        const hasChildren = Array.isArray(item.children) && item.children.length > 0;
        const open = !!groups[key];
        const active = isActive(item.path);
        const parentActive = hasChildren ? isParentActive(item.children) : false;

        return (
          <div
            key={key}
            className={`menu-item ${parentKey ? "child" : "root"} ${
              collapsedEffective ? "collapsed" : ""
            } ${open ? "open" : ""}`}
          >
            <div
              className={`menu-link ${active ? "active" : ""} ${
                parentActive ? "active-parent" : ""
              }`}
              onClick={() => {
                if (!hasChildren && item.path) setIsOpen(false);
              }}
              title={collapsedEffective ? item.title : undefined}
            >
              {item.icon && <item.icon className="menu-icon" aria-hidden="true" />}
              {item.path ? (
                <Link to={item.path} tabIndex={0}>
                  {!collapsedEffective && item.title}
                </Link>
              ) : (
                !collapsedEffective && <span>{item.title}</span>
              )}

              {hasChildren && !collapsedEffective && (
                <button
                  className="arrow"
                  aria-label={open ? "Свернуть" : "Развернуть"}
                  aria-expanded={open}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleGroup(key);
                  }}
                >
                  {open ? "▼" : "▶"}
                </button>
              )}
            </div>

            {hasChildren && open && (
              <div className="submenu" role="group" aria-label={item.title}>
                {renderMenuItems(item.children, key)}
              </div>
            )}
          </div>
        );
      }),
    [groups, collapsedEffective, isActive, isParentActive, makeKey]
  );

  const dashboardLinkActive = useMemo(() => isActive("/dashboard"), [isActive]);

  const renderLinks = useCallback(
    () => (
      <>
        <Link
          to="/dashboard"
          className={`menu-link ${dashboardLinkActive ? "active" : ""}`}
          title={collapsedEffective ? "Главная" : undefined}
        >
          <FiGrid className="menu-icon" aria-hidden="true" />
          {!collapsedEffective && <span>Главная</span>}
        </Link>
        {renderMenuItems(menu)}
      </>
    ),
    [dashboardLinkActive, collapsedEffective, renderMenuItems]
  );

  return (
    <>
      <div className="sidebar-mobile-toggle">
        <button
          className="hamburger-button"
          onClick={toggleDrawer}
          aria-label="Открыть меню"
          aria-expanded={isOpen}
        >
          <FiMenu />
        </button>
      </div>

      <div className={`sidebar-drawer ${isOpen ? "open" : ""}`} role="dialog" aria-modal="true">
        <div className="sidebar-header">
          <LogoPlanzy className="logo" aria-label="Planzy" />
          <button className="icon-button" onClick={toggleDrawer} aria-label="Закрыть меню">
            <FiX />
          </button>
        </div>

        <nav className="sidebar-menu" role="navigation" aria-label="Основное меню">
          {renderLinks()}
        </nav>

        <div className="drawer-user-panel">
          <SidebarUserPanel
            user={{
              fullName: "Barlas Planzy",
              username: "barlas.dev",
              avatarUrl: "/assets/avatar.jpg",
            }}
            company={{ name: "Planzy Yazılım" }}
            onLogout={() => console.log("Çıkış yapıldı")}
            isCollapsed={false}
          />
        </div>
      </div>

      <div
        className={`sidebar-overlay ${isOpen ? "show" : ""}`}
        onClick={toggleDrawer}
        aria-hidden={!isOpen}
      />

      <aside className={`sidebar desktop-only ${isCollapsed ? "collapsed" : ""}`} aria-label="Sidebar">
        <div className="sidebar-header">
          <LogoPlanzy className="logo" aria-label="Planzy" />
          {!isCollapsed && (
            <button className="collapse-toggle" onClick={toggleCollapse} aria-label="Свернуть боковую панель">
              <LeftIcon />
            </button>
          )}
        </div>

        <div className="sidebar-content">
          <nav className="sidebar-menu" role="navigation" aria-label="Основное меню">
            {renderLinks()}
          </nav>
        </div>

        <SidebarUserPanel
          user={{
            fullName: "Barlas Planzy",
            username: "barlas.dev",
            avatarUrl: "/assets/avatar.jpg",
          }}
          company={{ name: "Planzy Yazılım" }}
          onLogout={() => console.log("Çıkış yapıldı")}
          isCollapsed={isCollapsed}
        />

        {isCollapsed && (
          <div className="sidebar-expand-button">
            <button onClick={toggleCollapse} aria-label="Развернуть боковую панель">
              <LeftIcon />
            </button>
          </div>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
