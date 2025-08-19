// System/pages/Home.jsx
import React from "react";

const MiniSparkline = ({ data = [] }) => {
  if (!data.length) return null;
  const width = 140;
  const height = 40;
  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((v, i) => {
      const x = (i / (data.length - 1)) * width;
      const y =
        height - ((v - min) / (max - min || 1)) * (height - 4) - 2; // padding
      return `${x},${y}`;
    })
    .join(" ");

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline
        points={points}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        opacity="0.9"
      />
    </svg>
  );
};

const StatCard = ({ title, value, delta, data }) => (
  <div className="card stat-card">
    <div className="stat-head">
      <span className="stat-title">{title}</span>
      <span className={`stat-delta ${delta >= 0 ? "up" : "down"}`}>
        {delta >= 0 ? "▲" : "▼"} {Math.abs(delta)}%
      </span>
    </div>
    <div className="stat-body">
      <div className="stat-value">{value}</div>
      <MiniSparkline data={data} />
    </div>
  </div>
);

const TaskItem = ({ done, text }) => (
  <label className="task-item">
    <input type="checkbox" defaultChecked={done} />
    <span className="task-text">{text}</span>
  </label>
);

const Home = () => {
  return (
    <div className="home-grid">
      {/* Üst istatistikler */}
      <StatCard
        title="Новые бронирования"
        value="28"
        delta={+12}
        data={[3, 6, 4, 9, 8, 12, 10, 14, 15, 13, 16]}
      />
      <StatCard
        title="Выручка (₽)"
        value="124 300"
        delta={+7}
        data={[10, 12, 11, 13, 15, 14, 16, 18, 20, 19, 21]}
      />
      <StatCard
        title="Новые клиенты"
        value="9"
        delta={-3}
        data={[2, 2, 3, 1, 4, 3, 5, 4, 3, 2, 3]}
      />

      {/* Orta: Son rezervasyonlar (demo) */}
      <div className="card span-2">
        <div className="card-head">
          <h3>Последние записи</h3>
          <button className="btn ghost">Все записи</button>
        </div>
        <div className="list">
          {[
            { client: "Анна Петрова", service: "Маникюр", time: "Сегодня, 15:00" },
            { client: "Игорь С.", service: "Стрижка", time: "Сегодня, 16:30" },
            { client: "Мария К.", service: "Массаж", time: "Завтра, 10:00" },
          ].map((x, i) => (
            <div className="list-row" key={i}>
              <div className="list-col">
                <div className="list-title">{x.client}</div>
                <div className="list-sub">{x.service}</div>
              </div>
              <div className="list-time">{x.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Sağ: Görevler */}
      <div className="card">
        <div className="card-head">
          <h3>Мои задачи</h3>
          <button className="btn ghost">Все</button>
        </div>
        <div className="tasks">
          <TaskItem done text="Ответить новым клиентам" />
          <TaskItem done={false} text="Добавить услуги в прайс" />
          <TaskItem done={false} text="Заполнить график на неделю" />
        </div>
      </div>
    </div>
  );
};

export default Home;
