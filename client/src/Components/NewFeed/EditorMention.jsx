import 'draft-js-mention-plugin/lib/plugin.css';
import style from 'styled-components';
import React, { Component } from 'react';
import { EditorState } from 'draft-js';
import Editor from 'draft-js-plugins-editor';
import createMentionPlugin, { defaultSuggestionsFilter } from 'draft-js-mention-plugin';
import editorStyles from './editorStyles.css';

const mentions = [
  {
    name: 'Matthew Russell',
    link: 'https://twitter.com/mrussell247',
    avatar: 'https://pbs.twimg.com/profile_images/517863945/mattsailing_400x400.jpg',
  },
  {
    name: 'Julian Krispel-Samsel',
    link: 'https://twitter.com/juliandoesstuff',
    avatar: 'https://avatars2.githubusercontent.com/u/1188186?v=3&s=400',
  },
  {
    name: 'Jyoti Puri',
    link: 'https://twitter.com/jyopur',
    avatar: 'https://avatars0.githubusercontent.com/u/2182307?v=3&s=400',
  },
  {
    name: 'Max Stoiber',
    link: 'https://twitter.com/mxstbr',
    avatar: 'https://pbs.twimg.com/profile_images/763033229993574400/6frGyDyA_400x400.jpg',
  },
  {
    name: 'Nik Graf',
    link: 'https://twitter.com/nikgraf',
    avatar: 'https://avatars0.githubusercontent.com/u/223045?v=3&s=400',
  },
  {
    name: 'Pascal Brandt',
    link: 'https://twitter.com/psbrandt',
    avatar: 'https://pbs.twimg.com/profile_images/688487813025640448/E6O6I011_400x400.png',
  },
];

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

export default class SimpleMentionEditor extends Component {

  constructor(props) {
    super(props);

    this.mentionPlugin = createMentionPlugin({
      mentions,
      entityMutability: 'IMMUTABLE',
      supportWhitespace: true
    });
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
    //
    // let currentContent = editorState .getCurrentContent();
    // let raw = convertToRaw(currentContent);
    // for(let key in raw.entityMap){
    //   const ent = raw.entityMap[key];
    //   if(ent.type === 'mention'){
    //       this.props.showMentionList(ent.data.mention);
    //   }
    // }
  };

  onSearchChange = ({ value }) => {
    this.setState({
      suggestions: defaultSuggestionsFilter(value, mentions),
    });
  };

  onAddMention = (mention) => {
    this.props.showMentionList(mention);
  }

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
          onAddMention={this.onAddMention}
        />
      </div>
    );
  }
}
