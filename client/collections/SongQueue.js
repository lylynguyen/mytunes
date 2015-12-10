// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("add", this.enqueue, this);
    this.on("dequeue", this.dequeue, this);
    this.on('ended', function(){
    this.shift();
      if(this.length >= 1){
        this.playFirst();
      }
    }, this);
  },
  playNext: function(){
    if(this.length >= 1){
      this.at(0).play();
    }
  },
  playFirst: function(){
    if(this.length >= 1){
    this.at(0).play();
    }
  },

  dequeue: function(song){
    //if(this.length >= 1){
      //this.playNext();
    //} else {
      this.remove(song);
    //}

  },
  enqueue: function(){
    if(this.length === 1){
        this.playFirst();
      }
  }




  //listen for enequeue
    //check if collection has more than one song
      //if doesnt, play this  

});