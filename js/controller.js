'use strict';

var view = {
  showPdf: function (){
    webViewerLoad();
    //$("#content").hide();
    $("#outerContainer").show();
  },
  hidePdf: function(){
    $("#outerContainer").hide();
    $("#content").show();
  }    
};

var init = function(){
  $("#outerContainer").hide();
  $("#showPdf").click( view.showPdf );
  $("#pdfViewExit").click( view.hidePdf );

};

$(document).ready( init );
