import React from 'react';

const Main = () => {
  const listArticles = [
    { id: 1, name: 'Як дістатися' },
    { id: 2, name: 'Придбати авіаквітки' },
    { id: 3, name: 'Парковка' },
    { id: 4, name: 'Express Line' },
    { id: 5, name: 'Priority Line' },
    { id: 6, name: 'Послуги IEV' },
    { id: 7, name: 'Тестування на Covid-19' },
    { id: 8, name: 'Авіакомпанії та напрямки' },
    { id: 9, name: 'VIP-термінал' },
    { id: 10, name: 'MASTERCARD FAST LINE' },
    { id: 11, name: 'авіадовідка' },
    { id: 12, name: 'Як дістатися' },
  ];

  return (
    <main>
      <article>
        {listArticles.map(({ id, name }) => (
          <div key={id}>{name}</div>
        ))}
      </article>
    </main>
  );
};

export default Main;
