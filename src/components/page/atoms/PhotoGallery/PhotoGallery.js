import React from 'react';
import './main.scss';
/**photos**/
import photoOne from '../../../../shared/assets/album/photo01.jpg';
import photoTwo from '../../../../shared/assets/album/photo02.jpg';
import photoThree from '../../../../shared/assets/album/photo03.jpg';

import p4 from '../../../../shared/assets/album/photo04.jpg';
import p5 from '../../../../shared/assets/album/photo05.jpg';
import p6 from '../../../../shared/assets/album/photo06.jpg';

import p7 from '../../../../shared/assets/album/photo07.jpg';
import p8 from '../../../../shared/assets/album/photo08.jpg';
import p9 from '../../../../shared/assets/album/photo09.jpg';

import p10 from '../../../../shared/assets/album/photo10.jpg';
import p11 from '../../../../shared/assets/album/photo11.jpg';
import p12 from '../../../../shared/assets/album/photo12.jpg';


const PhotoGallery = (props) => {

    let dragState = props.movable;
    let dragged_img_id;
   // console.log("dragState from pGallery " +dragState);
   //console.log("the edges from pGallery.. " + props.edges);
    let edges=props.edges;
   // console.log("the edges from pGallery.. " + edges);
    let gBorders;
    if(edges===true){
        gBorders="gallery-in-borders";
    }else{
        gBorders = "gallery-ragged-borders";
        
    }

    const dragStart = (e) =>{
       // e.preventDefault();
        const target = e.target;
        dragged_img_id = e.target.id;
       // console.log(`start drag... ${e.target.id}`);

        e.dataTransfer.setData('img_id', target.id);
        //   setTimeout(()=>{
        //       target.style.opacity=.5;
        //   },0);
    }
    const dragOver = (e) => {
        e.preventDefault();
        //e.stopPropagation();
    }
    let swapTarget;
    const dragEnter = (e)=>{
        e.preventDefault();
        
        if ( e.target.id != null ) {
            swapTarget=e.target.id
            e.target.style.opacity = .5;
            //e.target.style.transform = "scale(1.1)";
           // console.log(`Entered the dropzone ${e.target.id}`);
        }
    }
    const dragLeave =(e)=>{
        //if ( e.target.id === swapTarget ) {
            e.target.style.opacity = 1;
            //e.target.style.transform = "scale(1)";
           // console.log(`left the dropzone ${e.target.id}`);
        //}
        
    }
    
     const drop=(e)=>{
        e.preventDefault();

        let swapped = document.getElementById(e.target.id).getAttribute('src');
       // console.log("loc src " + document.getElementById(e.target.id).getAttribute('src'));
       // console.log("dragged " +document.getElementById(dragged_img_id).getAttribute('src'));


        e.target.src=document.getElementById(dragged_img_id).getAttribute('src');

        document.getElementById(dragged_img_id).src=swapped;
       // console.log("swapped");

        if ( e.target.id === swapTarget ) {
            e.target.style.opacity = 1;
       //     console.log(`left the dropzone ${e.target.id}`);
        }

      //  console.log("item dropped");
      //  console.log(document.getElementById(dragged_img_id).getAttribute('src'));
     }
 
    return (
        <div id="m-gallery" className={gBorders}>
        {/* </div>/<div className="gallery-ragged-borders"> */}
            <div id="dp-01" className="image-wrapper">
                <img 
                    id="p-01" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragLeave={dragLeave} 
                    onDragOver={dragOver}
                    onDrop={drop}
                    src={photoOne} 
                    alt="image01" 
                    className="draggable" 
                    draggable={dragState}
                />
            </div>
            <div id="dp-02" className="image-wrapper">
                <img 
                    id="p-02" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={photoTwo}
                    alt="image02" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-03" className="image-wrapper">
                <img 
                    id="p-03" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={photoThree}
                    alt="image03" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-04" className="image-wrapper">
                <img 
                    id="p-04" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p4}
                    alt="image04" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-05" className="image-wrapper">
                <img 
                    id="p-05" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p5}
                    alt="image05" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-06" className="image-wrapper">
                <img 
                    id="p-06" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p6}
                    alt="image06" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-07" className="image-wrapper">
                <img 
                    id="p-07" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p7}
                    alt="image07" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-08" className="image-wrapper">
                <img 
                    id="p-08" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p8}
                    alt="image08" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-09" className="image-wrapper">
                <img 
                    id="p-09" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p9}
                    alt="image09" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            {/* <div id="dp-10" className="image-wrapper">
                <img 
                    id="p-10" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p10}
                    alt="image10" 
                    className="draggable"
                    draggable={dragState}
                />
            </div> */}
            <div id="dp-11" className="image-wrapper">
                <img 
                    id="p-11" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p11}
                    alt="image11" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
            <div id="dp-12" className="image-wrapper">
                <img 
                    id="p-12" 
                    onDragStart={dragStart}
                    onDragEnter={dragEnter} 
                    onDragOver={dragOver}
                    onDragLeave={dragLeave}
                    onDrop={drop}
                    src={p12}
                    alt="image12" 
                    className="draggable"
                    draggable={dragState}
                />
            </div>
        </div>
    )   
}   

export default PhotoGallery
