import Category from '../Category';

import './style.scss';

const Portfolio = () => {
    return (
        <section className="portfolio">
            <h2 className='portfolio__title'>Portfolio</h2>
            <Category categoryClassName='category__markup' title='Markup' />
            <Category categoryClassName='category__pet-projects' title='Pet-projects' />
        </section>
    );
};

export default Portfolio;