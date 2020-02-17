import React from 'react';

import { 
    AWSSIHLazyLoadBackgroundImage
} from 'react-aws-sih-loader';


function LLBackgroundImageDemo() {
    return (
        <AWSSIHLazyLoadBackgroundImage src="static/img/large-photo-03.JPG" 
            config={{width:4096}} 
            style={{width:'400px', height:'250px', backgroundSize:'cover'}}>
            <h3 className="is-size-4 has-text-danger">This is a text over background</h3>
        </AWSSIHLazyLoadBackgroundImage>
    )
}

function LLBackgroundImageCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHLazyLoadBackgroundImage src="large-photo-03.JPG" 
        config={{width:4096}} 
        style={{width:'400px', height:'250px', backgroundSize:'cover'}}>
    <h3>This is a text over background</h3>
</AWSSIHLazyLoadBackgroundImage>`}
        </pre>
        </div>
    )
}

function LLBackgroundImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Background image with lazy loading</h2>
             <p >
                 Use <code>{'<AWSSIHLazyLoadBackgroundImage>'}</code>to generate a <code>{'<div>'}</code> element with background image. 
                 The large image is loaded in the background while a small size of the same image is displayed.
             </p>
             <p>
                 Refresh the page to see the transition effect.
             </p>
         </div>
    )
}


export {
    LLBackgroundImageDemo, 
    LLBackgroundImageCodeSample, 
    LLBackgroundImageDescription };