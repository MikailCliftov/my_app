// ==========================================================================
// Project:   MyApp.Apple
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document your Model here)

  @extends SC.Record
  @version 0.1
*/
MyApp.Apple = SC.Record.extend(
/** @scope MyApp.Apple.prototype */ {

  // TODO: Add your own code here.
  color: SC.Record.attr('String'),
  shape: SC.Record.attr('String'),
  taste: function(){
    var aTaste = 'good';
    var color = this.get('color');
    if (color == 'green'){
      return 'blech';
    }
    return aTaste;
  }.property()
}) ;
