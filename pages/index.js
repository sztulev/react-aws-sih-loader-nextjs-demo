import React from 'react';

import '../styles/app.sass';

import { 
  AWSSIHImg as Img, 
  AWSSIHBackgroundImage as BckImg, 
  AWSSIHLazyLoadImg as LLImg, 
  AWSSIHLazyLoadBackgroundImage as LLBckImg, 
  AWSSIHContext 
} from 'react-aws-sih-loader';


import { SimpleImageDemo, SimpleImageCodeSample, SimpleImageDescription } from '../componnents/SingleImageDemo';
import { CropSimpleImageDemo, CropSimpleImageCodeSample, CropSimpleImageDescription } from '../componnents/CropSingleImageDemo';
import { 
  SingleImageLazyLoadDemo, 
  SingleImageLazyLoadCodeSample, 
  SingleImageLazyLoadDescription 
} from '../componnents/SingleImageLazyLoad.jsx';

import { 
  MultiImageDemo, 
  MultiImageCodeSample, 
  MultiImageDescription 
} from '../componnents/MultipleImageWithSingleConfig';

import { 
  BackgroundImageDemo, 
  BackgroundImageCodeSample, 
  BackgroundImageDescription 
} from '../componnents/BackgroundImage.jsx';

import { 
  LLBackgroundImageDemo, 
  LLBackgroundImageCodeSample, 
  LLBackgroundImageDescription 
} from '../componnents/BackgroundImageLazyLoading.jsx';




export default function Index() {
  return (
    <AWSSIHContext config={{
      endpoint: 'https://d1vwwrgylxdfl3.cloudfront.net',
      bucket: 'react-aws-sih-loader-demo-1',
    }}>
      <section className="section">
        <div className="container">
          <h1 className="title">
            Demo site for <i>react-aws-sih-loader</i> npmjs package
          </h1>
          <p className="subtitle">
           
          </p>

        </div>
      </section>
      
      <section>
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical">

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <SimpleImageDescription/>
                    <SimpleImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <SimpleImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <CropSimpleImageDescription/>
                    <CropSimpleImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <CropSimpleImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <SingleImageLazyLoadDescription/>
                    <SingleImageLazyLoadCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <SingleImageLazyLoadDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <MultiImageDescription/>
                    <MultiImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <MultiImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <BackgroundImageDescription/>
                    <BackgroundImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <BackgroundImageDemo/>
                  </div>
                </div>
              </div>

              <div className="tile box">
                <div className="tile is-7 is-parent">
                  <div className="tile is-child is-vertical ">
                    <LLBackgroundImageDescription/>
                    <LLBackgroundImageCodeSample/>
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child">
                    <LLBackgroundImageDemo/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="App">
        <header className="Header">
          <p>
            Hello!
          </p>
          <SIHImg/> 

          <p>
            Hello2
          </p>
          <SIHLazyLoadImg/> 

          <p>
            Hello 3
          </p>
          <SIHBckImg/>        
          
          <p>
            Hello 4
          </p>
          <SIHLazyLoadBckImg/>        
     

        </header>
      </div> */}
    </AWSSIHContext>
  );
}
