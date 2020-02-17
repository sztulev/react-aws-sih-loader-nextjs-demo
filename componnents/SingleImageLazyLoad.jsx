import React from 'react';

import { 
    AWSSIHLazyLoadImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function SingleImageLazyLoadDemo() {
    return (
        <AWSSIHLazyLoadImg src="static/img/large-photo-03.JPG" width={400} config={{width:2048}}/>
    )
}

function SingleImageLazyLoadCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHLazyLoadImg src="large-photo-03.JPG" 
                    width={400} 
                    config={{        
                        endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
                        bucket: 'react-aws-sih-loader-demo-1',
                        width:2048}} />`}
        </pre>
        </div>
    )
}

function SingleImageLazyLoadDescription() {
    return (
         <div className="description">
            <h2 className="title is-5">Lazy loading a single image</h2>
            <p >
                Use <code>{'<AWSSIHLazyLoadImg>'}</code>  component to lazy load images of larger size. It wraps the image in a <code>{'<div>'}</code> element 
                 with a background set to a small image while the larger image is loading. 
            </p>
            <p>Refresh the page to see the transition effect.</p>
         </div>
    )
}


export { SingleImageLazyLoadDemo, SingleImageLazyLoadCodeSample, SingleImageLazyLoadDescription };