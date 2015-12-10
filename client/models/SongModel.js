// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    console.log("clicked play")
  },

  enqueue: function () {
    this.trigger('enqueue', this);
    console.log("enqueued!");
  },

  dequeue: function(){
    this.trigger("dequeue", this)
    console.log("dequeued!")
  },

  ended: function(){
    this.trigger('dequeued')
  }

});
