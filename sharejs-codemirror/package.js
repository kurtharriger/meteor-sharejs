Package.describe({
  name: "kurtharriger:sharejs-codemirror",
  summary: "ShareJS with the CodeMirror Editor",
  version: "5.14.3",
  git: "https://github.com/mizzao/meteor-sharejs.git"
});

Package.onUse(function (api) {
  api.versionsFrom("1.3");

  api.use(['coffeescript', 'templating']);

  api.use("mizzao:sharejs@0.8.0");
  api.imply("mizzao:sharejs");

  // CM editor for the client
  api.addFiles([
    'codemirror/lib/codemirror.js',
    'codemirror/lib/codemirror.css',
    'codemirror/theme/monokai.css',
    'codemirror/addon/fold/foldgutter.css',
    'codemirror/addon/fold/foldcode.js',
    'codemirror/addon/fold/foldgutter.js',
    'codemirror/addon/fold/indent-fold.js',
    'codemirror/addon/hint/show-hint.js',
    'codemirror/addon/display/placeholder.js',
    'codemirror/addon/hint/show-hint.css'
    /* include any extra codemirror ADDONS or MODES or THEMES here !!!! */
  ], 'client', { bare: true });

  api.addFiles([
    'templates.html',
    'client.coffee',
    'cm.js'
  ], 'client');
});
