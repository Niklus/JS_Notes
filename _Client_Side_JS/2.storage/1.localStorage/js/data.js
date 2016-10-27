var model = {
    
    init: function() {
        if (!localStorage.data) {
            localStorage.data = JSON.stringify([]);
        }
    },

    addData: function(obj) {
        var data = JSON.parse(localStorage.data);
        data.push(obj);
        localStorage.data = JSON.stringify(data);
    },

    getData: function() {
        return JSON.parse(localStorage.data);
    },

    deleteData: function(pos) {
        var data = JSON.parse(localStorage.data);
        data.splice(pos,1);
        localStorage.data = JSON.stringify(data);   
    },

    clearData: function(){   
        localStorage.data = JSON.stringify([]);
    }
};


var ctrl = {

    init: function() {
        model.init();
        view.init();
    },

    addData: function(data) {
        
        model.addData({
            content: data
        });
        view.render();
    },

    getData: function() {
        return model.getData();
    },

    deleteData: function(pos){
        model.deleteData(pos);
        view.render();
    },

    clearData: function() {
        model.clearData();
        view.render();
    }
};

var view = {

    init: function() {

        $('#data').on('keypress',function(e){
            
            var data = $(this).val();
            if(e.keyCode==13 && data){  
                ctrl.addData(data);
                $(this).val('');
            }
        });

        $('#list').on('click',function(e){

            var pos = e.target.id;   
            if(pos){
                ctrl.deleteData(pos);
            } 
        });

        $('#clear').on('click',function(e){
            ctrl.clearData();
        });

        this.render();  
    },

    render: function(){

        var list = $('#list').html('');
        var data = ctrl.getData();
        
        $.each(data, function(index, obj) {

            var button = $('<button>')
                .attr('id', index)
                .text('x');
            var content = $('<li>')
                .text(obj.content+' ')
                .append(button);
            list.append(content);
        });
    }
};  

ctrl.init();  