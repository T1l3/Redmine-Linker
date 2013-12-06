'use strict';

var story_regex = '#[0-9]+';

chrome.storage.sync.get("redmine_url", function(data) {
    if(!data['redmine_url']){
      return;
    }

    var redmine_url = data['redmine_url'];

	// Github commit page
	$(".commit-group .commit").each(function(index) {
		var commit_title = $(this).children('.commit-title').children('a').text();
		var story_id = '';

		if(story_id = commit_title.match(story_regex)) {
			story_id = story_id[0].substr(1);
			$(this).children('.commit-title').children('a').after('<a href="' + redmine_url + story_id + '" class="redmine-link" target="_blank"><img src="' + chrome.extension.getURL('images/redmineicon-16.png') + '"></a>');
		}
	});
});
