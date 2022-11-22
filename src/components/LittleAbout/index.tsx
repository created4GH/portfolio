import React from 'react';

import './style.scss';

const LittleAbout = () => {
    return (
        <section className="little-about">
            <h2 className='little-about__title'>Little more about</h2>
            <article className="little-about-article">
                <h3 className="little-about-subtitle">General</h3>
                <p>I was born on 4 October, 1997. My native town is Severodonetsk, Luhansk region.</p>
                <p>I finished the multidisciplinary lyceum there in 2015 and moved to Kharkiv
                    entering NTU 'KPI', that I was graduated from in 2021 with a Master's Degree.
                </p>
                <p>I've lived in Kyiv since October 2022 .</p>
            </article>
            <article className="little-about-article">
                <h3 className="little-about-subtitle">Interests</h3>
                <p>Practically all my life, sport activities keep me in tonus, so I love being involved in many types.</p>
                <p>Also, I'm fond of reading since childhood and a big part of my free time I spend with a book in my hands.</p>
                <p>Friends know me as 'a lover of blue screens' because I try not to miss any worthy premiere.</p>
                <p>Though, we'd learnt programming in university, I've been deep with a head in it since 2021
                    when I entered A-Level Advanced JS Course and since then I've spent huge amount of time working on pet-projects depeloving and improving my skills, although the war brought its plans, I keep doing it on daily basis.
                </p>
            </article>
            <article className="little-about-article">
                <h3 className="little-about-subtitle">Character</h3>
                <p>Communicable, don't miss a chance to take a part in collective activity, easy to move on, find funnies even in sad things, like life irony.</p>
            </article>
        </section>
    );
};

export default LittleAbout;