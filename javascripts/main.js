var root = 'https://api.github.com/orgs/priotas';

$(document).ready(function() {



    $("#repos").typed({
        strings: ['git log -1', 'ps faux | grep dump', 'du -ck'],
        typeSpeed: 200,
        loop: true,
        cursorChar: "|",
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