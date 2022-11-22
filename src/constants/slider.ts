import { SlideInfoType } from "../interfaces/common";

const MARKUP_IMG_PATH = './img/slides/markup/';
const PET_PROJECTS_IMG_PATH = './img/slides/pet-projects/';


export const MarkupSlides: SlideInfoType[] = [
    {
        title: 'Relvise',
        techStack: ['HTML, SCSS'],
        imgPath: MARKUP_IMG_PATH + 'relvise.jpg',
        url: ''
    },
    {
        title: 'Gocorna',
        techStack: ['HTML', 'SCSS'],
        imgPath: MARKUP_IMG_PATH + 'gocorna.jpg',
        url: ''
    },
    {
        title: 'Real-Estate',
        techStack: ['HTML', 'SCSS', 'JS'],
        imgPath: MARKUP_IMG_PATH + 'real-estate.jpg',
        url: ''
    },
    {
        title: 'Rhythm',
        techStack: ['HTML', 'SCSS', 'JS'],
        imgPath: MARKUP_IMG_PATH + 'rhythm.jpg',
        url: ''
    },
]

export const PetProjectsSlides: SlideInfoType[] = [
    {
        title: 'My Website',
        techStack: ['React, SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'my-website.jpg',
        url: ''
    },
    {
        title: 'Taxi-park',
        techStack: ['React Redux', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'taxi-park.jpg',
        url: ''
    },
    {
        title: 'Users',
        techStack: ['React Redux-Saga', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'users.jpg',
        url: ''
    },
    {
        title: 'Note-Editor',
        techStack: ['MERN', 'SCSS'],
        imgPath: PET_PROJECTS_IMG_PATH + 'note-editor.jpg',
        url: ''
    },
]