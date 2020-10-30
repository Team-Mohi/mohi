import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';

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
  constructor(props){
    super(props)
    this.state = {
      editorState: createEditorStateWithText(text),
      idUserReceivedReply: props.idUserReceivedReply,
      userReceivedReply: props.userReceivedReply
    };
    console.log(props);
  }


  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  focusCommentInput(){
    this.commentInput.focus();
  }
  render() {
    return (
      <Wrapper>
        <StyleEditor>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Viết bình luận..."
            ref={(element) => {
              this.commentInput = element;
            }}
          />
        </StyleEditor>
        <EmojiSuggestions />
        <StyleEmoji>
          <EmojiSelect />
        </StyleEmoji>
      </Wrapper>
    );
  }
}
