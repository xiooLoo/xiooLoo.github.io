import React from 'react';
import MdEditor from 'react-markdown-editor-lite';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js';
import './index.scss'; 

const MOCK_DATA = "Hello.\n\n * This is markdown.\n * It is fun\n * Love it or leave it."
export default class MKDown extends React.Component {
  mdEditor: MdEditor | undefined | null;
  mdParser: MarkdownIt;

  constructor(props: any) {
    super(props)
    this.mdParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function(str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (__) {}
        }
        return ''
      }
    })
  }

  handleEditorChange = (html: any, text: any) => {
    console.log('handleEditorChange:',html, text)
  }

  renderHTML = (text: string) => {
    return this.mdParser.render(text)

    // 模拟异步渲染Markdown
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve(this.mdParser.render(text))
    //   }, 1000);
    // })
  }

  onBeforeClear = () => {
    const result = window.confirm('Are you sure you want to clear your markdown')
    const toClear = result ? true : false
    return toClear
    // return new Promise((resolve, reject) => {
    //   const result = window.confirm('Are you sure you want to clear your markdown')
    //   const toClear = result ? true : false
    //   resolve(toClear)
    // })
  }

  handleGetMdValue = () => {
    // this.mdEditor && alert(this.mdEditor.getMdValue())
  }

  handleGetHtmlValue = () => {
    // this.mdEditor && alert(this.mdEditor.getHtmlValue())
  }

  handleImageUpload(file: any, callback: any) {
    const reader = new FileReader()
    reader.onload = () => {      
      /*const convertBase64UrlToBlob = (urlData: any) => {  
        let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
        let bstr = atob(arr[1])
        let n = bstr.length
        let u8arr = new Uint8Array(n)
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n)
        }
        return new Blob([u8arr], {type:mime})
      }
      const blob = convertBase64UrlToBlob(reader.result)*/
      setTimeout(() => {
        // setTimeout 模拟异步上传图片
        // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        const uploadedUrl = 'https://avatars0.githubusercontent.com/u/21263805?s=40&v=4'
        callback(uploadedUrl)
      }, 1000)
    }
    reader.readAsDataURL(file)
  }
  onCustomImageUpload = () => {
    return new Promise((resolve, reject) => {
      const result = window.prompt('Please enter image url here')
      resolve({ url: result })
      // custom confirm message pseudo code
      // YourCustomDialog.open(() => {
      //   setTimeout(() => {
      //     // setTimeout 模拟oss异步上传图片
      //     const url = 'https://avatars0.githubusercontent.com/u/21263805?s=80&v=4'
      //     resolve({url: url, name: 'pic'})
      //   }, 1000)
      // })
    })
  }

  render() {
    return (
      <div className="mk-down-base">
        {/* <nav>
          <button onClick={this.handleGetMdValue} >getMdValue</button>  
          <button onClick={this.handleGetHtmlValue} >getHtmlValue</button>  
        </nav> */}
        <section className="mk-down-section">
          <MdEditor
            name="md"
            ref={node => this.mdEditor = node}
            value={MOCK_DATA}
            renderHTML={this.renderHTML}
            onChange={this.handleEditorChange} 
            onBeforeClear={this.onBeforeClear}
            onImageUpload={this.handleImageUpload}
            onCustomImageUpload={this.onCustomImageUpload}
            config={{
              view: {
                menu: true,
                md: true,
                html: true,
                fullScreen: true
              },
              imageUrl: 'https://tse1-mm.cn.bing.net/th?id=OIP.LR1EWcFdBaQdJoU7ZUDIDwHaGV&w=136&h=110&c=8&rs=1&qlt=90&pid=3.1&rm=2'
            }}
          /> 
        </section>                        
      </div>
    );
  }
}
