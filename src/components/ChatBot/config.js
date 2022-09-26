// Config starter code
import { createChatBotMessage } from "react-chatbot-kit";
import LearningOptions from "./LearningOptions";
const botName = 'CodifiedBot';

const getDayType=()=>{
  var myDate = new Date();
  var hrs = myDate.getHours();

  var greet;

  if (hrs < 12)
      greet = 'Good Morning';
  else if (hrs >= 12 && hrs <= 17)
      greet = 'Good Afternoon';
  else if (hrs >= 17 && hrs <= 24)
      greet = 'Good Evening';
  else 
    greet = 'Have a nice day';

  return greet

}
const config = {
  initialMessages: [createChatBotMessage(`${getDayType()} ,How can I assist you`, {
    widget: "learningOptions"}
  )],
  widgets: [
    {
      widgetName: "learningOptions",
     widgetFunc: (props) => <LearningOptions {...props} />,
    },
],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#1e4fd8',
    },
    chatButton: {
      backgroundColor: '#1e4fd8',
    },
  },
}

export default config