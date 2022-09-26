// MessageParser starter code
class MessageParser {
    constructor(actionProvider, state) {
      this.actionProvider = actionProvider;
      this.state = state;
    }
  
    isThere(string,useCases){
      const match = useCases.find(element => {
      
        if (string.includes(element.toLowerCase())) {
          return true;
        }
      });
  
      if (match !== undefined) {
        return true
      }else{
        return false
      }

    }
    parse(message) {
      console.log(message)
      const lowerCaseMessage = message.toLowerCase()
    
      if (this.isThere(lowerCaseMessage,["hello",'hi','yo','hey'])) {
        this.actionProvider.greet()
      }
      else if (this.isThere(lowerCaseMessage,["connect","work","fees","charges","hire"])) {
        this.actionProvider.connectPersonally()
      }else{
        this.actionProvider.ignore()
      }
    }
  }
  
  export default MessageParser;