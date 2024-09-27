async function add(event)
{
    event.preventDefault();
    let item=document.querySelector("#addItem").value; 
    console.log(item);

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