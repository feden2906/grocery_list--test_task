import './GroceryItem.css'

export const GroceryItem = ({item, item:{name, id, dataCreate, dataEdit, status, priority}, changeStatus, deleteTask}) => {
    return (
        <div className='itemWrapper'>
            <div className='itemName'>
              <h3>{name}</h3>
            </div>


          <div className='itemBtnWrapper'>
            <div>
            <p>status: {status ? 'have' : 'ran out'}</p>
            <hr/>
            <p>priority: {priority}</p>
            </div>
            <div className='itemBtn'>
              <button onClick={() => changeStatus(item)}>Change status</button>
              <button onClick={() => deleteTask(id)}>Delete</button>
            </div>

            <div>

            <div className='time'>
              <p>Create:</p>
              <p>{dataCreate}</p>
            </div>

            {dataEdit && <div className='time'>
                           <p>Edit:</p>
                           <p>{dataEdit}</p>
                         </div>
            }
            </div>

          </div>
        </div>
    );
}
