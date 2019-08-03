import React from 'react';

const Header = (props) => {
  console.log(props);
  
  const { t } = props;

  return (
    <div className="col-12 d-flex flex-row justify-content-between align-items-center">
      <img className="img-fluid py-3" src="https://dummyimage.com/100X30/000/fff" alt="Logo MWP"/>
      <div className="languageSelector">

        <a href="#nothing" onClick={() => props.changeLanguage('es')}>{t('ChangeLngEs')}</a> |
        <a href="#nothing" onClick={() => props.changeLanguage('en')}>{t('ChangeLngEn')}</a>
      </div>
    </div>
  )
}

export default Header;