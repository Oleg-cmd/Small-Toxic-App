import React from 'react'

import { Helmet } from 'react-helmet'

import { Form } from './components/Form'
import { Header } from './components/Header'

import './styles/App.css'

export const App = () => {
  return (
    <div className='App'>
      <Helmet>
        <link
          rel='stylesheet'
          href='https://fonts.googleapis.com/css?family=Roboto'
        />
      </Helmet>
      <Header />
      <div className='container'>
        <Form />
      </div>
    </div>
  )
}
