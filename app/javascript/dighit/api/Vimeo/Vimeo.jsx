import React from 'react'
import Vimeo from 'vimeo'



const Vimeos = () => {

let Vimeo = require('vimeo').Vimeo;
let client = new Vimeo("c58df2da4ba05e904dfca0a5b5c13b1b1e2e87a7","ZJx+YvMNDElCtf2vo2G5UGPGHifVtWy0/ubeLKJOWVu9yKvD7+bAB4amM4maee9ncg7Z/hLd1A7CDdThBzFPBxq829LNxMEeUqlApWwVDqficaW+8YOzhUK5XvqOl7lE", "8c8875b588fa09132271810eaede1ddc");
const test = () => {
client.request({
    path: '/videos',
    query: {
      page: 1,
      per_page: 10,
      query: 'prince batdance',
      sort: 'relevant',
      direction: 'asc'
    }
  }, function (error, body, statusCode, headers) {
    if (error) {
      console.log('error')
      console.log(error)
    } else {
      console.log('body')
      console.log(body)
      // console.log(util.inspect(body, false, null))
    }

    console.log('status code')
    console.log(statusCode)
    console.log('headers')
    console.log(headers)
  })
}


// var lib = new Vimeo("c58df2da4ba05e904dfca0a5b5c13b1b1e2e87a7", "ZJx+YvMNDElCtf2vo2G5UGPGHifVtWy0/ubeLKJOWVu9yKvD7+bAB4amM4maee9ncg7Z/hLd1A7CDdThBzFPBxq829LNxMEeUqlApWwVDqficaW+8YOzhUK5XvqOl7lE")

// function makeRequest (lib) {
//   lib.request({
//     path: '/videos',
//     query: {
//       page: 1,
//       per_page: 10,
//       query: 'vimeo staff',
//       sort: 'relevant',
//       direction: 'asc'
//     }
//   }, function (error, body, statusCode, headers) {
//     if (error) {
//       console.log('error')
//       console.log(error)
//     } else {
//       console.log('body')
//       console.log(util.inspect(body, false, null))
//     }

//     console.log('status code')
//     console.log(statusCode)
//     console.log('headers')
//     console.log(headers)
//   })
// }

  return (
    <h1 onClick={test}>je suis vimeo</h1>
  )
}

export default Vimeos
