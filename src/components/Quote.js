import React, { useState, useEffect } from 'react'
import axios from 'axios'




const url = 'https://goquotes-api.herokuapp.com/api/v1/all/quotes/api/v1/all/authors'

const Quote = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    // console.log(data)

    if (!data) return null

    return (
        <div className='date'>
            <p>{data.quotes[0].text}</p>
            <p>-{data.quotes[0].author}</p>
        </div>
    )
}

export default Quote