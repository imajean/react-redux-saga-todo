import React from 'react';

const renderFilter = (activeFilter) => (onSelect) => (filter) => (
  <div
    key={filter.id}
    onTouchTap={() => onSelect(filter)}
    style={{ border: activeFilter === filter.id ? '1px solid red' : '' }}
  >
    {filter.label}
  </div>
);

export default function TodoFilter({ filters, activeFilter, onSelect }) {
  const render = renderFilter(activeFilter)(onSelect);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        border: '1px solid #2196F3',
        width: 500,
        padding: 5,
      }}
    >
      {
        filters.map(render)
      }
    </div>
  );
}
