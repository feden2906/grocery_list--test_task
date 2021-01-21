import './GroceryList.css'
import {useEffect, useState} from "react";
import {GroceryItem} from "../grocery-item";

export const GroceryList = () => {

  const [groceryList, setGroceryList] = useState('')
  const [newItem, setNewItem] = useState('')
  const [priority, setPriority] = useState(null)
  const [flag, setFlag] = useState(true)

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('groceryList'))
    if (data.length > 0) {
      data.sort((a, b) => {
        return a.priority - b.priority
      })
    setGroceryList(data)
    }
  }, [flag])

  const getTime = () => {
    const hours = new Date().getHours()
    const minute = new Date().getMinutes()
    const day = new Date().getDay()
    const month = new Date().getMonth() + 1
    const year = new Date().getFullYear()
    return `${hours}:${minute} ${day}/${month}/${year}`
  }

  const createNewTask = () => {
    let arr = [];
    if (priority && priority >= 1 && priority <= 5 && newItem.length > 2) {
      if (groceryList && groceryList.length > 0) {
        arr = groceryList.sort((a, b) => a.id > b.id)
        arr.push({
          name: newItem,
          id: arr[arr.length - 1].id + 1,
          dataCreate: getTime(),
          status: true,
          dataEdit: '',
          priority: priority
        })
      } else {
        arr.push({name: newItem, id: 1, dataCreate: getTime(), status: true, dataEdit: '', priority: priority})
      }

      const list = JSON.stringify(arr)
      localStorage.setItem('groceryList', list)
      setFlag(!flag)
      setNewItem('')
    }
  }

  const changeStatus = (item) => {
    const list = groceryList.filter(value => value.id !== item.id)
    list.push({...item, status: !item.status, dataEdit: getTime()})
    localStorage.setItem('groceryList', JSON.stringify(list))
    setFlag(!flag)
  }

  const deleteTask = (id) => {
    const list = groceryList.filter(value => value.id !== id)
    localStorage.setItem('groceryList', JSON.stringify(list))
    setFlag(!flag)
  }

  return (
      <div className='wrapper'>
        <div className='GroceryListWrapper'>
          {groceryList && groceryList.length > 0
              ? groceryList.map(value => <GroceryItem item={value} key={value.id}
                                                      changeStatus={changeStatus}
                                                      deleteTask={deleteTask}
              />)
              : <p>You don`t created grocery items</p>
          }
        </div>
        <div className='formCreate'>
          <p>Priority</p>
          <input onInput={(e) => setPriority(e.currentTarget.value)} className='inputCreate'
                 type='number' value={priority}/>
          <p>What do you want to buy?</p>
          <input onInput={(e) => setNewItem(e.currentTarget.value)} className='inputCreate'
                 value={newItem}/>
          <button onClick={() => createNewTask()} className='listCreateBtn'>Create</button>

          <hr/>
          <h3>Filter</h3>
          <input type="radio" id='radio1' name='radioButton' value='All' checked/>
          <span>All</span>
          <input type="radio" id='radio2' name='radioButton' value='Have'/>
          <span>Have</span>
          <input type="radio" id='radio3' name='radioButton' value='RunOut'/>
          <span>Run out</span>


        </div>

      </div>
  );
}
