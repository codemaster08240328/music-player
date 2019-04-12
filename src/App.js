import React, { Component } from 'react';
//import React, { PureComponent } from 'react';
import * as $ from 'jquery';
import PlayerPanel from './components/PlayerPanel';
import PlayList from './components/PlayList';
import { addSong } from './actions/';
import {connect} from 'react-redux';

import './App.css';

class App extends Component {
  
  
  constructor(props){
    super(props);
   
    // props.songs.map(song=>{
    //   props.inputSong(song);
    // });
    this.songswithduration = [];
    props.songs.map((song,index)=>{
      
      this.getDuration(song.url,function(length,aaa){
        length = aaa.formatTime(length);
        var songwithdur = Object.assign({},song,{duration:length});
        // console.log('withduration////////',songwithdur);
        aaa.props.inputSong(songwithdur);

        // aaa.setState({durations:durationarray});
         
        // span[index].textContent = aaa.formatTime(length);

      });
    });
    // props.songs.map(song=>{
    //   props.inputSong(song);
    // });

    

  }

  formatTime(s){
      var total_seconds = Math.floor(s);
      var hours = Math.floor( total_seconds / 3600 );
      var minutes = Math.floor( total_seconds / 60 ) - hours*60; 
      var seconds = total_seconds - hours*3600 - minutes*60;
      if(hours)
        return hours + ':' + this.forma2Num(minutes) + ':' + this.forma2Num(seconds);
      return this.forma2Num(minutes) + ':' + this.forma2Num(seconds);
  }
    
  forma2Num(num){
      var str = num + "";
      if(str.length == 1){
        return '0'+str;
      }
      if(str.length == 0){
        return '00';
      }
      return str;
  }

  componentWillMount(){
    //console.log(this.props.songs);
    // console.log("willMount----------->",this.props.state);

  }
  getDuration(src, cb) {
      var audio = new Audio();
      var aaa = this;
      $(audio).on("loadedmetadata", function(){
          cb(audio.duration,aaa);
      });
      audio.src = src;
  }
  // componentDidMount(){
  //   var span = document.getElementsByClassName('duration');
  //   this.state.songs.map((item,index)=>{

  //     var durationarray = [];
  //     this.getDuration(item.url,function(length,aaa){
  //       durationarray.push(aaa.formatTime(length));
  //       aaa.setState({durations:durationarray});
         
  //       span[index].textContent = aaa.formatTime(length);

  //     });
  //   });
  // }

  

 

 

  render() {
    
    return (
      
        <PlayerPanel />
        
      
    );
  }
}

const mapDispatchToProps = dispatch => {
  return{
    inputSong:song => {
      dispatch(addSong(song));
    }
  }
}

function mapStateToProps(state){
  
  return{
    state:state
  }
  

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
