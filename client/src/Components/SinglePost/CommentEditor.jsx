import React, { Component } from "react";
import Editor, { createEditorStateWithText} from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import {convertToRaw, getDefaultKeyBinding, KeyBindingUtil, ContentState, EditorState} from "draft-js";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';

const {hasCommandModifier} = KeyBindingUtil;
const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;

const StyleEditor = style.div`
  width: 100%;
  max-height: 100px;
  overflow-y: auto;
  border: 1px solid #ddd;
  margin-left: 10px;
  font-size: 14px;
  padding: 5px 10px;
  border-radius: 30px;
`;

const Wrapper = style.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyleEmoji = style.div`
  position: absolute;
  right: 10px;
  border: 0;
  z-index: 2;
`;

export default class CommentEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
    state = {
      editorState: createEditorStateWithText(text)
  }

  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  focusCommentInput(){
    this.commentInput.focus();
  }

  keyBindingFn(e){
    if (e.keyCode === 13) {
      return 'submit-comment'
    }

    return getDefaultKeyBinding(e)
  }

  handleKeyCommand(command){
    if (command === 'submit-comment') {
      const value = this.state.editorState.getCurrentContent().getPlainText();
      const content = this.state.editorState.getCurrentContent();
      const isEditorEmpty = !content.hasText();
      const lengthOfTrimmedContent = value.trim().length;
      const isContainOnlySpaces = !isEditorEmpty && !lengthOfTrimmedContent;

      if(value && !isContainOnlySpaces) {
        this.props.onSubmitComment(value)
        const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
        this.setState({ editorState });
      }
      return 'handled'
    }

    return 'not-handled'
  }

  render() {
    return (
      <Wrapper>
        <StyleEditor>
          <Editor
            keyBindingFn={this.keyBindingFn}
            handleKeyCommand={this.handleKeyCommand}
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Viết bình luận..."
            ref={(element) => {
              this.commentInput = element;
            }}
          />
          <EmojiSuggestions />
        </StyleEditor>
      </Wrapper>
    );
  }
}
