module.exports.handler = (evt, ctx, done) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
        message: 'Hello World!',
        input: evt
    })
  }
  done(null, response)
}

// ctx: meta information about the execution environment
module.exports.firstTask = (evt, ctx, done) => {
    console.log('typeof evt:', typeof evt);
    let error = null;
    try {
        if (evt.locations.length === 0) {
            throw new Error("locations property is missing in the event object");
        }
    } catch (e) {
        error = e;
    }
    done(error, evt);            
}
