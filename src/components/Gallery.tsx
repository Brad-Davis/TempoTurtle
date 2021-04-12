import React, { Component } from 'react';
import './Gallery.css';

import Observer from '@researchgate/react-intersection-observer';
import Photo from './Photo';

type GalleryProps = {
    theme: String,
    preload?: number,
};

type GalleryState = {
    photoSrcs: Array<string>,
    photoSrcGen: Generator,
    finished: boolean,
};

const range = function* (end: number, start:number=0, step:number=1){
    let count = start;
    while(count < end){
        yield(count);
        count = count + step;
    }
    return;
}

const photogen = function* (iter: Generator){
    let cur = iter.next();
    while(!cur.done){
        yield `./bradpad_photos/${cur.value}.JPG`;
        cur = iter.next();
    }
}

export default class Gallery extends Component<GalleryProps, GalleryState> {
    constructor(props){
        super(props);
        const first = 1;
        const last = 17;
        const iter = range(last+1, first);
        const pgen =  photogen(iter);
        const preload = props.preload ? props.preload : 3;
        const preloaded = new Array<string>(); 
        for(let i = 0; i < preload; i++){
            let val = pgen.next().value;
            if(val){
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
    
    loadAdditionalPhoto(){
        //event.preventDefault();3
        let toLoad = this.state.photoSrcGen.next();
        if(!toLoad.done){
            let newPhotoSrcs = this.state.photoSrcs.concat(toLoad.value);
            this.setState({photoSrcs: newPhotoSrcs, photoSrcGen: this.state.photoSrcGen});
        }
        else{
            this.setState({finished: true,  photoSrcGen: this.state.photoSrcGen});
        }
    }

    render() {
        console.log(this.state.photoSrcs);
        return (
            <div id="gallery" style={{margin:'auto'}}>
                <h2 className='title textCenter' style={{fontSize: '4em'}}>photos!</h2>
                {this.state.photoSrcs.map((src, index) => {
                    return(
                        <React.Fragment key={index}>
                            <Photo src={src}/>
                        </React.Fragment>
                    );
                })}
                <Observer onChange={this.loadAdditionalPhoto.bind(this)} threshold={0.5}>
                    <div className='textCenter loadObserver'>
                        {this.state.finished ?
                            "No More Photos" :
                            "Loading More Photos!" }
                    </div>
                </Observer>
            </div>
        )
    }
}
