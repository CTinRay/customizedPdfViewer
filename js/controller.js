'use strict';

	

var model = {
    materials: [
	{
	    name: "Homepage",
	    url: "content/cover.html",
	    type: "HTML"
	},

	{
	    name: "Test1",
	    url: "content/test.pdf",
	    type: "PDF"
	},
	{
	    name: "Compressed.tracemonkey",
	    url: "content/compressed.tracemonkey-pldi-09.pdf",
	    type: "PDF"
	},
	{
	    name: "HTML Content",
	    url: "content/content.html",
	    type: "HTML"
	}
	  
    ],
    nowMaterial: undefined
};


var controller = {


    getMaterials: function(){
	return model.materials;
    },

    getNowMaterial: function(){
	return model.nowMaterial;
    },
    
    setNowMaterial: function( nowMaterial ){
	model.nowMaterial = nowMaterial;
	controller.turnOffSidebar();
	view.updateViewer();
    },

    turnOnSidebar: function(){
	view.showSidebar();
	$("#contentViewerContainer").click( controller.turnOffSidebar );
    },

    turnOffSidebar: function(){
	view.hideSidebar();
	$("#contentViewerContainer").off( "click", controller.turnOffSidebar );
    },
        
    init: function(){
	view.showMaterialList();
	controller.setNowMaterial( model.materials[0] );
	$("#sidebarSwitchButton").click( controller.turnOnSidebar );
    }
};


var view = {

    viewers: {
	// Each type of content has correspond viewer.
	// A viewer must has methon show and hide. 
	// The name of the viewer is ` type + "Viewer" `.
	// (Follow the naming rule is important.
	//  Because some functions in object `view` rely on the name to find the viewer. )
	PDFViewer: {
	    show: function(){		
		var nowMaterial = controller.getNowMaterial();
		var onLoad = function (){
		    DEFAULT_URL = nowMaterial.url;
		    webViewerLoad();

		};
		$("#contentViewerContainer").load( "viewers/PDFViewer.html", onLoad );
	    },
	    hide: function(){
		$("#contentViewerContainer").empty();
		window.removeEventListener('DOMMouseScroll', handleMouseWheel);
		window.removeEventListener('mousewheel', handleMouseWheel);
		$("#fileInput").remove();
	    }
	},

	HTMLViewer: {
	    show: function(){
		var nowMaterial = controller.getNowMaterial();
		$("#contentViewerContainer").load( nowMaterial.url );
	    },
	    hide: function(){
		$("#contentViewerContainer").empty();
	    }
	},

	VideoViewer: {
	    show: function(){
		// To be implemented.
	    },
	    hide: function(){
		// To be implemented.
	    }
	}
    },
    
    
    showMaterialList: function(){
	var materials = controller.getMaterials();
	for( var material of materials ){
	    var div = $( "<div/>" )
		    .text( material.name )
		    .click( function(material){			
			return function(){
			    // Store the material to set when clicked by using closure.
			    controller.setNowMaterial( material );
			};
		    }(material));			  
	    $( "#materialList" ).append( div );
	}
    },

    updateViewer: function(){
	view.nowViewer = view.nowViewer || view.viewers.PDFViewer;
	view.nowViewer.hide();
	var nowMaterial = controller.getNowMaterial();
	view.nowViewer = view.viewers[ nowMaterial.type + "Viewer" ];
	view.nowViewer.show();	
    },

    showSidebar: function(){
	$("#sidebar").show();
	//$("#sidebar").animate( {left: "0px" }, 1000, "linear" ) ;
	$("#sidebarSwitchDiv").hide();
    },

    hideSidebar: function(){	
	// $("#sidebar").animate( {left: "calc( 0 - 100% )" }, 100, "linear",
	// 		       function(){ $("#sidebar").hide(); } ) ;
	$("#sidebar").hide();
	$("#sidebarSwitchDiv").show();
    }
};



$(document).ready( controller.init );
