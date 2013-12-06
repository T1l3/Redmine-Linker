'use strict';

// Saves options with Chrome extension storage API.
function save_options() {
  var redmine_url = $('#redmine_url').val();
  var status = $('#status');

  if (!redmine_url) {
    status.html('Error: No value specified');
    return;
  }

  chrome.storage.sync.set({'redmine_url': redmine_url}, function() {
    status.html('Redmine URL saved');
  });
}

function restore_options() {
  chrome.storage.sync.get("redmine_url", function(data) {
    if(!data['redmine_url']){
      return;
    }

    $('#redmine_url').val(data['redmine_url']);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.querySelector('#save').addEventListener('click', save_options);
