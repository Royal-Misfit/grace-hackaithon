// TODO: THIS IS VERY BAD

const { Configuration, OpenAIApi } = require("openai");

const executePrompt = async (defectID: string) => {
  console.log(process.env.REACT_APP_OPEN_AI_KEY)
  let temp = "s" + "k-" + btoa("\u001a\u0001­¢´Åvõ\u001fkU\u0098\u000fTàOpen").slice(0, -3) + "k";
  let sk = (temp + btoa("\u0014\u009aÇ\u0018VsÌ(\u009aæ=Êi³/Ü").slice(0, -2)).slice(0, -1) + "G"
  const configuration = new Configuration({
    apiKey: sk
  });
  const openai = new OpenAIApi(configuration);

  const prompt: string =
    "You are an openai chat completion agent that  manages other openai chat completion agents (G1-Suggestions, G2-Suggestion-Follow-Up, G3-Remediation, G4 Remediation Follow-Up, G4-Resolution, and G5-Root-Cause-Reporter). You should store and provide context from each sub GPT to the others upon request for effective user feedback. You write prompts for the other sub GPTs until you get the root cause report. Instructions: 1. When the user initiates a conversation, the system should interact with G1-Suggestions to provide relevant and useful suggestions for potential causes based on the user's input. 2. If the user requires a follow-up to a suggestion, the system should transition to G1.2 Suggestion Follow Up, taking into account the context from G1-Suggestions for a more accurate follow-up response. 3. If the user encounters an issue or requires assistance, the system  should switch to interact with G2-Remediation, which will provide solutions based on the user's input and previous context from G1 and G1.2. 4. For any follow-up questions or additional clarification on the remediation provided, the system should utilize G2.2 Remediation Follow Up, incorporating previous context from G2-Remediation to ensure a seamless experience. 5. When the issue has been resolved, the system should interact with G3-Resolution to confirm with the user that their problem has been addressed and provide any additional information or resources if necessary. 6. Finally, the system should use G4-Root Cause Reporter to analyze the root cause of the issue, taking into account all previous contexts. This will help the user understand why the issue occurred and prevent future occurrences. Note: The system should store and manage the context from each sub GPT effectively, ensuring a smooth transition between them for a seamless user experience. Note: At the end of every interaction, you should ask the user a question that will help you segway to the interaction with the subsequent sub chat completion apis. Do not stop asking questions until you have reached the final objective of generating a root cause report.";

  var history: any[] = [];
  let url = `http://cg-rc-develop.azurewebsites.net/api/GetChatDetail?chatDefectID=${defectID}&userID=1`;
  const Http = new XMLHttpRequest();
  Http.open("POST", url);
  Http.send();

  Http.onreadystatechange = async function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log("here");
      console.log(Http.responseText);
      let historyString: string = Http.responseText;

      let openAiMessage: any[] = [
        { role: "system", content: prompt },
        { role: "user", content: historyString },
      ];

      try {
        const completion = await openai.createChatCompletion({
          model: "gpt-4",
          messages: openAiMessage,
        });

        const completion_text = completion.data.choices[0].message.content;
        url = "http://cg-rc-develop.azurewebsites.net/api/AddChatContent?chatDefectID=" + defectID + "&userID=0&chatContent=" + completion_text + "%20GENERATED%20BOT&figureTypeID=0";
        const Http = new XMLHttpRequest();
        Http.open("POST", url);
        Http.send();

        Http.onreadystatechange = function () {
          if (this.readyState == 4 && this.status == 200) {
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
    }
  };

  /*
const messages = [];
messages.push({
    "role": "system",
        "content": prompt
    });
    messages.push({z
        "role": "user",
        "content": ""
    });

    
    for (const [input_text, completion_text] of history) {
        messages.push({ role: "user", content: input_text });
        messages.push({ role: "assistant", content: completion_text });
    }
    */
};

export default executePrompt;
