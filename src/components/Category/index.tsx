import React, { useState } from 'react';
import { MarkupSlides, PetProjectsSlides } from '../../constants/slider';
import Slider from '../Slider';

import './style.scss';

interface Props {
    title: string;
    categoryClassName: string;
}

const Category: React.FC<Props> = ({ title, categoryClassName }) => {
    const [dropwonClassName, setDropwonClassName] =
        useState<string>(`${categoryClassName}--closed `);
    const [hoverClassName, setHoverClassName] = useState<string>('');

    const defClassName = 'category ';
    const finalClassName = defClassName + dropwonClassName + hoverClassName;
    const slidesInfo = title === 'Markup' ? MarkupSlides : PetProjectsSlides;

    const checkShouldBeHandled = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const allowedClasses = ['category', 'category__title'];
        return target.className.split(' ')
            .some(className => allowedClasses.includes(className));
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const shouldBeHandled = checkShouldBeHandled(event);
        if (!shouldBeHandled) return;
        setDropwonClassName(prevClass => {
            let newClassName = categoryClassName;
            newClassName += prevClass.includes('--closed') ? '--open ' : '--closed ';
            return newClassName;
        });
        setTimeout(() => {
            window.scroll({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth'
            });
        }, 1000);
    };
    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        const shouldBeHandled = checkShouldBeHandled(event);
        if (shouldBeHandled) setHoverClassName('category--hovered ');
        else setHoverClassName('')
    };
    const handleMouseLeave = () => setHoverClassName('');

    return (
        <section
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            className={finalClassName}>
            <h3 className='category__title'>{title}</h3>
            <Slider slidesInfo={slidesInfo}/>
        </section>
    );
};

export default Category;