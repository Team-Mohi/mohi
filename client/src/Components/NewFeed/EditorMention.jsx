import 'draft-js-mention-plugin/lib/plugin.css';
import style from 'styled-components';
import React, { Component } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';
import { connect } from 'react-redux';
import {Image,Transformation} from 'cloudinary-react';

const mentions = [];

const StyleEditorMention = style.div`
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  font-size: 14px;
  padding: 5px 10px;
  margin-top: 10px;
  border: 0.5px solid rgba(0,0,0,0.1);
  border-radius:30px;
`;

 class SimpleMentionEditor extends Component {

  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin({
      mentions,
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true
    });
  }

  componentDidMount(){
    this.props.friends.map((mention) => {

      mentions.push({
        name: mention.user_last_name + ' ' + mention.user_first_name,
        link: '/profile/' + mention.user_username,
        avatar: mention.user_avatar.toLowerCase().indexOf('data') >= 0 ? mention.user_avatar : "https://res.cloudinary.com/mohi-vn/image/upload/v1607061343/" + mention.user_avatar + ".jpg",
        id: mention.id
      });
    })
  }

  state = {
    editorState: EditorState.createEmpty(),
    suggestions: mentions,
    listMention: []
  };
  onChange = (editorState) => {
    this.setState({
      editorState,
    });

    let currentContent = editorState .getCurrentContent();
    let raw = convertToRaw(currentContent);
    this.props.showMentionList(raw.entityMap);
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };
  //
  // onAddMention = (mention) => {
  //   this.props.showMentionList(mention);
  // }

  render() {
    const { MentionSuggestions } = this.mentionPlugin;
    const plugins = [this.mentionPlugin];

    return (
      <div className={editorStyles.editor}>
        <StyleEditorMention>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            placeholder="Gắn thẻ ai đó..."
            ref={(element) => { this.editor = element; }}
          />
        </StyleEditorMention>
        <MentionSuggestions
          onSearchChange={this.onSearchChange}
          suggestions={this.state.suggestions}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  friends: state.friends.list,
});

export default connect(mapStateToProps, null)(SimpleMentionEditor)
