import React from 'react';
import ReactDom from 'react-dom';

import Icon from '../../parts/Icon/index.jsx';
import './index.styl';

import '../../../vendor/lostgrid/GridResponsive/index.styl';


const renderCols = function () {
    let svgClasses = ['business-compass','business-connection','business-email','business-group','business-handshake','business-invoice','business-like','business-placeholder','business-printer','business-smartphone','construction-drill-tip','construction-home','construction-meter','construction-window','custom-basket-2','custom-basket-3','custom-basket-4','custom-basket-5','custom-button-home','custom-logo-1','custom-logo-2','custom-section-delimeter','simple-arrow-right','simple-calendar','simple-cart','simple-checkmark','simple-chevron-left','simple-close','simple-edit','simple-file','simple-info','simple-location','simple-lock','simple-mail','simple-menu','simple-message','simple-plus','simple-reply','simple-search','simple-star','simple-user','social-instagram-mh','social-telegram-mh','social-twitter-mh','social-vk-mh','social-youtube-mh','tools-air-compressor','tools-clamp','tools-hammer-tool','tools-hard-hat','tools-jigsaw','tools-screws','unique-quote'];

    let cols = svgClasses.map(function(svgClass, index) {

        return (
            <div key={index} className="col">
                <Icon name={svgClass} iconGroup={svgClass.slice( 0, svgClass.indexOf('-'))} />
            </div>
        );
    });

    return cols;
};

const  Index = () => (
    <div className="pageIndex">
        <main className="mainIndex">
            <div className="grid">
                <div className="col">
                    <Icon name="custom-basket-3" iconGroup="custom" iconStyles="color-1" />
                </div>
                <div className="col">
                    <Icon name="custom-basket-3" iconGroup="custom" iconStyles="color-2" />
                </div>
                <div className="col">
                    <Icon name="custom-basket-3" iconGroup="custom" iconStyles="gradient-1" />
                </div>
                <div className="col">
                    <Icon name="custom-basket-3" iconGroup="custom header" iconStyles="gradient-1" />
                </div>
            </div>
            <div className="grid">
                {renderCols()}
            </div>
        </main>
    </div>
);


ReactDom.render(
        <Index />,
    document.getElementById('root')
);