'use strict'

const app = require('../app.js')

const signUpSuccess = function (data) {
  console.log('sign up ran')
  $('#message').text('Signed up successfully')
  console.log(data)
}

const signUpFailure = function (error) {
  $('#message').text('Error on sign up')
  console.error(error)
}

const signInSuccess = function (data) {
  app.user = data.user
  $('#message').text('Signed in successfully')
  console.log('signIn success. data is :', data)
}

const signInFailure = function (error) {
  $('#message').text('Error on sign in')
  console.log('signIn failure. error is :', error)
}

const signOutSuccess = function () {
  $('#message').text('Signed out successfully')
  console.log('signOut success. and nothing was returned')
  app.user = null
}

const signOutFailure = function (error) {
  $('#message').text('Error on sign out')
  console.log('signOut failure. error is :', error)
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  console.log('changePassword success. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  console.log('changePassword failure. error is :', error)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
