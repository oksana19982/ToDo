import React, {useState} from 'react';

function Todo (){
    const [value, setValue] = useState('');
    const [arr, setArr] = useState([]);

    function newValue (e) {
        setValue(e.target.value)
    }

    function showArr(){
        if (value !== '')
        setArr([...arr, {text: value, checked: false}]);
        setValue('')
    }
    
    function checking(index){
        const newTodos = [...arr];
        if(newTodos[index].checked === false){
            newTodos[index].checked = true
        } else if(newTodos[index].checked === true){
            newTodos[index].checked = false
        }
        setArr(newTodos);
    }

    function deletion(a){
        setArr(arr.filter(t => t !== a))
    }

    function edition(b){
        setValue(b.text)
        setArr(arr.filter(c => c !== b))
    }

    function handleEnter (event){
        if(event.key === "Enter")
        showArr();
    } 

    return (
        <div className='App-block'>
            <div className='App-block-input'>
                <input value={value} onKeyPress={handleEnter} onChange={(event) => newValue(event)}/>
                <button className='App-block-button' onClick={showArr}>Add todo</button>
            </div>
            <div>
                <ul>
                {arr.map((i, index) => (
                    <li key={index.toString()} className='App-block-li'>
                        <label className={i.checked ? 'App-block-li-crossed': ''}>
                            <input 
                                className='App-block-li-checkbox'
                                checked={i.checked}
                                type = 'checkbox'
                                onChange={() => checking(index)}
                            />
                            {i.text}
                        </label>
                        <button className='App-block-button' onClick={() => deletion(i)}>delete</button>
                        <button className='App-block-button' onClick={() => edition(i)}>edit</button>
                    </li>
                ))}
                </ul>
            </div>
        </div>        
    )
}

export default Todo;