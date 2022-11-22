import { SlideInfoType } from "../interfaces/common";

const MARKUP_IMG_PATH = './img/slides/markup/';
const PET_PROJECTS_IMG_PATH = './img/slides/pet-projects/';
const DEF_GH_URL = 'https://created4github.github.io/';

export const MarkupSlides: SlideInfoType[] = [
    {
        title: 'Relvise',
        techStack: ['HTML, SCSS'],
        imgPath: MARKUP_IMG_PATH + 'relvise.jpg',
        url: DEF_GH_URL + 'relvise'
    },
    {
        title: 'Gocorna',
        techStack: ['HTML', 'SCSS'],
        imgPath: MARKUP_IMG_PATH + 'gocorna.jpg',
        url: DEF_GH_URL + 'gocorna'
    },
    {
        title: 'Real-Estate',
        techStack: ['HTML', 'SCSS', 'JS'],
        imgPath: MARKUP_IMG_PATH + 'real-estate.jpg',
        url: DEF_GH_URL + 'real-estate'
    },
    {
        title: 'Rhythm',
        techStack: ['HTML', 'SCSS', 'JS'],
        imgPath: MARKUP_IMG_PATH + 'rhythm.jpg',
        url: DEF_GH_URL + 'rhythm'
    },
]

export const PetProjectsSlides: SlideInfoType[] = [
    {
        title: 'My Website',
        techStack: ['React, SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'my-website.jpg',
        url: DEF_GH_URL + 'my-website'
    },
    {
        title: 'Taxi-park',
        techStack: ['React Redux', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'taxi-park.jpg',
        url: DEF_GH_URL + 'taxi-park'
    },
    {
        title: 'Users',
        techStack: ['React Redux-Saga', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'users.jpg',
        url: DEF_GH_URL + 'users'
    },
    {
        title: 'Note-Editor',
        techStack: ['MERN', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'note-editor.jpg',
        url: DEF_GH_URL + 'note-editor'
    },
]