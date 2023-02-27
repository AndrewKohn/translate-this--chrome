'use strict';

// let languages = {
//   English: 'en',
//   Spanish: 'es',
//   French: 'fr',
//   Korean: 'ko',
//   Japanese: 'ja',
//   Finnish: 'fi',
// };

chrome.runtime.onInstalled.addListener(() => {
  let contextMenuItem = {
    id: 'translate',
    title: 'translateThis',
    contexts: ['selection'],
  };

  chrome.contextMenus.create(contextMenuItem);

  // // Context menu dropdown
  // for (let language of Object.keys(languages)) {
  //   chrome.contextMenus.create({
  //     id: language,
  //     title: language,
  //     type: 'normal',
  //     contexts: ['selection'],
  //   });
  // }
});

chrome.contextMenus.onClicked.addListener(function (info, tab) {
  let selectedLanguage = 'en';

  // let selectedLanguage = languages[info.menuItemId];
  // let newURL =
  //   'https://translate.google.com/?sl=auto&tl=' +
  //   selectedLanguage +
  //   '&text=' +
  //   info.selectionText +
  //   '&op=translate';

  let newURL = `https://translate.google.com/?sl=auto&tl=${selectedLanguage}&text=${info.selectionText}&op=translate`;

  chrome.tabs.create({ url: newURL });
});
