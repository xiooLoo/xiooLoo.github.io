import React from 'react';
import Editor from '../../components/Editor'
import './index.scss'

export default class QuillEditor extends React.Component {
	
	constructor(props: any) {
		super(props);
		this.state = {};
	}
	
	render () {
		return (
			<div className="quill">
				<Editor />
			</div>
		);
	}

}
