import React from 'react';

const Form = () => {
  return (
    <div>
      <h2>Пошук рейсів</h2>
      <form action="">
        <input type="text" placeholder="Номер рейсу або місто" />
      </form>
      <div>
        <button>ВИЛІТ усі РЕЙСИ</button>
        <button>ПРИЛІТ усі РЕЙСИ</button>
      </div>
    </div>
  );
};

export default Form;
