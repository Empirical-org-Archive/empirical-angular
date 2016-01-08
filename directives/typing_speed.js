module.exports =

['TypingSpeed', '_', function(TypingSpeed, _) {
  return {
    restrict: 'A',
    require: '^ngModel',
    link: function(scope, element, attrs, model) {

      // TODO: Make this configurable
      TypingSpeed.waitTime = 500; // milliseconds

      element.on('keydown', function() {
        TypingSpeed.startTracking();
      });

      element.on('keyup blur', _.debounce(function() {
        TypingSpeed.wordCount = getWordCount();
        TypingSpeed.stopTracking();
      }, TypingSpeed.waitTime));

      function getWordCount() {
        var text = model.$viewValue;
        if (text) {
          if (text.trim().length) { // Don't count leading/trailing spaces.
            return text.split(' ').length;
          }
        } else {
          return 0;
        }
      }
    }
  };
}];
