import React, { useState } from 'react'



const config = {
  apiUrl: 'https://type.fit/api/quotes',
  repoUrl: 'https://github.com/ssokurenko/quotes-react-app'
}



function Quote () {
    const [quotes, setQuotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const Quote = ({ text, author }) => {
      return (
        <span>
          <strong>{text}</strong> &nbsp; <span>{author}</span>
        </span>
      )
    }
  
    const getQuotes = () => {
      setQuotes([])
      setIsLoading(true)
      fetch(config.apiUrl)
        .then(function (response) {
          return response.json()
        })
        .then((data) => {
          setQuotes(data)
          setIsLoading(false)
        })
        .catch(() => {
          setIsLoading(false)
        })
    }

    return (
        <div>
            <div className="container">
        <div
          size="small"
          loading={isLoading}
          header={
            <button
              onClick={() => getQuotes()}
              type="primary"
              
              disabled={isLoading}
              size="large">
              Fetch Quotes
            </button>
          }
          footer={<a href={config.repoUrl}>Fork on Github</a>}
          bordered
          dataSource={quotes}
          renderItem={(quote) => (
            <div>
              <div text={quote.text} author={quote.author} />
            </div>
          )}
        />
      </div>
        </div>
    )
}

export default Quote