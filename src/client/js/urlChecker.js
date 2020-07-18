function checkUrl(inputText) {
    var regex = /(http|https):\/\/(\w+:{0,1}\w*)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;
    if(!regex .test(inputText)) {
      console.log('>>> URL not valid')
      return false;
    } else {
        console.log('>>> URL valid')
      return true;
    }
  }

  export { checkUrl }