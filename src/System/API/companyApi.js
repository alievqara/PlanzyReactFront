// /api/companyApi.js
import { request } from "../shared/apiClient";

const BASE = "/business/company";

export function createCompany(data) {
  const form = new FormData();
  form.append("name", data.name);
  form.append("description", data.description ?? "");
  form.append("categoryKey", data.categoryKey);
  if (data.logo) form.append("logo", data.logo);

  // ⚠️ isJson: false => Content-Type otomatik boundary ile gider
  return request(`${BASE}/create`, {
    method: "POST",
    isJson: false,
    body: form,
  });
}

export function getMyCompany() {
  return request(`${BASE}/my`, {
    method: "GET",
    returnNullOn404: true, // 404 => null (yoksa şirket)
  });
}

export function updateCompany(partial) {
  // Sunucuda PATCH JSON destekli
  return request(`${BASE}/my`, {
    method: "PATCH",
    isJson: true,
    body: partial,
  });
}

export function deleteCompany() {
  return request(`${BASE}/my`, {
    method: "DELETE",
  });
}
