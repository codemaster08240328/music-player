import React from 'react';
import { visibleFilter } from '../actions/';
import { connect } from 'react-redux';

class SearchBar extends React.Component{
	handleChange() {
		//console.log("/////////////",this.refs.filterTextInput.value);
	    
	    	this.props.setFilter(this.refs.filterTextInput.value);
	 }
	render(){
		
		return(
			<form>
	        	<input className="searchInput"
	        	  	type="text" placeholder="Search for artists or tracks"  ref="filterTextInput" onChange={this.handleChange.bind(this)}
	       		/>
	      	</form>
		);
	}
}

const mapDispatchToProps = dispatch => {
  return {
    setFilter:filter => {

      dispatch(visibleFilter(filter));
    }
  }
}

function mapStateToProps(state){
	return{
		state:state
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);