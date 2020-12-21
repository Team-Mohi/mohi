import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';
import {convertToRaw, getDefaultKeyBinding, KeyBindingUtil, ContentState, EditorState} from "draft-js";

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin];
const text = ``;

const StyleEditor = style.div`
  width: 840px;
  max-height: 55px;
  overflow-y: auto;
  margin-left: 10px;
  font-size: 14px;

  @media screen and (min-width: 1677px) and (max-width: 1920px) {
      width: 840px;
      max-height: 55px;
      overflow-y: auto;
      margin-left: 10px;
      font-size: 14px;
    }

    @media screen and (min-width: 1366px) and ( max-width: 1677px) {
      width: 700px;
    }

    @media screen and (min-width: 1280px) and ( max-width: 1366px) {
      width: 525px;
    }
`;
export default class CustomEmojiEditor extends Component {
  constructor(props) {
    super(props);
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
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
    const value = this.state.editorState.getCurrentContent().getPlainText();
    if(value){
      this.props.isTypingMess(true)
    }
  };

  onFocus = () => {
    this.props.isTypingMess(true)
    this.props.readMess()
  }

  onBlur = () => {
    this.props.isTypingMess(false)
  }

  keyBindingFn(e){
    if (e.keyCode === 13) {
      return 'submit-mess'
    }

    return getDefaultKeyBinding(e)
  }

  handleKeyCommand(command){
    if (command === 'submit-mess') {
      const value = this.state.editorState.getCurrentContent().getPlainText();
      const content = this.state.editorState.getCurrentContent();
      const isEditorEmpty = !content.hasText();
      const lengthOfTrimmedContent = value.trim().length;
      const isContainOnlySpaces = !isEditorEmpty && !lengthOfTrimmedContent;

      if(value && !isContainOnlySpaces) {
        this.props.onSubmitMess(value)
        this.props.isTypingMess(false)
        const editorState = EditorState.push(this.state.editorState, ContentState.createFromText(''));
        this.setState({ editorState });
      }
      return 'handled'
    }

    return 'not-handled'
  }

  render() {
    return (
      <div>
        <div style={{display: 'flex',alignItems: 'center'}}>
        <StyleEditor>
          <Editor
            keyBindingFn={this.keyBindingFn}
            handleKeyCommand={this.handleKeyCommand}
            editorState={this.state.editorState}
            onChange={this.onChange}
            onFocus={this.onFocus}
            onBlur={this.onBlur}
            plugins={plugins}
            placeholder="Nhập tin nhắn..."
            ref={(element) => {
              this.editor = element;
            }}
          />
        </StyleEditor>
        <EmojiSuggestions />
        <div className="emoij-mess" style={{textAlign: 'right'}}>
          <EmojiSelect />
        </div>
      </div>
      </div>
    );
  }
}
