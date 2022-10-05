import React from 'react';

const Header = () => {
  const headerList = [
    { id: 1, name: 'Пасажирам' },
    { id: 2, name: 'Послуги IEV' },
    { id: 3, name: 'VIP' },
    { id: 4, name: 'Партнерам' },
    { id: 5, name: 'Пресцентр' },
  ];
  return (
    <header>
      <ul>
        {headerList.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
