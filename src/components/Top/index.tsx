import ShortInfo from '../Summary';
import LittleAbout from '../LittleAbout';

import './style.scss';

const Top = () => {
    return (
        <section className="top">
            <ShortInfo/>
            <LittleAbout/>
        </section>
    );
};

export default Top;