import React, { Component } from 'react';
import './Gallery.css';

import Observer from '@researchgate/react-intersection-observer';
import Photo from './Photo';

type GalleryProps = {
    theme: String,
    toload?: Array<string>
    preload?: number,
};

type GalleryState = {
    photoSrcs: Array<string>,
    photoSrcGen: Generator,
    finished: boolean,
    //list of things that are loaded
    loaded?: Array<string>
};

<<<<<<< HEAD
const range = function* (end: number, start: number = 0, step: number = 1) {
    let count = start;
    while (count < end) {
        yield (count);
=======
const range = function* (end: number, start:number=0, step:number=1){
    let count = start;
    while(count < end){
        yield(count);
>>>>>>> 243f540265370db861658d28fa7827e8a42e9265
        count = count + step;
    }
    return;
}

<<<<<<< HEAD
const photogen = function* (iter: Generator) {
    let cur = iter.next();
    while (!cur.done) {
=======
const photogen = function* (iter: Generator){
    let cur = iter.next();
    while(!cur.done){
>>>>>>> 243f540265370db861658d28fa7827e8a42e9265
        yield `./bradpad_photos/${cur.value}.JPG`;
        cur = iter.next();
    }
}

//THIS IS AN BAD DESIGN PATTERN FOR REACT
//INSTEAD OF GALLERY CREATING THE LIST OF 
//IMAGES, IT SHOULD BE PASSED A LIST AS A
//PROP INSTEAD
//
//THERE'S SOME ISSUES WITH STATE MUTABILTY
//WITH THE CURRENT IMPLIMENTATION

export default class Gallery extends Component<GalleryProps, GalleryState> {
    constructor(props) {
        super(props);
        const first = 1;
        const last = 17;
        const iter = range(last + 1, first);
        const pgen = photogen(iter);
        const preload = props.preload ? props.preload : 3;
        const preloaded = new Array<string>();
        for (let i = 0; i < preload; i++) {
            let val = pgen.next().value;
            if (val) {
                preloaded.push(
                    val
                );
            }
        }
        this.state = {
            photoSrcs: preloaded,
            photoSrcGen: pgen,
            finished: false,
        }
    }
<<<<<<< HEAD

    loadAdditionalPhoto() {
        //event.preventDefault();3
        let toLoad = this.state.photoSrcGen.next();
        if (!toLoad.done) {
            let newPhotoSrcs = this.state.photoSrcs.concat(toLoad.value);
            this.setState({ photoSrcs: newPhotoSrcs, photoSrcGen: this.state.photoSrcGen });
        }
        else {
            this.setState({ finished: true, photoSrcGen: this.state.photoSrcGen });
=======

    loadAdditionalPhoto(){
        //event.preventDefault();3
        let toLoad = this.state.photoSrcGen.next();
        if(!toLoad.done){
            let newPhotoSrcs = this.state.photoSrcs.concat(toLoad.value);
            this.setState({photoSrcs: newPhotoSrcs, photoSrcGen: this.state.photoSrcGen});
        }
        else{
            this.setState({finished: true,  photoSrcGen: this.state.photoSrcGen});
>>>>>>> 243f540265370db861658d28fa7827e8a42e9265
        }
    }

    render() {
        console.log(this.state.photoSrcs);
        return (
<<<<<<< HEAD
            <div id="gallery" style={{ margin: 'auto' }}>
                <h2 className='title textCenter'>photos!</h2>
                {this.state.photoSrcs.map((src, index) => {
                    return (
                        <React.Fragment key={index}>
                            <Photo src={src} />
                        </React.Fragment>
                    );
                })}

=======
            <div id="gallery" style={{ margin: 'auto' }}>
                    <h2 className='title textCenter' style={{ fontSize: '4em' }}>photos!</h2>
                    {this.state.photoSrcs.map((src, index) => {
                        return (
                            <React.Fragment key={index}>
                                <Photo src={src} />
                            </React.Fragment>
                        );
                    })}

>>>>>>> 243f540265370db861658d28fa7827e8a42e9265
                    <Observer
                        onChange={this.loadAdditionalPhoto.bind(this)}
                        threshold={0.5}
                        disabled={false}//should be true when a photo is loading, and false when photos are loaded.
                    >
                        <div className='textCenter loadObserver'>
                            {this.state.finished ?
                                "No More Photos" :
<<<<<<< HEAD
                                "Loading More Photos!"}
=======
                            "Loading More Photos!" }
>>>>>>> 243f540265370db861658d28fa7827e8a42e9265
                        </div>
                    </Observer>
                </div>
        )
    }
}
