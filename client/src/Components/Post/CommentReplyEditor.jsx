import React, { Component } from "react";
import Editor, { createEditorStateWithText } from "draft-js-plugins-editor";
import createEmojiPlugin from "draft-js-emoji-plugin";
import "draft-js-emoji-plugin/lib/plugin.css";
import style from 'styled-components';
import { EditorState, Modifier, ContentState, convertToRaw } from 'draft-js';
import htmlToDraft from 'html-to-draftjs';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
import draftToHtml from 'draftjs-to-html';

const emojiPlugin = createEmojiPlugin({
  useNativeArt: true
});
const linkifyPlugin = createLinkifyPlugin();

const { EmojiSuggestions, EmojiSelect } = emojiPlugin;
const plugins = [emojiPlugin, linkifyPlugin];

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

export default class CommentReplyEditor extends Component {
    state = {
      editorState: EditorState.createEmpty(),
      idUserReceivedReply: this.props.idUserReceivedReply,
      userReceivedReply: this.props.userReceivedReply,
      idUserReceivedReplyArr: []
    };



    static getDerivedStateFromProps(props, state) {
     if (props.idUserReceivedReply !== state.idUserReceivedReply || props.userReceivedReply !== state.userReceivedReply) {
       if(state.idUserReceivedReplyArr.indexOf(props.idUserReceivedReply) < 0){

         const insertUserReceivedReply = (userReceivedReply, idUserReceivedReply, editorState) => {
             const currentContent = editorState.getCurrentContent(),
                   currentSelection = editorState.getSelection();
              const linkUserReceivedReply = "<a href='"+idUserReceivedReply+"' ><strong>"+ userReceivedReply +"</strong></a>";
              let { contentBlocks, entityMap } = htmlToDraft(linkUserReceivedReply);

             const newContent = Modifier.replaceWithFragment(
               currentContent,
               currentSelection,
               ContentState.createFromBlockArray(contentBlocks, entityMap).getBlockMap()
             );
             const newEditorState = EditorState.set(editorState, {
                currentContent: newContent,
              });
             return  EditorState.forceSelection(newEditorState, newContent.getSelectionAfter());
           }

         return {
           idUserReceivedReply: props.idUserReceivedReply,
           userReceivedReply: props.userReceivedReply,
           editorState: insertUserReceivedReply(props.userReceivedReply, props.idUserReceivedReply, state.editorState),
           idUserReceivedReplyArr: [...state.idUserReceivedReplyArr, props.idUserReceivedReply]
         };
       }
     }
      // Return null to indicate no change to state.
      return null;
     }

  onChange = (editorState) => {
    this.setState({
      editorState
    });
  };

  render() {
    return (
      <Wrapper>
        <StyleEditor>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Viết bình luận..."
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
