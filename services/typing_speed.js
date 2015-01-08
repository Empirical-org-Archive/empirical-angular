function TypingSpeed() {};

module.exports = TypingSpeed;

TypingSpeed.prototype = {

  // Service is stateful so need to reset it between runs.
  reset: function() {
    this._tracking = false;
    this._startTime = null;
    this.wordCount = null;
    this.waitTime = null;
  },

  startTracking: function() {
    if (this._tracking) {
      return;
    }
    if (!this._startTime) {
      this._startTime = new Date();      
    }
    this._tracking = true;
    // console.log('started tracking');
  },

  stopTracking: function() {
    if (!this._tracking) {
      return;
    }
    this._tracking = false;
    var endTime = new Date();
    // console.log('stop tracking');
    // console.log('wordCount', this.wordCount);
    // console.log('wait time', this.waitTime);
    var totalSeconds = this._getElapsedSeconds(this._startTime, endTime, this.waitTime);
    // console.log('totalSeconds', totalSeconds);
    this.wordsPerMinute = Math.floor(this._getWordsPerMinute(totalSeconds, this.wordCount));
    // console.log('wordsPerMinute', this.wordsPerMinute);
  },

  // waitTime corresponds to the time (ms) it takes for the app to figure out that the user has stopped typing.
  // If this is provided, subtract that time from the total
  _getElapsedSeconds: function(startTime, endTime, waitTime) {
    var diff = endTime - startTime;
    if (waitTime) {
      diff = diff - waitTime;
    }
    return diff / 1000;
  },

  _getWordsPerMinute: function(seconds, wordCount) {
    return wordCount / (seconds / 60);
  }
}
