import { SlideInfoType } from "../interfaces/common";

import relvise from '../assets/img/slides/markup/relvise.jpg';
import gocorna from '../assets/img/slides/markup/gocorna.jpg';
import realEstate from '../assets/img/slides/markup/real-estate.jpg';
import rhythm from '../assets/img/slides/markup/rhythm.jpg';
import myWebsite from '../assets/img/slides/pet-projects/my-website.jpg';
import taxiPark from '../assets/img/slides/pet-projects/taxi-park.jpg';
import users from '../assets/img/slides/pet-projects/users.jpg';
import noteEditor from '../assets/img/slides/pet-projects/note-editor.jpg';

const DEF_GH_PAGES_URL = 'https://created4github.github.io/';
const DEF_GH_REP_URL = 'https://github.com/created4GitHub/';

export const MarkupSlides: SlideInfoType[] = [
    {
        title: 'Relvise',
        techStack: ['HTML, CSS'],
        imgPath: relvise,
        websiteUrl: DEF_GH_PAGES_URL + 'relvise',
        sourceCodeUrl: DEF_GH_REP_URL + 'relvise'
    },
    {
        title: 'Gocorna',
        techStack: ['HTML', 'CSS'],
        imgPath: gocorna,
        websiteUrl: DEF_GH_PAGES_URL + 'gocorna',
        sourceCodeUrl: DEF_GH_REP_URL + 'gocorna'
    },
    {
        title: 'Real-Estate',
        techStack: ['HTML', 'CSS', 'JS'],
        imgPath: realEstate,
        websiteUrl: DEF_GH_PAGES_URL + 'real-estate',
        sourceCodeUrl: DEF_GH_REP_URL + 'real-estate'
    },
    {
        title: 'Rhythm',
        techStack: ['HTML', 'CSS', 'JS'],
        imgPath: rhythm,
        websiteUrl: DEF_GH_PAGES_URL + 'rhythm',
        sourceCodeUrl: DEF_GH_REP_URL + 'rhythm'
    },
]

export const PetProjectsSlides: SlideInfoType[] = [
    {
        title: 'My Website',
        techStack: ['React, SCSS'],
        imgPath: myWebsite,
        websiteUrl: DEF_GH_PAGES_URL + 'my-website',
        sourceCodeUrl: DEF_GH_REP_URL + 'my-website'
    },
    {
        title: 'Taxi-park',
        techStack: ['React Redux', 'SCSS'],
        imgPath: taxiPark,
        websiteUrl: DEF_GH_PAGES_URL + 'taxi-park',
        sourceCodeUrl: DEF_GH_REP_URL + 'taxi-park'
    },
    {
        title: 'Users',
        techStack: ['React Redux-Saga', 'SCSS'],
        imgPath: users,
        websiteUrl: DEF_GH_PAGES_URL + 'users',
        sourceCodeUrl: DEF_GH_REP_URL + 'users'
    },
    {
        title: 'Note-Editor',
        techStack: ['MERN', 'SCSS'],
        imgPath: noteEditor,
        websiteUrl: DEF_GH_PAGES_URL + 'note-editor',
        sourceCodeUrl: DEF_GH_REP_URL + 'note-editor'
    },
]