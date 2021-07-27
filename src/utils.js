module.exports = {
  generateBaseURL (){
    const isDev = this.isDevEnviroment()
    return isDev ? `http://${process.env.HOST}:${process.env.PORT}`
      : `https://${process.env.HOST}`
  },
  isDevEnviroment() {
    return process.env.NODE_ENV === 'development' || process.env.NODE_ENV === undefined
  }
}