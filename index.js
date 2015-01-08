module.exports = 

angular.module('empirical-angular', [])
  .service('ActivitySession', require('./services/activity_session.js'))
  .service('ConceptTagResult', require('./services/concept_tag_result.js'))
  .service('TypingSpeed', require('./services/typing_speed.js'))
  .directive('typingSpeed', require('./directives/typing_speed.js'))
;