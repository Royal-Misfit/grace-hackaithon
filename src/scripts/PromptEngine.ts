// TODO: THIS IS VERY BAD
import { ChatMessage } from "components/RightSidebar/RightSidebar";

const { Configuration, OpenAIApi } = require("openai");

interface GptMessage {
  role: "system" | "user" | "assistant";
  content: string;
}

const formicEnum: string[] = ["G1-Suggestions", "G2-Suggestion-Follow-Up", "G3-Remediation", "G4 Remediation Follow-Up", "G4-Resolution", "G5-Root-Cause-Reporter"];
const formicPrompts = {
  "G1-Suggestions":"You are G1-Suggestions, an openai chat completion agent. Users prompt you with machine issues and you interact with them by providing suggestions for possible causes and helping them identify which of the suggestions is the primary cause. Note: Do not stop asking questions until you have reached the final objective of finding the list of suggestions and returning them as an array of strings.",
  "G2-Suggestion-Follow-Up":"You are G2-Suggestion-Follow-Up, an openai chat completion agent. Users prompt you with an array of suggestions for causes of machine issues. You use this to walk them through the process of identifying which of the suggestions is the primary cause. Note: Do not stop asking questions until you have reached the final objective of finding the primary causes, returned as an array of strings.",
  "G3-Remediation":"You are G3-Remediation, an openai chat completion agent. Users prompt you with a list of primary causses for machine issues. You use this to walk them through the process of remediating the primary causes. Note: Do not stop asking questions until you have reached the final objective of remediating the primary causes and comfirming with the user that they reply with by saying that the remeditation is complete. After this you reply with a remediation report formatted as a json object.",
  "G4-Resolution":"You are G4-Resolution, an openai chat completion agent. After users remediate machine issues, users prompt you with a remediation report formatted as a json object. You use this to walk them through the process of confirming the resolution plan. Note: Do not stop asking questions until you have reached the final objective of confirming the remediation plan. Your final output is the resolution plan formatted as a json object.", 
  "G5-Root-Cause-Reporter":"You are G5-Root-Cause-Reporter, an openai chat completion agent. After users resolve machine issues, users prompt you with 4 items: 1. A list of initial suggestions for what caused the machine issue. This will be in the form of an array of strings. 2. The primary causes, returned as an array of strings. 3. A remediation report formatted as a json object. 4. The resolution plan formatted as a json object. You use those 4 items to generate a concise and easily readable root cause analysis, formatted as a json object."
};

const executePrompt = async (defectID: string, messageHistory: ChatMessage[], onCompletion: Function) => {
  let temp = "s" + "k-" + btoa("\u001a\u0001­¢´Åvõ\u001fkU\u0098\u000fTàOpen").slice(0, -3) + "k";
  let sk = (temp + btoa("\u0014\u009aÇ\u0018VsÌ(\u009aæ=Êi³/Ü").slice(0, -2)).slice(0, -1) + "G";
  const configuration = new Configuration({
    apiKey: sk,
  });
  const openai = new OpenAIApi(configuration);

  const prompt: string =
    "You are an openai chat completion agent that  manages other openai chat completion agents (G1-Suggestions, G2-Suggestion-Follow-Up, G3-Remediation, G4 Remediation Follow-Up, G4-Resolution, and G5-Root-Cause-Reporter). You should store and provide context from each sub GPT to the others upon request for effective user feedback. You write prompts for the other sub GPTs until you get the root cause report. Instructions: 1. When the user initiates a conversation, the system should interact with G1-Suggestions to provide relevant and useful suggestions for potential causes based on the user's input. 2. If the user requires a follow-up to a suggestion, the system should transition to G1.2 Suggestion Follow Up, taking into account the context from G1-Suggestions for a more accurate follow-up response. 3. If the user encounters an issue or requires assistance, the system  should switch to interact with G2-Remediation, which will provide solutions based on the user's input and previous context from G1 and G1.2. 4. For any follow-up questions or additional clarification on the remediation provided, the system should utilize G2.2 Remediation Follow Up, incorporating previous context from G2-Remediation to ensure a seamless experience. 5. When the issue has been resolved, the system should interact with G3-Resolution to confirm with the user that their problem has been addressed and provide any additional information or resources if necessary. 6. Finally, the system should use G4-Root Cause Reporter to analyze the root cause of the issue, taking into account all previous contexts. This will help the user understand why the issue occurred and prevent future occurrences. Note: The system should store and manage the context from each sub GPT effectively, ensuring a smooth transition between them for a seamless user experience. Note: At the end of every interaction, you should ask the user a question that will help you segway to the interaction with the subsequent sub chat completion apis. Do not stop asking questions until you have reached the final objective of generating a root cause report.";

  // let url = `https://cg-rc-develop.azurewebsites.net/api/GetChatDetail?chatDefectID=${defectID}&userID=1`;
  // const Http = new XMLHttpRequest();
  // Http.open("POST", url);
  // Http.send();

  // Http.onreadystatechange = async function () {
  // console.log(this)
  // if (this.readyState == 4 && (this.status == 200 || this.status == 0)) {

  let openAiMessage: GptMessage[] = [{ role: "system", content: prompt }];

  messageHistory.forEach((m: ChatMessage, i: number) => {
    openAiMessage.push({
      role: m.userID == "0" ? "assistant" : "user",
      content: m.content
    });
  });

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4",
      messages: openAiMessage,
    });

    const completion_text = completion.data.choices[0].message.content;

    //
    // Adding chat content
    const url = "https://cg-rc-develop.azurewebsites.net/api/AddChatContent?chatDefectID=" + defectID + "&userID=0&chatContent=" + completion_text + "&figureTypeID=0";
    const Http = new XMLHttpRequest();
    Http.open("POST", url);
    Http.send();

    Http.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        onCompletion();
        return;
      }
    };

    //history.push([user_input, completion_text]);
  } catch (error: any) {
    if (error.response) {
      console.log(error.response.status);
      console.log(error.response.data);
    } else {
      console.log(error.message);
    }
  }

};

const engageFormicAgent = async (defectID: string, messageHistory: ChatMessage[], onCompletion: Function, formicAgent: string) => {
  let temp = "s" + "k-" + btoa("\u001a\u0001­¢´Åvõ\u001fkU\u0098\u000fTàOpen").slice(0, -3) + "k";
  let sk = (temp + btoa("\u0014\u009aÇ\u0018VsÌ(\u009aæ=Êi³/Ü").slice(0, -2)).slice(0, -1) + "G";
  const configuration = new Configuration({
    apiKey: sk,
  });
  const openai = new OpenAIApi(configuration);
  
  // @ts-ignore
  const prompt: string = formicPrompts[formicAgent];
  let openAiMessage: GptMessage[] = [{ role: "system", content: prompt }];
  

}

export default executePrompt;
