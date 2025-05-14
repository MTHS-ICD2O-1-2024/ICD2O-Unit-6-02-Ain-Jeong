// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: May 2025
// This file contains the JS functions for index.html

'use strict'

/**
 * This function counts the number of clicking of cookie
 */
// eslint-disable-next-line no-unused-vars
function cookieClicker () {
  // input
  let cookieClick = localStorage.getItem('cookieClick')

    if (cookieClick >= 1) {
    cookieClick = Number(cookieClick) + 1
  } else {
    cookieClick = 1
  }

  cookieClick = localStorage.getItem('cookieClick')

  // output
  document.getElementById('answer').innerHTML = cookieClick + ' Cookies'
}
