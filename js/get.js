const get = (theUrl) => {
    return fetch(theUrl)
        .then (response => response.json())
        .then (data => data)
}