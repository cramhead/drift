Meteor.startup(function() {
    if (items.find().count() === 0) {
        var insertCallback = function(err, result) {
            if (err) {
                console.log('error: ' + err.reason);
            }
        };

        for (var i = 1000 - 1; i >= 0; i--) {
            items.insert({
                title: "title " + i,
                description: "description " + i,
                creationDate: new Date()
            }, insertCallback);
        }
    }
});
