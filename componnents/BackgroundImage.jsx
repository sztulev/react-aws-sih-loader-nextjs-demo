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
                    config={{width:2048}} />`}
        </pre>
        </div>
    )
}

function SingleImageLazyLoadDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">Lazy load single image</h2>
             <p >
                 Use 'AWSSIHLazyLoadImg' to lazy load larger size image. It will wrap the image in a 'div' element and adds background while the image is loading. 
             </p>
         </div>
    )
}


export { SingleImageLazyLoadDemo, SingleImageLazyLoadCodeSample, SingleImageLazyLoadDescription };