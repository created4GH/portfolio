import React, { useEffect, useRef, useState } from 'react';

import Slider from '../Slider';

import { MarkupSlides, PetProjectsSlides } from '../../constants/slider';

import './style.scss';

interface Props {
    title: string;
    categoryClassName: string;
}

const Category: React.FC<Props> = ({ title, categoryClassName }) => {
    const [dropwonClassName, setDropwonClassName] =
        useState<string>(`${categoryClassName}--closed `);
    const [hoverClassName, setHoverClassName] = useState<string>('');
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const [isCategoryOpened, setIsCategoryOpened] = useState<boolean>(false);
    const catergoryRef = useRef<HTMLElement>(null);
    const finalClassName = 'category ' + dropwonClassName + hoverClassName;
    const slidesInfo = title === 'Markup' ? MarkupSlides : PetProjectsSlides;

    const checkShouldBeHandled = (event: React.MouseEvent<HTMLElement>) => {
        const target = event.target as HTMLElement;
        const allowedClasses = ['category', 'category__title'];
        return target.className?.split(' ')
            .some(className => allowedClasses.includes(className));
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        const shouldBeHandled = checkShouldBeHandled(event);
        if (!shouldBeHandled) return;
        setDropwonClassName(prevClass => {
            let newClassName = categoryClassName;
            const isCategoryOpen = prevClass.includes('--closed');
            setIsCategoryOpened(isCategoryOpen);
            newClassName += isCategoryOpen ? '--open ' : '--closed ';
            return newClassName;
        });
    };
    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        const shouldBeHandled = checkShouldBeHandled(event);
        if (shouldBeHandled) setHoverClassName('category--hovered ');
        else setHoverClassName('')
    };
    const handleMouseLeave = () => setHoverClassName('');
    const handleScroll = () => {
        if (timerId) {
            clearTimeout(timerId);
            setTimerId(null);
        }
    };

    useEffect(() => {
        document.addEventListener('scroll', handleScroll);
        return () => document.removeEventListener('scroll', handleScroll);
    }, [timerId]);

    useEffect(() => {
        if (isCategoryOpened && catergoryRef.current) {
            const timerId = setTimeout(() => {
                const { y, height } = catergoryRef.current!.getBoundingClientRect();
                window.scroll({
                    top: y + height,
                    left: 0,
                    behavior: 'smooth'
                });
            }, 1100);
            setTimerId(timerId);
        }
    }, [isCategoryOpened]);

    return (
        <section
            ref={catergoryRef}
            onClick={handleClick}
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            className={finalClassName}>
            <h3 className='category__title'>{title}</h3>
            <Slider slidesInfo={slidesInfo} />
        </section>
    );
};

export default Category;