function debug (func, delay) {
    let isActive = false; 
    let timerId; 
    return function () {
        
        if (!isActive) {
            func();
            isActive = true; 

            if (timerId) clearTimeout(timerId)
            setTimeout(() => {
                isActive = false; 
            }, delay)
            return
        }
        return
    }
}

const debbuged = debug(() => {console.log('hello1')}, 1500)
debbuged()
setTimeout(debbuged, 2000)

