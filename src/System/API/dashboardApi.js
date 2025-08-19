// src/System/API/dashboardApi.js
import { request } from "./apiClient";

const BASE = "/dashboard";

export function getDashboardSummary(params) {
  return request(`${BASE}/summary`, { method: "GET", params });
}

export function getDashboardFavorites() {
  return request(`${BASE}/favorites`, { method: "GET" });
}
