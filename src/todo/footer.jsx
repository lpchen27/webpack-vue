import '../styles/footer.styl'

export default {
	data(){
		return {
			author:'lpchen'
		}
	},
	render(){
		return (
			<div id="footer">
				<span>writen by {this.author}</span>
			</div>
		)
	}
}