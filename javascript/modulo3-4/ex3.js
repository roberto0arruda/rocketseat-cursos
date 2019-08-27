var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');

function renderRepositories(repositories) {

    for (repo of repositories) {
        var textElement = document.createTextNode(repo.name);
        var liElement = document.createElement('li');

        liElement.appendChild(textElement);
        listElement.appendChild(liElement);
    }
}

function renderLoading(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Carregando...');
    var loadingElement = document.createElement('li');
    loadingElement.appendChild(textElement);
    listElement.appendChild(loadingElement);
}

function userTitle(user) {
    listElement.innerHTML = "";
    var h1Element = document.createElement('h1');
    var textH1 = document.createTextNode('User => ' + user);
    h1Element.appendChild(textH1);
    listElement.appendChild(h1Element);
}

function renderError(loading) {
    listElement.innerHTML = "";
    var textElement = document.createTextNode('Erro!');
    var errorElement = document.createElement('li');
    errorElement.style.color = "#F00";
    errorElement.appendChild(textElement);
    listElement.appendChild(errorElement);
}

function listRepos() {
    var user = inputElement.value;

    if (!user) return;

    renderLoading();

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            userTitle(user);
            renderRepositories(response.data);
        }).catch(function (error) {
            console.warn(error);
            renderError();
        })

    inputElement.value = '';
}
