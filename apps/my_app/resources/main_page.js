// ==========================================================================
// Project:   MyApp - mainPage
// Copyright: ©2011 My Company, Inc.
// ==========================================================================
/*globals MyApp */

// This page describes the main user interface for your application.  
MyApp.mainPage = SC.Page.design({

  // The main pane is made visible on screen as soon as your app is loaded.
  // Add childViews to this pane for views to display immediately on page 
  // load.
  mainPane: SC.MainPane.design({
    childViews: 'list details'.w(),
    
    list: SC.ListView.design({
      layout: { top:30, left: 30, width: 100, height: 100},
      contentBinding: 'MyApp.applesController.arrangedObjects',
      contentValueKey: 'color',
      selectionBinding: 'MyApp.applesController.selection',
      backgroundColor: 'yellow'
    }),
    details: MyApp.AppleView.design({
      layout: {top:30, left:160, width: 150, height: 150},
      backgroundColor: 'white'
    })
  })

});
