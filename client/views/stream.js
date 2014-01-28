Template.stream.rendered = function() {
    // what should be done when the rendering of the template is finished?
};
Template.stream.events({
    // TODO:insert events here
});

Template.stream.helpers({
    // TODO:insert helpers here
});

Template.stream.items = function() {
    return getItems();
};

var queue = new PowerQueue({
    isPause: true
});
// queue.errorHandler = function(data, addTask) {
//     // This error handler lets the task drop, but we could use addTask to
//     // Put the task into the queue again
//     console.log(data.id);
// };

Template.item.rendered = function() {

    var item = $(this.find(".item"));

    queue.add(function(done) {

        //item.show();
        item.css("display", "block");
        done();

    });


};

Template.notification.queueLength = function() {
    return queue.length();
};

Template.notification.events = {
    'click #show': function(evt, tmpl) {
        evt.preventDefault();
        if (queue.isPaused()) {
            queue.run();
        } else {
            queue.pause();
        }
    }
};



Template.addItem.events = {
    'click #add': function(evt, tmpl) {
        evt.preventDefault();
        item = {};

        title = tmpl.find("#title");
        desc = tmpl.find("#description");
        item.title = title.value;
        item.description = desc.value

        items.insert(item, function(err, result) {
            if (err) {
                console.log('Error inserting item ' + err.reason);
                return;
            }

            $(title).val("");
            $(desc).val("");
        });
    }
}
