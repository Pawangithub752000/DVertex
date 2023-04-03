
    //  ["gfgf","hggbhd"]:-these type of data try to insert in localstorage
    let form = document.querySelector("form");
    let ls = localStorage.getItem('todo');
    let todo = ls?JSON.parse(ls):[]; //json.parse use for 
    //convert string to json object
    
    //For Form submitting:-
    form.addEventListener('submit', (e)=>{
        e.preventDefault(); //For ignore reloading page after submit form 
        let inpData = form[0].value;
        todo.push(inpData)
        localStorage.setItem('todo', JSON.stringify
        (todo))
        location.reload()
    })
    todo.map((data,index)=>{
        document.querySelector("tbody").innerHTML +=`
        <tr>
         <td>${data}</td>   
         <td onclick="del(${index})">Delete</td>   
        </tr>
        `;
    })
    function del(e){
        let deleted = todo.filter((data,index)=>{
            return index!==e;
        })
        localStorage.setItem('todo', JSON.stringify(deleted))
        location.reload()
    }