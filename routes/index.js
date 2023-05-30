var express = require('express')
var router = express.Router()
const passport = require('passport')

/*GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Museum Directory' })
})

// router.get('/', function (req, res, next) {
//   res.redirect('/museums')
// })
router.get(
  '/auth/google',
  passport.authenticate(
    // Which passport strategy is being used?
    'google',
    {
      scope: ['profile', 'email']
    }
  )
)

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate('google', {
    successRedirect: '/museums',
    failureRedirect: '/museums'
  })
)

// OAuth logout route
router.get('/logout', function (req, res) {
  req.logout(function () {
    res.redirect('/museums')
  })
})

module.exports = router
