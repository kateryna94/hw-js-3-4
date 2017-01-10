var questions = {
    1: 'Вопрос №1',
    2: 'Вопрос №2',
    3: 'Вопрос №3',
};

var answers = {
    1: {
        1: 'Вариант ответа №1',
        2: 'Вариант ответа №2',
        3: 'Вариант ответа №3',
    },
    2: {
        1: 'Вариант ответа №1',
        2: 'Вариант ответа №2',
        3: 'Вариант ответа №3',
    },
    3: {
        1: 'Вариант ответа №1',
        2: 'Вариант ответа №2',
        3: 'Вариант ответа №3',
    },
}

var obj = {


    genTopLevel: function() {
        var wrapper = document.createElement('form');
        wrapper.classList.add('container-fluid');
        this.genTitle(wrapper);
        this.genTest(wrapper);
        this.genButton(wrapper);
        document.body.appendChild(wrapper);
    },

    genTitle: function(wrapper) {

        var title = document.createElement('h2');
        title.innerHTML = 'Тест по программированию';
        title.classList.add('text-center');
        wrapper.appendChild(title);
    },

    genTest: function(wrapper) {

        var menu = document.createElement('ul');
        wrapper.appendChild(menu);
        menu.classList.add('menu');

        for (i = 1; i < 4; i++) {
            var menuItem = document.createElement('li');
            menuItem.innerHTML = questions[i];
            menu.appendChild(menuItem);

            var subMenu = document.createElement('div');
            menuItem.appendChild(subMenu);

            for (var j = 1; j < 4; j++) {

                var containVar = document.createElement('div');
                containVar.classList.add("row");

                var emptyVar = document.createElement('div');
                emptyVar.classList.add("col-lg-1");
                emptyVar.classList.add("col-md-1");

                var answVar = document.createElement('div');
                answVar.classList.add("col-lg-11");
                answVar.classList.add("col-md-11");

                var subMenuCheckbox = document.createElement('input');
                subMenuCheckbox.type = "checkbox";
                subMenuCheckbox.name = "name";
                subMenuCheckbox.value = "value";
                subMenuCheckbox.id = "id";
                // subMenu.appendChild(subMenuCheckbox);

                var subMenuLabel = document.createElement('label');
                subMenuCheckbox.name = "name";
                subMenuCheckbox.value = "value";
                subMenuCheckbox.id = "id";
                subMenuLabel.innerHTML = answers[i][j];
                // subMenu.appendChild(subMenuLabel);

                containVar.appendChild(emptyVar);

                answVar.appendChild(subMenuCheckbox);
                answVar.appendChild(subMenuLabel);
                containVar.appendChild(answVar);
                // containVar.appendChild(emptyVar);
                subMenu.appendChild(containVar);
            }
        }
    },

    genButton: function(wrapper) {

        var result = document.createElement('input');
        result.type = "submit";
        result.name = "name";
        result.value = "Проверить мои результаты";
        result.id = "id";
        result.className = 'btn btn-primary btn-lg col-lg-offset-4 col-md-offset-4';
        // result.className = 'col-lg-offset-2';
        wrapper.appendChild(result);
    }


}

obj.genTopLevel();
