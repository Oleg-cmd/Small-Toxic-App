import React from 'react'
import { useState } from 'react'
import ClipLoader from 'react-spinners/ClipLoader'
import { Graphs } from './Graphs'
require('@tensorflow/tfjs')
const toxicity = require('@tensorflow-models/toxicity')

export const Form = () => {
  //const [predict, setpredict] = useState('')

  const [form, setForm] = useState({
    sentense: '',
  })
  const [loading, setLoading] = useState(false)
  const [ready, setReady] = useState(false)
  const [pred, setPred] = useState(null)

  const Change = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value })
  }
  let toSend = async () => {
    setLoading(true)
    console.log(form.sentense)
    const threshold = 0.75
    toxicity.load(threshold).then((model) => {
      const sentences = form.sentense
      model.classify(sentences).then((predictions) => {
        setPred(predictions)
        setLoading(false)
        setReady(true)
      })
    })
  }
  let Comp = () => {
    if (ready && pred != null) {
      return <Graphs predictions={pred} />
    } else {
      return <div></div>
    }
  }
  return (
    <div>
      <div className='check'>
        <p>Check your toxic there...</p>
      </div>

      <div className='form-group'>
        <input
          onChange={Change}
          value={form.sentense}
          id='sentense'
          name='sentense'
          type='text'
          placeholder='Enter some text'
          className='main__input'
        />
      </div>
      <button onClick={toSend} className='btn process'>
        process
      </button>
      <div className='loader'>{loading && <ClipLoader size={80} />}</div>
      <Comp />
    </div>
  )
}
