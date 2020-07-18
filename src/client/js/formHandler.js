function handleSubmit(event) {
    event.preventDefault()
    const dataUrl='http://localhost:8000/sentiment-data'
    let formText = document.getElementById('input-url').value
    console.log(">>> Form submitted")
    if (Client.checkUrl(formText) === true) {
        postData(dataUrl, {formText})
            .then(() => {
                updateInterface()
                console.log('>>> Interface updated')
                
            })
        }
}


const postData = async (url='', data={}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({url: data})
    })
    try {
        const newData = await response.json()
        console.log(newData)
        return newData
    } catch (error) {
        console.log(error)
    }
}


const getData = async (url) => {
    const getResponse = await fetch(url)
    try {
        const data = await getResponse.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


const updateInterface = async () => {
    const req = await fetch('http://localhost:8000/data')
    try {
        const allData = await req.json()
        document.getElementById('polarity').innerHTML = allData.polarity
        document.getElementById('form').classList.add('hide')
        document.getElementById('polarity').classList.add('show-result')
        let goBack = document.getElementById('go-back')
        goBack.innerHTML = 'Go back'
        goBack.classList.add('show-button')
        goBack.addEventListener('click', function(){
            document.getElementById('form').classList.remove('hide')
            document.getElementById('polarity').classList.remove('show-result')
            document.getElementById('polarity').innerHTML = ''
            document.getElementById('go-back').classList.remove('show-button')
            document.getElementById('go-back').innerHTML = ''
        })
    } catch (error) {
        console.log(error)
    }
}




export { handleSubmit }
export { postData }
export { getData }
export { updateInterface }
