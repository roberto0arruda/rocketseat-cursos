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

function listRepos() {
    listElement.innerHTML = '';
    var user = inputElement.value;    
    var h1Element = document.createElement('h1');
    var textH1 = document.createTextNode('User => ' + user);

    h1Element.appendChild(textH1);
    listElement.appendChild(h1Element);

    if (!user) return;

    axios.get('https://api.github.com/users/' + user + '/repos')
        .then(function (response) {
            renderRepositories(response.data);
        }).catch(function (error) {
            console.warn(error);
        })
    
    inputElement.value = '';
}
