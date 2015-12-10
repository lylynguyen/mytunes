// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio class="myAudio" controls autoplay />',

events: {
    'ended': function() {
      this.model.ended();
    }
  },

  initialize: function() {
    // var sq = this.get('songQueue');
    // if(sq.length > 0){
    //   var targetSong = this.get("songQueue").first()
    //   this.setSong(targetSong);
    // }
    this.collection.on("add", this.model.play, this)

    console.log(this.collection);
    this.model.on("change:finishedPlaying", function(){
      this.model.dequeue();     // this.model.dequeue(this.collection[0]) //FIX THIS LATER MAYBE?!
    })
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
