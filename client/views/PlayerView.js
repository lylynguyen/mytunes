// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio class="myAudio" controls autoplay />',

events: {
    'ended': function() {
      this.model.ended();
      // this.model.play();
    }
  },

  initialize: function() {
    // var sq = this.get('songQueue');
    // if(sq.length > 0){
    //   var targetSong = this.get("songQueue").first()
    //   this.setSong(targetSong);
    // }
    // var currsong = this.model.get('currentSong');
    // console.log(currsong);
    this.model.on("change:currentSong", this.model.play);
    // this.setSong(currsong);
    
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
