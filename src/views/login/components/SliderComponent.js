import React, { Component } from 'react';

class sliderComponent extends Component {
    render() {
        const { props } = this;
        const { currentState } = props;
        return (
            <div className={"col-sm-12 col-md-6 flexElementColumn login " + currentState.background}>
                <div className="header">
                    <h1>
                        {
                            currentState.background === 'Expert' ?
                            'Be an Expert' :
                            'Find an Expert'
                        }
                    </h1>
                    <p>
                        
                    {
                            currentState.background === 'Expert' ?
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur odit molestiae quae. Illum, unde maiores.' :
                            'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, at?'
                        }
                    </p>
                    <ul className="selectorsContainer">
                        <li onClick={() => props.loginExpert('Expert')} className={"selector " + (currentState.background === 'Expert' ? 'active' : '')}></li>
                        <li onClick={() => props.loginExpert('SearchExpert')} className={"selector " + (currentState.background === 'SearchExpert' ? 'active' : '')}></li>
                    </ul>
                </div>
                <div className="buttonsContainer w-100">
                    <button onClick={() => props.loginExpert('Expert')} className={currentState.background === 'Expert' ? 'active' : ''}>I Can Be An Expert</button>
                    <button onClick={() => props.loginSearchExpert('SearchExpert')} className={currentState.background === 'SearchExpert' ? 'active' : ''}>I`m looking For An Expert</button>
                </div>
            </div>
        );
    }
}

export default sliderComponent;