import React, { useEffect, useMemo, useRef, useState } from 'react';

import { SlideInfoType } from '../../interfaces/common';

import arrowIcon from '../../assets/img/icons/arrow.svg';
import './style.scss';

type MyMouseEvent = React.MouseEvent<HTMLElement>;
interface IsInAllowedBorders {
    isInAllowedRightBorders: boolean;
    isInAllowedLeftBorders: boolean;
}
interface Props {
    slidesInfo: SlideInfoType[];
}

const Slider: React.FC<Props> = ({ slidesInfo }) => {
    const [selectedSlideIndex, setSelectedSlideIndex] =
        useState<number>(Math.round(slidesInfo.length / 2));
    const [hoveredSlidingAreaClassName, setHoveredSlidingAreaClassName] = useState<string>('');
    const [isInAllowedBorders, setIsInAllowedBorders] = useState<IsInAllowedBorders | null>(null);
    const selectedSlide = useRef<HTMLDivElement>(null);
    const isSlideToLeftDisabled = selectedSlideIndex === 0;
    const isSlideToRightDisabled = selectedSlideIndex === (slidesInfo.length - 1);
    const { title, techStack } = slidesInfo[selectedSlideIndex];
    const formattedTechStack = techStack.join(', ');

    const checkIsInAllowedBorders = (event: MyMouseEvent) => {
        let margin = 0;
        const windowWidth = window.innerWidth;
        if (windowWidth > 1000) margin = 40;
        else if (windowWidth > 600) margin = 20;
        const { clientX, currentTarget } = event;
        const { width, x } = currentTarget.getBoundingClientRect();
        const leftEndPoint = x + margin;
        const rightEndPoint = x + width - margin;
        const selectedSlideRect = selectedSlide.current!.getBoundingClientRect();
        const selectedSlideWidth = selectedSlideRect.width;
        const selectedSlideLeftEndPoint = selectedSlideRect.x - margin;
        const selectedSlideRightEndPoint = selectedSlideRect.x + selectedSlideWidth + margin;
        const isInAllowedRightBorders = (clientX > selectedSlideRightEndPoint)
            && (clientX < rightEndPoint) && !isSlideToRightDisabled;
        const isInAllowedLeftBorders = (clientX < selectedSlideLeftEndPoint)
            && (clientX > leftEndPoint) && !isSlideToLeftDisabled;
        return { isInAllowedRightBorders, isInAllowedLeftBorders };
    }
    const slideToLeft = () => setSelectedSlideIndex(selectedSlideIndex - 1);
    const slideToRight = () => setSelectedSlideIndex(selectedSlideIndex + 1);
    const handleSlideAreaClick = (event: MyMouseEvent) => {
        const { isInAllowedRightBorders, isInAllowedLeftBorders } = checkIsInAllowedBorders(event);
        if (isInAllowedRightBorders) slideToRight();
        else if (isInAllowedLeftBorders) slideToLeft();
        setIsInAllowedBorders({ isInAllowedRightBorders, isInAllowedLeftBorders });
    }
    const handleSlidingAreaMouseMove = (event: MyMouseEvent) => {
        const { isInAllowedRightBorders, isInAllowedLeftBorders }
            = checkIsInAllowedBorders(event);
        if (isInAllowedRightBorders) {
            setHoveredSlidingAreaClassName('slider__sliding-area--hovered-right');
        }
        else if (isInAllowedLeftBorders) {
            setHoveredSlidingAreaClassName('slider__sliding-area--hovered-left');
        }
        else setHoveredSlidingAreaClassName('');
    }
    const handleOnMouseLeave = () => setHoveredSlidingAreaClassName('');

    const slides = useMemo(() => {
        return slidesInfo.map((item, index) => {
            let className = 'slider__slide slide--';
            const odds = selectedSlideIndex - index;
            if (!odds) {
                className += 'selected';
                return <div ref={selectedSlide} className={className} key={item.title}>
                    <a href={item.url} target="_blank" rel='noreferrer'>
                        <img src={item.imgPath} alt='slider img' className="slider__slide-img" />
                    </a>
                </div>
            }
            else if (odds === 1) className += 'left';
            else if (odds === -1) className += 'right';
            else if (odds > 1) className += 'left-hidden';
            else if (odds < -1) className += 'right-hidden';
            return <div key={item.title} className={className}>
                <img src={item.imgPath} alt='slider img' className="slider__slide-img" />
            </div>
        })
    }, [selectedSlideIndex]);

    const sliderDots = useMemo(() => {
        return slidesInfo.map((item, index) => {
            let className = 'slider__dot';
            const odds = selectedSlideIndex - index;
            if (!odds) className += ' slider__dot--selected';
            return <span key={item.title} className={className}></span>
        })
    }, [selectedSlideIndex]);

    useEffect(() => {
        if (isInAllowedBorders) {
            const { isInAllowedRightBorders, isInAllowedLeftBorders } = isInAllowedBorders!;
            if ((isInAllowedRightBorders && isSlideToRightDisabled)
                || (isInAllowedLeftBorders && isSlideToLeftDisabled)) {
                setHoveredSlidingAreaClassName('');
            }
        }
    }, [isInAllowedBorders]);

    return (
        <div className='slider'>
            <p className='slider__title'>
                <a target='_blank' href='http://google.com' className='slider__title-link'>
                    {title}
                </a>
            </p>
            <div
                onClick={handleSlideAreaClick}
                onMouseLeave={handleOnMouseLeave}
                onMouseMove={handleSlidingAreaMouseMove}
                className={'slider__sliding-area ' + hoveredSlidingAreaClassName}
            >
                <div className="slider__slides-container">
                    {slides}
                    <button
                        className='slider__btn slider__btn-to-left'
                        onClick={slideToLeft}
                        disabled={isSlideToLeftDisabled}>
                        <img src={arrowIcon} />
                    </button>
                    <button
                        className='slider__btn slider__btn-to-right'
                        onClick={slideToRight}
                        disabled={isSlideToRightDisabled}>
                        <img src={arrowIcon} />
                    </button>
                </div>
                <div className="slider__dots-container">
                    {sliderDots}
                </div>
            </div>
            <p className="slider__tech-stack">{formattedTechStack}</p>
        </div>
    );
};

export default Slider;