'use strict';

	

var model = {
    materials: [
	{
	    name: "test1.pdf",
	    url: "pdf/test.pdf",
	    type: "PDF"
	},
	{
	    name: "test2.pdf",
	    url: "pdf/test.pdf",
	    type: "PDF"
	},
	{
	    name: "test3.pdf",
	    url: "pdf/test.pdf",
	    type: "PDF"
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
	view.updateViewer();
    },

    turnOnSidebar: function(){
	view.showSidebar();
    },

    turnOffSidebar: function(){
	view.turnOffSidebar();
    },
        
    init: function(){
	view.showMaterialList();
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
		$("#outerContainer").show();
		DEFAULT_URL = nowMaterial.url;
		webViewerLoad();
	    },
	    hide: function(){
		$("#outerContainer").hide();
	    }
	},

	HTMLViewer: {
	    show: function(){
		// To be implemented.
	    },
	    hide: function(){
		// To be implemented.
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
	    var li = $( "<li></li>" )
		    .text( material.name )
		    .click( function(material){			
			return function(){
			    // Store the material to set when clicked by using closure.
			    controller.setNowMaterial( material );
			};
		    }(material));			  
	    $( "#materialList" ).append( li );
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
	$("#sidebarSwitchDiv").hide();
    },

    hideSidebar: function(){	
	$("#sidebar").hide();
	$("#sidebarSwitchDiv").show();
    }
};



$(document).ready( controller.init );
