exports.handler = function(event, content, callback) {
    const secretContent=`
    <h3>Welcome to the secrete area </h3>
    <p>Please input the <strong>password.</strong></p>
    `
    
    let body

    if(event.body){
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if(body.password == "javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401,
        })
    }
    
    
}