# binder-utils
Utility functions that appear in multiple Binder modules

### install
```
npm install binder-utils
```

### api
`startWithPM2(app, cb)`

Launches an application, specified by a [PM2 app specification](http://pm2.keymetrics.io/docs/usage/application-declaration/)
- `app` object - PM2 application specification
- `cb` function - callback(err)
