import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';
import './EditorEmoji.css';
import {convertToRaw, EditorState, ContentState} from "draft-js";

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;

const StyleEditor = style.div`
  width: 475px;
  max-height: 200px;
  overflow-y: auto;
  margin-left: 10px;
  font-size: 14px;
`;
export default class CustomEmojiEditor extends Component {
    state = {
      editorState: createEditorStateWithText(text)
    };

  componentDidMount(){
    if(this.props.showModalCreatePost){
      this.editor.focus();
    }
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.statusCreatePost !== this.props.statusCreatePost){
      if(nextProps.statusCreatePost === 'success' || nextProps.statusCreatePost === 'error'){
        const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
        this.setState({ editorState });
      }
    }
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
            placeholder="Viết bài dì đó..."
            ref={(element) => {
              this.editor = element;
            }}
          />
        </StyleEditor>
          <EmojiSuggestions />
        {this.props.showModalCreatePost ?
          <div className="create-post-reaction" style={{textAlign: 'right'}}>
            <EmojiSelect />
          </div>
        :null}
      </div>
    );
  }
}
