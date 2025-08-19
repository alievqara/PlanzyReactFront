import React, { useState, useEffect } from "react";
import { createCompany } from "../../API/companyApi";

export default function NoCompanyState({ onCreate }) {
  const [form, setForm] = useState({
    name: "",
    description: "",
    categoryKey: "",
    logo: null
  });
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch("https://localhost:7264/api/business/category/list", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Не удалось загрузить категории", err);
      } finally {
        setLoadingCategories(false);
      }
    }
    loadCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "logo") {
      setForm({ ...form, logo: files[0] });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim()) return alert("Введите название компании");
    if (!form.categoryKey) return alert("Выберите категорию");

    setLoading(true);
    try {
      const newCompany = await createCompany(form);
      onCreate(newCompany);
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loadingCategories) return <p className="loading-text">Загрузка категорий...</p>;

  return (
    <div className="no-company-container">
      <h2>У вас пока нет компании</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Название компании"
          value={form.name}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Описание (необязательно)"
          value={form.description}
          onChange={handleChange}
        />
        <select
          name="categoryKey"
          value={form.categoryKey}
          onChange={handleChange}
          required
        >
          <option value="">Выберите категорию</option>
          {categories.map((cat) => (
            <option key={cat.code} value={cat.code}>
              {cat.icon} {cat.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          name="logo"
          accept="image/*"
          onChange={handleChange}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Создание..." : "Создать компанию"}
        </button>
      </form>
    </div>
  );
}
