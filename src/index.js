// IMPORTS

import React from 'react';
import { render } from 'react-dom';
import './styles/index/index.css';
import App from './components/app';


// GLOBALS

export const contentArray = {
  photos: [
    {src: `${process.env.PUBLIC_URL}/photos/1.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/2.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/3.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/4.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/5.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/6.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/7.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/8.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/9.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/10.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/11.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/12.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/13.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/14.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/15.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/16.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/17.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/18.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/19.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/20.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/21.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/22.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/23.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/24.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/25.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/26.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/27.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/28.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/29.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/30.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/31.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/32.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/33.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/34.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/35.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/36.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/37.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/38.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/39.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/40.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/41.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/42.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/43.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/44.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/45.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/46.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/47.jpg`, alt: "", title: ""},
    {src: `${process.env.PUBLIC_URL}/photos/48.jpg`, alt: "", title: ""}
  ],

  artworks: [
    {src: `${process.env.PUBLIC_URL}/artworks/1.jpg`, alt: "", title: "", style: { objectPosition: "top", objectFit: "cover" }},
    {src: `${process.env.PUBLIC_URL}/artworks/2.jpg`, alt: "", title: "", style: { objectPosition: "center" }},
    {src: `${process.env.PUBLIC_URL}/artworks/3.jpg`, alt: "", title: "", style: { objectPosition: "center" }},
    {src: `${process.env.PUBLIC_URL}/artworks/4.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/5.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/6.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/7.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/8.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/9.jpg`, alt: "", title: "", style: { objectPosition: "top" }},
    {src: `${process.env.PUBLIC_URL}/artworks/10.jpg`, alt: "", title: "", style: { objectPosition: "center" }},
    {src: `${process.env.PUBLIC_URL}/artworks/11.jpg`, alt: "", title: "", style: { objectPosition: "center" }}
  ]
};

export const menuOptions = [
  ["FEATURED", "CONTACT"],                     // ARTWORK MODE OPTIONS
  ["FEATURED", "PEOPLE", "NATURE", "ACTS", "CONTACT"]   // PHOTO MODE OPTIONS
];


// RENDERING THE APP

render(<App />, document.querySelector("#root"));