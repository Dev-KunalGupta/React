import { useState, useEffect } from "react"
import { useLoaderData } from "react-router-dom"

const Github = () => {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(data => setData(data))
    // }, [])

    
  return (
    <div>Github Followers : {data.followers}
    <img src={data.avatar_url} alt="Github avatar" />
    </div>
    
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}