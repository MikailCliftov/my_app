// ==========================================================================
// Project:   MyApp.AppleView
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

/** @class

  (Document Your View Here)

  @extends SC.View
*/
MyApp.AppleView = SC.View.extend(SC.ContentDisplay, 
/** @scope MyApp.AppleView.prototype */ {

  appleBinding: 'MyApp.appleController.content',
  colorBinding: 'MyApp.colorController.content',
  shapeBinding: 'MyApp.shapeController.content',
  tasteBinding: 'MyApp.tasteController.content',
  applicationBinding: 'MyApp.applicationController.content',
  displayProperties: 'apple color shape taste'.w(),
  render: function(context, firstTime){
    var apple = this.get('apple');
    var color = this.get('color');
    var shape = this.get('shape');
    var taste = this.get('taste');
    var application = this.get('application');
    
    //var color = this.get('color');
    console.log('apple is: '+ apple);
    console.log('color is: '+ color);
    console.log('shape is: '+ shape);
    console.log('taste is: '+ taste);
    console.log('application is: '+ application);
    //context.begin('p').push(apple).end();
    arguments.callee.base.apply(this,arguments);
  }

});
; if ((typeof SC !== 'undefined') && SC && SC.Module && SC.Module.scriptDidLoad) SC.Module.scriptDidLoad('my_app');