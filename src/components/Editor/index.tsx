import React from 'react';
import BraftEditor from 'braft-editor';
import 'braft-editor/dist/index.css';
import './index.scss';

export default class Editor extends React.Component {
  state = {
    editorState: BraftEditor.createEditorState(null),
    controls: [],
    extendControls: []
  }

  async componentDidMount() {
    /**
     * 默认工具栏
     */
    const controls = [
      'undo', 'redo', 'separator',
      'font-size', 'line-height', 'letter-spacing', 'separator',
      'text-color', {
        key: 'bold', // 使用key来指定控件类型
        title: '加粗选中文字哦', // 自定义控件title
        text: '加粗', // 使用自定义文案来代替默认图标(B)，此处也可传入jsx
      }, 'italic', 'underline', 'strike-through', 'separator',
      'superscript', 'subscript', 'remove-styles', 'emoji',  'separator', 
      'text-indent', 'text-align', 'separator',
      'headings', 'list-ul', 'list-ol', 'blockquote', 'code', 'separator',
      'link', 'separator', 'hr', 'separator',
      'italic', 'underline', 'strike-through', 'separator',
      'media', 'separator',
      'clear'
    ]

    /**
     * 新增工具栏Button
     */
    const extendControls = [
      'separator',
      {
          key: 'my-button', // 控件唯一标识，必传
          type: 'button',
          title: '这是一个自定义的按钮', // 指定鼠标悬停提示文案
          className: 'my-button', // 指定按钮的样式名
          html: null, // 指定在按钮中渲染的html字符串
          text: 'Hello', // 指定按钮文字，此处可传入jsx，若已指定html，则text不会显示
          onClick: () => {
              console.log('Hello World!');
          },
      }
    ]

    // 在此处获取服务端数据
    const htmlContent = `<p>念佛二位念佛二五年纷纷</p><p><strong class=\"ql-size-huge\">just</strong></p><p>你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风你好，闻见看见你纷纷放你文风</p>`
    this.setState({
      editorState: BraftEditor.createEditorState(htmlContent),
      controls,
      extendControls
    })
  }

  saveEditorContent(htmlContent: any) {
    console.log('保存HTML:', htmlContent)
  }

  submitContent = async () => {
    const htmlContent = this.state.editorState.toHTML()
    await this.saveEditorContent(htmlContent)
  }

  handleEditorChange = (editorState: any) => {
    this.setState({ editorState })
  }

  render() {
    const {editorState} = this.state
    return (
      <div className="my-editor">
        <BraftEditor 
          value={editorState}
          onChange={this.handleEditorChange}
          onSave={this.submitContent}
          controls={this.state.controls}
          extendControls={this.state.extendControls}
        />
      </div>
    );
  }
}