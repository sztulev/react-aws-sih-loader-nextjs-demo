import React from 'react';

import { 
  AWSSIHImg as Img, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


function MultiImageDemo() {
    return (
        <AWSSIHContext config={{
            width: 100, height: 400,
            normalize: true
          }}>
            <Img src="static/img/large-photo-01.JPG" width={100} />
            <Img src="static/img/large-photo-02.JPG" width={100} />
            <Img src="static/img/large-photo-03.JPG" width={100} />
            <Img src="static/img/large-photo-04.JPG" width={100} />
      </AWSSIHContext>
    )
}

function MultiImageCodeSample() {
    return (
        <div>
        <pre>
            {
`<AWSSIHContext config={{
    endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
    bucket: 'react-aws-sih-loader-demo-1',
    width: 100, height: 400
    normalize: true
  }}>
    <AWSSIHImg src="large-photo-01.JPG" />
    <AWSSIHImg src="large-photo-02.JPG" />
    <AWSSIHImg src="large-photo-03.JPG" />
    <AWSSIHImg src="large-photo-04.JPG" />
</AWSSIHContext>`}
        </pre>
        </div>
    )
}

function MultiImageDescription() {
    return (
         <div className="description">
             <h2 className="title is-5">A single common configuration for multiple images</h2>
             <p>
                <code>{'<AWSSIHContext>'}</code> can be used to specify configuration at a higher level. 
                It uses React's context in the background to pass down configuration.     
             </p>
         </div>
    )
}


export { MultiImageDemo, MultiImageCodeSample, MultiImageDescription };