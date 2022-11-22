import React from 'react';

import './style.scss';
import ShortInfo from '../Summary';
import LittleAbout from '../LittleAbout';

const Top = () => {
    return (
        <section className="top">
            <ShortInfo/>
            <LittleAbout/>
        </section>
    );
};

export default Top;