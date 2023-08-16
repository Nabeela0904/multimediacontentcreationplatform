import React from 'react';
import ContentBlock from './ContentBlock';

const ContentPreview = ({ contentList }) => {
  return (
    <div className="content-preview">
      {contentList.map((content, index) => (
        <ContentBlock key={index} content={content} />
      ))}
    </div>
  );
};

export default ContentPreview;
