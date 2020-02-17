import React from 'react';

import { 
    AWSSIHBackgroundImage
} from 'react-aws-sih-loader';


function BackgroundImageDemo() {
    return (
        <AWSSIHBackgroundImage src="static/img/large-photo-03.JPG" 
            config={{width:1024}} 
            style={{width:'400px', height:'250px', backgroundSize:'cover'}}>
            <h3 className="is-size-4 has-text-danger">This is a text over background</h3>
        </AWSSIHBackgroundImage>
    )
}

function BackgroundImageCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHBackgroundImage src="large-photo-03.JPG" 
        config={{width:1024}} 
        style={{width:'400px', height:'250px', backgroundSize:'cover'}}>
    <h3>This is a text over background</h3>
</AWSSIHBackgroundImage>`}
        </pre>
        </div>
    )
}

function BackgroundImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Background image</h2>
             <p >
                 Use <code>{'<AWSSIHBackgroundImage>'}</code>to generate a <code>{'<div>'}</code> element with background image.
             </p>
         </div>
    )
}


export {
    BackgroundImageDemo, 
    BackgroundImageCodeSample, 
    BackgroundImageDescription };