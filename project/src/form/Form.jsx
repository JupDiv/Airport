import React from 'react';
import './form.scss';

const Form = () => {
  return (
    <section className="main-search">
      <h2 className="main-search__title">Пошук рейсів</h2>
      <form className="main-search__input" action="">
        <input
          className="main-search__input-element"
          type="text"
          placeholder="Номер рейсу або місто"
        />
      </form>
      <div className="search_btn">
        <button className="search_btn__action_output">ВИЛІТ усі РЕЙСИ</button>
        <button className="search_btn__action_input">ПРИЛІТ усі РЕЙСИ</button>
      </div>
    </section>
  );
};

export default Form;
