import React, { useState } from 'react';
import Header from '../header/Header';
import SearchForm from '../searchFlight/SearchFlight';
import ResultSection from '../ResultSection/ResultSection';
import './SearchPage.scss';

const ResultFieldFlight = () => {
  return (
    <>
      {/* <Header /> */}
      <div>
        <SearchForm />
        <ResultSection />
      </div>
    </>
  );
};

export default ResultFieldFlight;
