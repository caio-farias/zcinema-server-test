module.exports = {
  generateBaseURL (){
    const isDev = IsDevEnviroment()
    return isDev ? `http://${process.env.HOST}:${process.env.PORT}`
      : `https://${process.env.HOST}`
  },
  IsDevEnviroment() {
    return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
  }
}