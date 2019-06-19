import React from 'react';

export class A extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			date : new Date()
		}
	}
	
	componentWillMount() {
		this.tiemrId = setInterval(() => this.A_tick(),1000)
	}

	componentDidMount() {
		setTimeout (() => clearInterval( this.tiemrId),60000);
	}
	
	render() {
		return(
			<div className="A">
				<p>
					Time after checkbox is checked: {this.state.date.toLocaleTimeString()}
				</p>
			</div> 
		);
	}

	A_tick = () => {
		this.setState({date: new Date()})
	}
}
