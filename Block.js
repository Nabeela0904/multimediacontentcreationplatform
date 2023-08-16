import React from 'react';

const ContentBlock = ({ content }) => {
  return (
    <div className="content-block">
      {content.type === 'text' && <p>{content.text}</p>}
      {content.type === 'image' && <img src={content.imageUrl} alt="Content" />}
      {/* Add other types like audio and video */}
    </div>
  );
};

export default ContentBlock;
