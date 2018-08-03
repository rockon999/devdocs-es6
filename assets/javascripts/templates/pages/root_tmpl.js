// TODO This was an erb template

app.templates.splash = "<div class=\"_splash-title\">DevDocs</div>";

// TODO
//<% if App.development? %>
app.templates.intro = `\
<div class="_intro"><div class="_intro-message">
  <a href="#" class="_intro-hide" data-hide-intro>Stop showing this message</a>
  <h2 class="_intro-title">Hi there!</h2>
  <p>Thanks for downloading DevDocs. Here are a few things you should know:
  <ol class="_intro-list">
    <li>Your local version of DevDocs won't self-update. Unless you're modifying the code,
        I&nbsp;recommend using the hosted version at <a href="https://devdocs.io">devdocs.io</a>.
    <li>Run <code>thor docs:list</code> to see all available documentations.
    <li>Run <code>thor docs:download &lt;name&gt;</code> to download documentations.
    <li>Run <code>thor docs:download --installed</code> to update all downloaded documentations.
    <li>To be notified about new versions, don't forget to <a href="https://github.com/freeCodeCamp/devdocs/subscription">watch the repository</a> on GitHub.
    <li>The <a href="https://github.com/freeCodeCamp/devdocs/issues">issue tracker</a> is the preferred channel for bug reports and
        feature requests. For everything else, use the <a href="https://groups.google.com/d/forum/devdocs">mailing list</a>.
    <li>Contributions are welcome. See the <a href="https://github.com/freeCodeCamp/devdocs/blob/master/CONTRIBUTING.md">guidelines</a>.
    <li>DevDocs is licensed under the terms of the Mozilla Public License v2.0. For more information,
        see the <a href="https://github.com/freeCodeCamp/devdocs/blob/master/COPYRIGHT">COPYRIGHT</a> and
        <a href="https://github.com/freeCodeCamp/devdocs/blob/master/LICENSE">LICENSE</a> files.
  </ol>
  <p>Happy coding!
</div></div>\
`;
// TODO
//<% else %>
app.templates.intro = `\
<div class="_intro"><div class="_intro-message">
  <a href="#" class="_intro-hide" data-hide-intro>Stop showing this message</a>
  <h2 class="_intro-title">Welcome!</h2>
  <p>DevDocs combines multiple API documentations in a fast, organized, and searchable interface.
     Here's what you should know before you start:
  <ol class="_intro-list">
    <li>Open the <a href="/settings">Preferences</a> to enable more docs and customize the UI.
    <li>You don't have to use your mouse &mdash; see the list of <a href="/help#shortcuts">keyboard shortcuts</a>.
    <li>The search supports fuzzy matching (e.g. "bgcp" brings up "background-clip").
    <li>To search a specific documentation, type its name (or an abbr.), then Tab.
    <li>You can search using your browser's address bar &mdash; <a href="/help#browser_search">learn how</a>.
    <li>DevDocs works <a href="/offline">offline</a>, on mobile, and can be installed on <a href="https://chrome.google.com/webstore/detail/devdocs/mnfehgbmkapmjnhcnbodoamcioleeooe">Chrome</a>.
    <li>For the latest news, follow <a href="https://twitter.com/DevDocs">@DevDocs</a>.
    <li>DevDocs is free and <a href="https://github.com/freeCodeCamp/devdocs">open source</a>.
        <iframe class="_github-btn" src="//ghbtns.com/github-btn.html?user=freeCodeCamp&repo=devdocs&type=watch&count=true" allowtransparency="true" frameborder="0" scrolling="0" width="100" height="20"></iframe>
    <li>And if you're new to coding, check out <a href="https://www.freecodecamp.org/">freeCodeCamp's open source curriculum</a>.
  </ol>
  <p>Happy coding!
</div></div>\
`;
// TODO
//<% end %>

app.templates.mobileIntro = `\
<div class="_mobile-intro">
  <h2 class="_intro-title">Welcome!</h2>
  <p>DevDocs combines multiple API documentations in a fast, organized, and searchable interface.
     Here's what you should know before you start:
  <ol class="_intro-list">
    <li>Pick your docs in the <a href="/settings">Preferences</a>.
    <li>The search supports fuzzy matching.
    <li>To search a specific documentation, type its name (or an abbr.), then Space.
    <li>For the latest news, follow <a href="https://twitter.com/DevDocs">@DevDocs</a>.
    <li>DevDocs is <a href="https://github.com/freeCodeCamp/devdocs">open source</a>.
  </ol>
  <p>Happy coding!
  <a class="_intro-hide" data-hide-intro>Stop showing this message</a>
</div>\
`;

app.templates.androidWarning = `\
<div class="_mobile-intro">
  <h2 class="_intro-title">Hi there</h2>
  <p>DevDocs is running inside an Android WebView. Some features may not work properly.
  <p>If you downloaded an app called DevDocs on the Play Store, please uninstall it — it's made by someone who is using (and profiting from) the name DevDocs without permission.
  <p>To install DevDocs on your phone, visit <a href="https://devdocs.io" target="_blank" rel="noopener">devdocs.io</a> in Chrome and select "Add to home screen" in the menu.
</div>\
`;

app.templates.httpWarning = `\
<div class="_intro"><div class="_intro-message">
  <h2 class="_intro-title">Hi there!</h2>
  <p>DevDocs is migrating to HTTPS.
  <p>Please update your bookmarks to point to <a href="https://devdocs.io">https://devdocs.io</a>.
  <p>When using the HTTPS version, your preferences will carry over automatically, but your offline data will be reset. Simply re-download documentation in the <a href="https://devdocs.io/offline">Offline area</a>, and you'll be all set to use DevDocs securely offline.
  <p>Sorry for the inconvenience. This migration is needed because browsers are removing support for certain DOM APIs that power DevDocs's offline mode over non-secure origins.
  <p>Thanks for using DevDocs, and happy coding!
</div></div>\
`;
