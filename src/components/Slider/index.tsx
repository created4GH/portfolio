import React, { useEffect, useMemo, useRef, useState } from 'react';

import { SlideInfoType } from '../../interfaces/common';

import arrowIcon from '../../assets/img/icons/arrow.svg';
import sourceCodeIcon from '../../assets/img/icons/source-code.svg';
import './style.scss';

type MyMouseEvent = React.MouseEvent<HTMLElement>;
interface IsInAllowedBorders {
    isInAllowedRightBorders: boolean;
    isInAllowedLeftBorders: boolean;
}
interface PrevBtnsDisabledState {
    prevIsSlideToLeftDisabled: boolean;
    prevIsSlideToRightDisabled: boolean;
}
interface Props {
    slidesInfo: SlideInfoType[];
}

const Slider: React.FC<Props> = ({ slidesInfo }) => {
    const [selectedSlideIndex, setSelectedSlideIndex] =
        useState<number>(Math.round(slidesInfo.length / 2));
    const [hoveredSlidingAreaClassName, setHoveredSlidingAreaClassName] = useState<string>('');
    const [isInAllowedBorders, setIsInAllowedBorders] = useState<IsInAllowedBorders>({
        isInAllowedRightBorders: false,
        isInAllowedLeftBorders: false
    });
    const [isMouseOverButton, setIsMouseOverButton] = useState<boolean>(false);
    const [prevBtnsDisabledState, setPrevBtnsDisabledState] =
        useState<PrevBtnsDisabledState | null>(null)
    const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);
    const selectedSlide = useRef<HTMLDivElement>(null);
    const isSlideToLeftDisabled = selectedSlideIndex === 0;
    const isSlideToRightDisabled = selectedSlideIndex === (slidesInfo.length - 1);
    const { title, techStack, websiteUrl, sourceCodeUrl } = slidesInfo[selectedSlideIndex];
    const formattedTechStack = techStack.join(', ');

    const slideToLeft = () => setSelectedSlideIndex(selectedSlideIndex - 1);
    const slideToRight = () => setSelectedSlideIndex(selectedSlideIndex + 1);
    const checkIsInAllowedBorders = (event: MyMouseEvent) => {
        let margin = 20;
        const { clientX } = event;
        const selectedSlideRect = selectedSlide.current!.getBoundingClientRect();
        const selectedSlideWidth = selectedSlideRect.width;
        const selectedSlideLeftEndPoint = selectedSlideRect.x - margin;
        const selectedSlideRightEndPoint = selectedSlideRect.x + selectedSlideWidth + margin;
        const isInAllowedRightBorders = (clientX > selectedSlideRightEndPoint)
            && !isSlideToRightDisabled;
        const isInAllowedLeftBorders = (clientX < selectedSlideLeftEndPoint)
            && !isSlideToLeftDisabled;
        return { isInAllowedRightBorders, isInAllowedLeftBorders };
    }
    const handleSlidingAreaMouseMove = (event: MyMouseEvent) => {
        const callback = () => {
            if (isMouseOverButton) return;
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
        if (!timerId) {
            callback();
            const timerId = setTimeout(() => {
                setTimerId(null);
            }, 200);
            setTimerId(timerId);
        }
    }
    const handleSlidingAreaMouseLeave = () => setHoveredSlidingAreaClassName('');
    const handleSlideAreaClick = (event: MyMouseEvent) => {
        const { isInAllowedRightBorders, isInAllowedLeftBorders } = checkIsInAllowedBorders(event);
        setIsInAllowedBorders({ isInAllowedRightBorders, isInAllowedLeftBorders });
        if (isInAllowedRightBorders) slideToRight();
        else if (isInAllowedLeftBorders) slideToLeft();
        setPrevBtnsDisabledState({
            prevIsSlideToLeftDisabled: isSlideToLeftDisabled,
            prevIsSlideToRightDisabled: isSlideToRightDisabled
        });
    }
    const handleMouseEnterButton = () => {
        setIsMouseOverButton(true);
        setHoveredSlidingAreaClassName('');
    };
    const handleMouseLeaveButton = () => setIsMouseOverButton(false);
    const handleLeftBtnClick = () => {
        slideToLeft();
        setPrevBtnsDisabledState({
            prevIsSlideToLeftDisabled: isSlideToLeftDisabled,
            prevIsSlideToRightDisabled: isSlideToRightDisabled
        });
    };
    const handleRightBtnClick = () => {
        slideToRight();
        setPrevBtnsDisabledState({
            prevIsSlideToLeftDisabled: isSlideToLeftDisabled,
            prevIsSlideToRightDisabled: isSlideToRightDisabled
        });
    };

    const slides = useMemo(() => {
        return slidesInfo.map((item, index) => {
            let className = 'slider__slide slide--';
            const odds = selectedSlideIndex - index;
            if (!odds) {
                return (
                    <div ref={selectedSlide} className={className + 'selected'} key={item.title}
                    >
                        <a href={item.websiteUrl} target="_blank" rel='noreferrer'>
                            <img src={item.imgPath} alt='slider img' className="slider__slide-img" />
                        </a>
                    </div>
                )
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

    useEffect(() => {
        if (prevBtnsDisabledState) {
            const { prevIsSlideToLeftDisabled, prevIsSlideToRightDisabled } = prevBtnsDisabledState;
            if (prevIsSlideToLeftDisabled !== isSlideToLeftDisabled ||
                prevIsSlideToRightDisabled !== isSlideToRightDisabled) {
                setIsMouseOverButton(false);
            }
        }
    }, [prevBtnsDisabledState]);

    return (
        <div className='slider'>
            <p className='slider__title'>
                <a target='_blank' href={websiteUrl} className='slider__title-website-link'>
                    {title}
                </a>
                <a target='_blank' href={sourceCodeUrl} className='slider__title-source-code-link'>
                    <img src={sourceCodeIcon} alt="source code icon" />
                </a>
            </p>
            <div
                className={'slider__sliding-area ' + hoveredSlidingAreaClassName}
                onClick={handleSlideAreaClick}
                onMouseMove={handleSlidingAreaMouseMove}
                onMouseLeave={handleSlidingAreaMouseLeave}>
                <div className={"slider__slides-container "} >
                    {slides}
                    <button
                        className='slider__btn slider__btn-to-left'
                        onClick={handleLeftBtnClick}
                        onMouseEnter={handleMouseEnterButton}
                        onMouseLeave={handleMouseLeaveButton}
                        disabled={isSlideToLeftDisabled}>
                        <img src={arrowIcon} />
                    </button>
                    <button
                        className='slider__btn slider__btn-to-right'
                        onClick={handleRightBtnClick}
                        onMouseEnter={handleMouseEnterButton}
                        onMouseLeave={handleMouseLeaveButton}
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