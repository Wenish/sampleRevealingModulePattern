// Stats module
(function() {
    var people = 0;

    //cache DOM
    var $stats = $('#statsModule');
    var template = $('#stats-template').html();

    //bind events
    events.on('peopleChanged', setPeople);
    render();

    function render() {
        $stats.html('');
        var item = template;
        item = item.replace('{{zahl}}', people)
        $stats.html(item);
    }

    function setPeople(newPeople) {
        people = newPeople;
        render();
    }
})();
