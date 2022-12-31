import { useState } from "react"
import axios from "axios"

export const userFetchUsers = () => {
  // const [userList, setUserList] = useState([{id : 1}])

  const [userList, setUserList] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  // const onClickFetchUser = () => alert('関数実行')

  const onClickFetchUser = () => {
    setIsLoading(true)
    setIsError(false)

    axios
    .get('https://example.com/users')
    .then(result => {
      const users = result.data.map(user=>({
        id:user.id,
        name:`${user.lastname} ${user.firstname}`,
        age:user.age,
      }))
      setUserList(users);
    })
    .catch(()=>{
      setIsError(true)
    })
    .finally(()=>{
      setIsLoading(false)
    })
  }

  return { userList,isLoading, isError, onClickFetchUser}
}