import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createCompany } from "../../API/companyApi";
import "../../style/CompanySettings.css";

const CreateCompany = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    categoryId: "",
    logo: null,
  });
  const [categories, setCategories] = useState([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCategories() {
      try {
        const res = await fetch(
          "https://localhost:7264/api/business/category/list",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await res.json();
        setCategories(data);
      } catch (err) {
        console.error("Kategoriler alınamadı", err);
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
    if (!form.name.trim()) return alert("Lütfen şirket adını girin");
    if (!form.categoryId) return alert("Lütfen kategori seçin");

    setLoading(true);

    let logoUrl = null;
    if (form.logo) {
      const logoData = new FormData();
      logoData.append("file", form.logo);
      const uploadRes = await fetch("/api/upload/logo", {
        method: "POST",
        body: logoData,
      });
      const uploadJson = await uploadRes.json();
      logoUrl = uploadJson.url;
    }

    try {
      const newCompany = await createCompany({
        name: form.name,
        description: form.description,
        categoryId: form.categoryId,
        logoUrl: logoUrl,
      });
      navigate("/dashboard/company/settings");
    } catch (err) {
      alert("İşletme oluşturulamadı!");
    } finally {
      setLoading(false);
    }
  };

  if (loadingCategories) return <p>Kategoriler yükleniyor...</p>;

  return (
    <div className="company-settings">
      <h2>Yeni İşletme Oluştur</h2>
      <form className="tab-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>İşletme Adı</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="İşletme adını girin"
            required
          />
        </div>

        <div className="form-group">
          <label>Açıklama</label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="İşletmenizi kısaca tanıtın"
          />
        </div>

        <div className="form-group">
          <label>Kategori</label>
          <select
            name="categoryId"
            value={form.categoryId}
            onChange={handleChange}
            required
          >
            <option value="">Seçiniz</option>
            {categories.map((cat) => (
              <option key={cat.code} value={cat.code}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label>Logo</label>
          <input
            type="file"
            name="logo"
            accept="image/*"
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="save-button" disabled={loading}>
          {loading ? "Oluşturuluyor..." : "💾 Kaydet"}
        </button>
      </form>
    </div>
  );
};

export default CreateCompany;
