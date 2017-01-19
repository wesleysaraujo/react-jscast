var React = require('react')

var GitHub = React.createClass({
	handleSubmit : function(e) {
		e.preventDefault()

		console.log(this.refs.username.value)
	},

	render : function() {
		return (
				<div className="jumbotron">
					<h1>GitHub User</h1>
					<div className="row">
						<form onSubmit={this.handleSubmit}>
							<div className="form-group">
								<label className="control-label">Username</label>
								// ref - com o valor de ref eu consigo pegar essa value em outro método como se fosse um model
								<input type="text" className="form-control" ref="username" placeholder="Ex: wesleysaraujo"/>
							</div>
							<button className="btn btn-primary">Buscar</button>
						</form>
					</div>
				</div>
		)
	}
})	

module.exports = GitHub
