
/**
 * display on random message from the list in "lib_messages.js"
 *
 */
function displayOneRandomMSG() {
    // var cookie = document.cookie;

    var id = Math.floor(Math.random() * messages.length)
    writeMessage(id)
}

function writeMessage(id){
    document.getElementById("messageBox").hidden = true
    var d = new Date();
    console.log("show message " + id + " ; " + d.toLocaleTimeString()) //DEBUG
    
    window.setTimeout(
        // I use 'setTimeout' because javascript is asynchronous. If I don't, 'hidden = false' might execute before 'hidden = true'
        function(){
            document.getElementById("title").innerHTML = messages[id].title;
            document.getElementById("message").innerHTML = messages[id].message;
            document.getElementById("messageBox").hidden = false
        },
        500
    )
}

/**
 * takes the complete list of messages, randomizes the list, and displays the
 * messages 1 by 1, every 'interval' seconds. At the end the the list, it
 * re-randomizes the list and does all that again. It's an infinite loop
 *
 * @param {Number} interval time in seconds between 2 messages
 */
function displayAllMessagesInRandomOrder(interval){
    //interval in seconds.
    interval = interval * 500

    var arr = []
    for(var i=0; i<messages.length; i++){
        arr.push(i)
    }
    arr = shuffle(arr)

    i = 0
    window.setInterval(function() {
        if(i == messages.length){
            arr = shuffle(arr)
            i = 0
        }
        writeMessage(arr[i])
        // console.log(i + " ; " + arr[i] + " ; " + messages[arr[i]].title) //DEBUG
        i++
    }
    , 2 * interval)
}

function shuffle(a) {
    // Thanks stackoverflow. I'm lazy
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    // console.log(JSON.stringify(a))
    return a;
}
