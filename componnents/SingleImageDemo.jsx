import React from 'react';

import { 
  AWSSIHImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function SimpleImageDemo() {
    return (<AWSSIHImg src="static/img/large-photo-04.JPG"  config={{width: 400}}/>)
}

function SimpleImageCodeSample() {
    return (
        <content>
        <pre>
            {
`<AWSSIHImg src="large-photo-04.JPG" config={{ width: 400 }} />`}
        </pre>
        </content>
    )
}

function SimpleImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Resize single image</h2>
             <p>
             The simplest way of using is when only 'width' or 'height' is provided in config object, it resizes proportionally.
             </p>
         </div>
    )
}


export { SimpleImageDemo, SimpleImageCodeSample, SimpleImageDescription };