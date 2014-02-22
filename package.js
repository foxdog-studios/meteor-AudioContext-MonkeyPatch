Package.describe({
  summary: 'Monkeypatch to use proper AudioContext naming on prefixed/deprecated named systems.'
});

Package.on_use(function (api, where) {
  api.add_files('lib/audiocontext-monkeypatch/AudioContextMonkeyPatch.js',
    ['client']);
});

