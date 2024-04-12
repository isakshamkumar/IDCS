// const { GoogleGenerativeAI } = require("@google/generative-ai");

// const apiKey = "AIzaSyBLEP8u2Sgf5oSNEUBWdYOwbWh_jpud0xo"; 
// const genAI = new GoogleGenerativeAI(apiKey);

// const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// console.log('yo');
// const outPut=async(content)=>{
//     const result = await model.generateContent(
        
//         JSON.stringify({
//           messages: [
//             {
//               role: "system",
//               content: 'Do not put quotation marks or escape character \\ in Your Given Answer.Do not give answer in points, just give out response in one single flow. Give out the required response in minimum 400 words, for example donot give the response in points like this example: "**Efficiency:** Node.js is very efficient.". So donot use this ** or "" symbols, just give out a single flow paragraph of minimum 400  words. Also donot use any other symbols like @,#,$,%,^,&,*,(,),+,=,{,},[,],|,;,:,<,>,/,? ',
//             },
//             { role: "user", content },
//           ],
//         })
//       );
//       console.log(JSON.stringify(result),'result');
// }

// outPut('Explain me Node js')
