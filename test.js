
const debbuged = debug(() => {console.log('hello1')}, 1500)
debbuged()
setTimeout(debbuged, 2000)

