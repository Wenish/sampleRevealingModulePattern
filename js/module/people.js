//people module
(function() {
    var people = ['Steve', 'Alan'];

    //cache DOM
    var $el = $('#peopleModule');
    var $button = $el.find('button');
    var $input = $el.find('input');
    var $ul = $el.find('ul');
    var template = $el.find('#people-template').html();

    //bind events
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', deletePerson);

    render();

    function render() {
        $ul.html('')
        for (var i = 0; i < people.length; i++) {
            var item = template;
            item = item.replace('{{name}}', people[i])
            $ul.append(item)
        }
        function pushPeople(){
          events.emit("peopleChanged", people.length)
        }
        setTimeout(pushPeople, 0)
    }

    function addPerson(value) {
        var name = (typeof value === "string") ? value : $input.val();
        people.push(name);
        render();
        $input.val('');
    }

    function deletePerson(event) {
        var i;
        if (typeof event === "number") {
            i = event;
        } else {
            var $remove = $(event.target).closest('li');
            i = $ul.find('li').index($remove);
        }
        people.splice(i, 1);
        render();
    }
})();
