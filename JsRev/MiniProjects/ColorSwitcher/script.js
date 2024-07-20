const buttons = document.querySelectorAll(".button")
const body = document.querySelector("body")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const col = event.target; //event.target refers to the element that triggered the event
        switch(col.id){
            case 'pink':
                body.style.backgroundColor = col.id;
                break;
            case 'aqua' :
                body.style.backgroundColor = col.id;
                break;
            case 'khaki' :
                body.style.backgroundColor = col.id;
                break;
            case 'darksalmon' :
                body.style.backgroundColor = col.id;
                break;
            case 'burlywood' :
                body.style.backgroundColor = col.id;
                break;
            case 'chartreuse' :
                body.style.backgroundColor = col.id;
                break;
            case 'cornflowerblue' :
                body.style.backgroundColor = col.id;
                break;
            case 'skyblue' :
                body.style.backgroundColor = col.id;
                break;
            default :
                body.style.backgroundColor = "white"
                break;
        }
    })
})