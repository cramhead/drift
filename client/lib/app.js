setTimeout(function() {
    var emitter = new LucidJS.EventEmitter();
    emitter.flag('ready');
    console.log('fired ready event');
    emitter.bind('ready', function() {
        console.log('listener bound and executed after ready event');
    });
}, 1000);
