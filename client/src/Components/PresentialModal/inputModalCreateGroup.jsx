import React, { useState } from 'react';
import {Editor, EditorState} from 'draft-js';

const InputModalCreateGroup = () => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty(),
  );

  return <Editor editorState={editorState} onChange={setEditorState} placeholder="Mô tả..." />;
};

export default InputModalCreateGroup;