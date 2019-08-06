import React from 'react';

const sliderComponent = (props) => {
    const { currentState, newData, t } = props;
    const { fetch_data } = newData;

    return (
        <div className={"col-sm-12 col-md-6 flexElementColumn login " + currentState.background}>
            <div className="header">
                {
                    currentState.background === 'Expert' ?
                        <h1> {t('LoginExpert')}</h1> :
                        <h1> {t('LoginSearchExpert')}</h1>
                }
                {
                    currentState.background === 'Expert' ?
                        <p>{t('ExpertDescription')}</p> :
                        <p>{t('SearchExpertDescription')}</p>
                }
                <ul className="selectorsContainer">
                    <li onClick={() => props.loginUserType('Expert')} className={"selector " + (currentState.background === 'Expert' ? 'active' : '')}></li>
                    <li onClick={() => props.loginUserType('SearchExpert')} className={"selector " + (currentState.background === 'SearchExpert' ? 'active' : '')}></li>
                </ul>
            </div>
            <div className="buttonsContainer w-100">
                <button onClick={() => { props.loginUserType('Expert'); props.showLoginModal('Expert') }} className={currentState.background === 'Expert' ? 'active' : ''}>{t('ExpertButton')}</button>
                <button onClick={() => { props.loginUserType('SearchExpert'); props.showLoginModal('SearchExpert') }} className={currentState.background === 'SearchExpert' ? 'active' : ''}>{t('FindExpertButton')}</button>
            </div>
            {fetch_data ? <p>{fetch_data.name}</p> : <p>Sin datos</p>}
            <p className="termsAnchor" onClick={() => props.showTerms()}>{t('Terms')}</p>
        </div>
    )
}

export default sliderComponent;