import React from 'react';
import './index.css';

export const skeletonMyPagesInSider = (<React.Fragment>
  <li className="skeleton-item">
    <div>
      <div className="skeleton-img-circle-30"/>
    </div>
    <div className="skeleton-info">
      <p className="skeleton-name"/>
      <p className="skeleton-email"/>
    </div>
  </li>
</React.Fragment>)

export const skeletonMyGroupInSider = (<React.Fragment>
  <li className="skeleton-item">
    <div>
      <div className="skeleton-img-square-30"/>
    </div>
    <div className="skeleton-info">
      <p className="skeleton-name"/>
    </div>
  </li>
</React.Fragment>)

export const skeletonPostNewFeed = (<React.Fragment>
  <li className="skeleton-post-item">
    <div className="skeleton-post-item-head">
      <div className="skeleton-img-circle-50"/>
      <div>
        <div className="skeleton-block skeleton-block-200"/>
        <div className="skeleton-block skeleton-block-150"/>
      </div>
    </div>
    <div className="skeleton-post-content">
      <div className="skeleton-block skeleton-block-90cent"/>
      <div className="skeleton-block skeleton-block-80cent"/>
      <div className="skeleton-block skeleton-block-70cent"/>
      <div className="skeleton-block skeleton-block-60cent"/>
    </div>
  </li>
</React.Fragment>)

export const skeleTonStory = (<React.Fragment>
  <li className="skeleton-story-item">
    <div className="skeleton-block skeleton-block-w130-h240"/>
    <div className="skeleton-block skeleton-block-w130-h240"/>
    <div className="skeleton-block skeleton-block-w130-h240"/>
    <div className="skeleton-block skeleton-block-w130-h240"/>
  </li>
</React.Fragment>)
