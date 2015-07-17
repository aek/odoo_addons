
openerp.solt_button = function (instance) {

	instance.web.form.JSCodeButton = instance.web.form.WidgetButton.extend({
		on_click: function() {
			var self = this;
	        if(this.node.children.length > 0){
	        	_.each(this.node.children, function(child){
	        		if(child.tag == 'code' && child.children.length == 1){
	        			eval(child.children[0]);
	        		}
	        	})
	        }
	    }
    })
    
    instance.web.form.tags.add('solt_button', 'instance.web.form.JSCodeButton');

};