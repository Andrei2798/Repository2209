async function add(event)
{
    event.preventDefault();
    let item=document.querySelector("#addItem").value; 
    
    try {
        const response = await fetch('/add', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  item })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
         
        document.querySelector("#arrMessage").style.color="green";
        document.querySelector("#arrMessage").innerHTML = `Response from server: ${JSON.stringify(data.result, null, 2)}`;
    } catch (error) {
        console.error('Error:', error);
    }

}

document.querySelector("#seller").addEventListener("submit", add);

async function select(event)
{
    event.preventDefault();
    let item=document.querySelector("#choose").value; 
    
    try {
        const response = await fetch('/select', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({  item })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
         
        document.querySelector("#customerMessage").style.color="green";
        document.querySelector("#customerMessage").innerHTML = `Response from server: ${JSON.stringify(data.result, null, 2)}`;
    } catch (error) {
        console.error('Error:', error);
    }

}

document.querySelector("#customer").addEventListener("submit", select);