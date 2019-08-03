import React from 'react';

const DescriptionComponent = (props) => {
    const { t } = props;
    
    return (
        <div className="col-sm-12 col-md-6 descriptionLogin flexElementColumn align-items-end">
            <img src="https://dummyimage.com/250X100/000/fff" alt="main logo" />
            <h2>{t('Welcome')}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, incidunt ipsam amet eveniet aliquid illum ipsa molestiae eligendi suscipit aut!</p>
            <button onClick={()=>props.changeLanguage(props.lng === 'es' ? 'en' : 'es')}>Cambiar</button>
        </div>
    )
}

export default DescriptionComponent;