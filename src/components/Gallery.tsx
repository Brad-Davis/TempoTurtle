import React, { Component } from 'react';
import './Gallery.css';

import Photo from './Photo';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
};

type GalleryProps = {
    theme: String
};

type GalleryState = {};

const range = function* (end: number, start:number=0, step:number=1){
    let count = start;
    while(count < end){
        yield(count);
        count = count + step;
    }
    return;
}

export default class Gallery extends Component<GalleryProps, GalleryState> {
    
    render() {
        const images: Array<JSX.Element> = [];
        const last = 17;
        const first = 1;
        const iter = range(last+1, first);
        let cur = iter.next();
        while(!cur.done){
            images.push(
                <Photo
                    src={`./bradpad_photos/${cur.value}.JPG`}
                    style={{width:'50%', margin:'auto'}}
                />
            );
            cur=iter.next();
        }
        console.log(images);
        return (
            <div id="gallery" style={{margin:'auto'}}>
                <h2 className='title textCenter' style={{fontSize: '4em'}}>photos!</h2>
                {images}
            </div>
        )
    }
}
