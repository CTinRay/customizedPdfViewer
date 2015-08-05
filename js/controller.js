'use strict';

var model = {
  nowPdfUrl: ""
};

var view = {

  showPdf: function (){

    // Not hiding content is ok. (Hide it is also ok.)
    // $("#content").hide(); 
    
    // Show the viewer
    $("#outerContainer").show();
    DEFAULT_URL = controller.getNowPdfUrl();
    webViewerLoad();

  },

  hidePdf: function(){
    $("#outerContainer").hide();
    $("#content").show();
  }    
};

var controller = {

  getNowPdfUrl: function(){
    return model.nowPdfUrl;
  },

  updateNowPdfUrl: function(){
    model.nowPdfUrl = $("#pdfUrl").val();
  },

  init: function(){
    // Hide the viewer
    $("#outerContainer").hide();
    // Add event listeners
    $("#showPdf").click( view.showPdf );
    $("#pdfViewExit").click( view.hidePdf );
    $("#pdfUrl").change( controller.updateNowPdfUrl );
    // Update model to default pdfURL
    controller.updateNowPdfUrl();
  }
};



$(document).ready( controller.init );
