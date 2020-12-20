import React from 'react'

export const Graphs = (predictions) => {
  let matching = predictions.predictions
  console.log(matching)
  let fetch

  fetch = matching.map((matching) => {
    let results = matching.results
    let Compik = () => {
      if (`${matching.results[0].match}` === 'true') {
        let num = matching.results[0].probabilities[1] * 100
        return <p className='matching prosent'>{num.toFixed(3)}%</p>
      } else {
        let num = matching.results[0].probabilities[0] * 100
        return <p className='matching prosent'>{num.toFixed(3)}%</p>
      }
    }
    let answer = `${matching.results[0].match}`
    return (
      <div className='decision'>
        <p className='matching' key={matching.label}>
          Your suggestion is {matching.label}:
        </p>
        <p className='matching answer' key={matching.results[0]}>
          {answer} by
        </p>
        <p className='matching' key={matching.results[0]}>
          <Compik />
        </p>
      </div>
    )
  })
  return <div>{fetch}</div>
}
