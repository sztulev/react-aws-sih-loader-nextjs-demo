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
`<AWSSIHImg src="large-photo-04.JPG" 
    config={{       
        endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
        bucket: 'react-aws-sih-loader-demo-1',
        width: 400 }} />`}
        </pre>
        </content>
    )
}

function SimpleImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Resize single image</h2>
             <p>
             Providing a config object to <code>{'<AWSSIHImg>'}</code> conponent is the simplest way to start with. 
             If only one of <code>{'width'}</code> or <code>{'height'}</code> is set, it 
             resizes the image proportionally.
             </p>
         </div>
    )
}


export { SimpleImageDemo, SimpleImageCodeSample, SimpleImageDescription };