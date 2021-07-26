module.exports = {
  generateBaseURL (){
    const isDev = process.env.NODE_ENV == 'development'
    return isDev ? `http://${process.env.HOST}:${process.env.PORT}`
      : `https://${process.env.HOST}`
  }
}