// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.on("add", function(){
      if(this.length < 2){
        this.at(0).play()
      }
    }, this)
    this.on("dequeued", function(){
      this.shift();
    })
  }




  //listen for enequeue
    //check if collection has more than one song
      //if doesnt, play this  

});