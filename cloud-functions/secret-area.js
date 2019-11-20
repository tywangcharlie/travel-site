exports.handler = function(event, content, callback) {
    callback(null, {
        statusCode: 200,
        body: "Welcome to the secret area"
    })
}