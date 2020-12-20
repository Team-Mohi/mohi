import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';
import './EditorEmoji.css';

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];

const StyleEditor = style.div`
  width: 470px;
  overflow-x: hidden;
  margin-left: 10px;
  font-size: 14px;
`;
export default class CustomEmojiEditor extends Component {
  state = {
    editorState: createEditorStateWithText(this.props.value)
  };

  componentDidMount() {
    this.editor.focus();
  }
  onChange = (editorState) => {
    this.setState({
      editorState
    });
    this.props.changeStatusButtonSubmit(editorState.getCurrentContent().getPlainText());
  };

  render() {
    return (
      <div>
        <StyleEditor>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Bạn đang nghĩ gì thế ?"
            ref={(element) => {
              this.editor = element;
            }}
          />
        </StyleEditor>
        <EmojiSuggestions />
        <div className="create-post-reaction" style={{ textAlign: 'right' }}>
          <EmojiSelect />
        </div>
      </div>
    );
  }
}
