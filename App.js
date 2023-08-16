import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addContent } from './redux/actions';
import ContentPreview from './components/ContentPreview';

const App = ({ contentList, addContent }) => {
  const [inputText, setInputText] = useState('');

  const handleAddTextContent = () => {
    if (inputText.trim() !== '') {
      addContent({ type: 'text', text: inputText });
      setInputText('');
    }
  };

  return (
    <div className="app">
      <h1>Multimodal Content Creation Platform</h1>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddTextContent}>Add Text Content</button>
      <ContentPreview contentList={contentList} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    contentList: state.contentList,
  };
};

export default connect(mapStateToProps, { addContent })(App);
