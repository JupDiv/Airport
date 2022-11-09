import React from 'react';
import './SearchFlight.scss';

const Form = () => (
  <section className="main-search">
    <div className="main-search__container">
      <div className="main-search__active-block">
        <h2 className="main-search__title">Пошук рейсів</h2>
        <div className="main-search__search-line-container">
          <i className="fa-solid fa-magnifying-glass main-search__search-icon"></i>
          <form className="main-search__search-input" action="">
            <input
              className="main-search__input-element"
              type="text"
              placeholder="Номер рейсу або місто"
            />
            <button className="main-search__input-button" type="submit">
              Знайти
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default Form;
