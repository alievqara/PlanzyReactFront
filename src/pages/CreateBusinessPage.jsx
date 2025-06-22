import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Business.css";

const CreateBusinessPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [categories, setCategories] = useState([]);
  const [message, setMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // 🧠 Kategorileri API'den al
  useEffect(() => {
    fetch("https://localhost:7264/api/business/category/list")
      .then((res) => {
        if (!res.ok) throw new Error("Ошибка при загрузке категорий");
        return res.json();
      })
      .then((data) => {
        setCategories(data);
        if (data.length > 0) setCategory(data[0].key); // Otomatik ilk kategoriyi seç
      })
      .catch(() => setMessage("❌ Не удалось загрузить категории."));
  }, []);

  // 🏭 İşyeri oluştur
  const handleCreate = async (e) => {
    e.preventDefault();
    setMessage(null);

    if (!name || !description || !category) {
      setMessage("⚠️ Пожалуйста, заполните все поля.");
      return;
    }

    const token = localStorage.getItem("token");
    if (!token) {
      setMessage("🔒 Требуется авторизация.");
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("https://localhost:7264/api/business/work/new", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
        name,
        description,
        categoryKey: category,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "❌ Ошибка при создании бизнеса.");
      } else {
        navigate("/dashboard"); // başarıyla yönlendirme
      }
    } catch (error) {
      setMessage("🌐 Сервер недоступен.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="business-container">
      <div className="business-box">
        <h2>Создание бизнеса</h2>
        <form onSubmit={handleCreate}>
          <input
            type="text"
            placeholder="Название бизнеса"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            rows={4}
            placeholder="Описание"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          >
            <option value="">Выберите категорию</option>
            {categories.map((cat) => (
              <option key={cat.key} value={cat.key}>
                {cat.icon} {cat.name}
              </option>
            ))}
          </select>

          <button type="submit" disabled={isLoading}>
            {isLoading ? "Создание..." : "Создать бизнес"}
          </button>

          {message && <p className="error">{message}</p>}
        </form>
      </div>
    </div>
  );
};

export default CreateBusinessPage;
