import React from 'react';

const Header = (props) => {
  console.log(props);
  
  const { t } = props;

  return (
    <div className="col-12 d-flex flex-row justify-content-between align-items-center">
      <img className="img-fluid py-3" src="https://dummyimage.com/100X30/000/fff" alt="Logo MWP"/>
      <div className="languageSelector">
        <span onClick={() => props.changeLanguage('es')}>{t('ChangeLngEs')}&nbsp;&nbsp;</span>|
        <span onClick={() => props.changeLanguage('en')}>&nbsp;&nbsp;{t('ChangeLngEn')}</span>
      </div>
    </div>
  )
}

export default Header;