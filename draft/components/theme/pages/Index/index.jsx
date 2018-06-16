import React from 'react';
import ReactDom from 'react-dom';

import Header from '../../parts/Header/index.jsx';
import Footer from '../../parts/Footer/index.jsx';

import './index.styl';
import '../../../vendor/materialize1/Carousel/index.css';



const  Index = () => (
    <div className="pageIndex  sf-wr-page">
        <Header />
            <div>
                <div className="grid">
                    <div className="col">col1</div>
                    <div className="col">col1</div>
                    <div className="col">col1</div>
                </div>
                <div className="test"></div>
            </div>
        <Footer />
    </div>
);


ReactDom.render(
        <Index />,
    document.getElementById('root')
);