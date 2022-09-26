// ActionProvider starter code
class ActionProvider {
   constructor(
    createChatBotMessage,
    setStateFunc,
    createClientMessage,
    stateRef,
    createCustomMessage,
    ...rest
  ) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
    this.createClientMessage = createClientMessage;
    this.stateRef = stateRef;
    this.createCustomMessage = createCustomMessage;
  }


  greet() {
    const greetingMessage = this.createChatBotMessage("Hi, Welcome to codifiedcoder.in")
    this.updateChatbotState(greetingMessage)
  }
  ignore() {
    const greetingMessage = this.createChatBotMessage("Am Sorry , I don't understand it")
    this.updateChatbotState(greetingMessage)
  }
  connectPersonally(){
    const greetingMessage = this.createChatBotMessage("We can connect personally on Linkidin or Instagram for it !")
    this.updateChatbotState(greetingMessage)
  }
  updateChatbotState(message) {
 
     
        
       this.setState(prevState => ({
          ...prevState, messages: [...prevState.messages, message]
        }))
      }
}

export default ActionProvider;
