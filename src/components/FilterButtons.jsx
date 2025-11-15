function FilterButtons({ onFilterChange }) {
  return (
    <div>
      <button onClick={() => onFilterChange("todas")}>Todas</button>
      <button onClick={() => onFilterChange("concluidas")}>Concluídas</button>
      <button onClick={() => onFilterChange("pendentes")}>Pendentes</button>
    </div>
  );
}

export default FilterButtons;
