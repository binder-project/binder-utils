var pm2 = require('pm2')

module.exports = {
  startWithPM2: function (app, cb) {
    pm2.connect(function (err) {
      if (err) {
        console.error(err)
        process.exit(2)
      }
      pm2.start(app, function (err, apps) {
        if (err) {
          console.error(err)
        }
        pm2.disconnect()
        if (cb) {
          return cb(err)
        }
        return err
      })
    })
  }
}
