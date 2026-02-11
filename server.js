const express = require("express");
const app = express();

app.use(express.json());

app.post("/webhook", (req, res) => {

  const intentName = req.body.queryResult.intent.displayName;

  let responseText = "";

  if (intentName === "Book_Test_Drive") {
    responseText = "ശരി, ഏത് ദിവസം താങ്കൾക്ക് അനുയോജ്യം?";
  } else {
    responseText = "നന്ദി. മഹീന്ദ്ര XUV 7XOയെ കുറിച്ച് കൂടുതൽ വിവരങ്ങൾ ഞാൻ സഹായിക്കാം.";
  }

  res.json({
    fulfillmentText: responseText
  });

});

app.get("/", (req, res) => {
  res.send("Webhook is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});
