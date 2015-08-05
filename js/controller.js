'use strict';

var model = {
  nowPdfUrl: ""
};

var view = {
  showPdf: function (){
    DEFAULT_URL = controller.getNowPdfUrl();
    webViewerLoad();
    //$("#content").hide();
    $("#outerContainer").show();
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
    $("#outerContainer").hide();
    $("#showPdf").click( view.showPdf );
    $("#pdfViewExit").click( view.hidePdf );
    $("#pdfUrl").change( controller.updateNowPdfUrl );
    controller.updateNowPdfUrl();
  }
};



$(document).ready( controller.init );
