var root = 'https://api.github.com/orgs/priotas';

$(document).ready(function() {



    $("#repos").typed({
        strings: [
            'grep -ri console.log *',
            'git reset --hard', 
            'ps faux | grep dump', 
            'du -ck', 
            'man man',
            'npm install webpack -g',
            'lynx https://www.priotas.de',
            'bin/behat -vv --profile ci --tags "~@performance"',
            'git clone <a href="https://github.com/priotas/twig-qrcode-extension">https://github.com/priotas/twig-qrcode-extension</a>'
        ],
        typeSpeed: 100,
        loop: true,
        cursorChar: "|",
        shuffle: true,
        callback: function() {
            //console.log($('#repos').text());
        }
    });

    /** 
    $.get(root, function(data) {

        var typings = [];

        $.get(data.repos_url, function(repos) {

            $.each(repos, function(key, repo) {
            });

        });
    });
    */
});