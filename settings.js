/* Bot settings 

You don't have to set this if you deploy using heroku because you can simply set them in environment variables, also don't forget to sleep */


const session = process.env.SESSION || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUg1MlhEUUdjNU1qS2xnNHpDYS9jTS9EVERnci83Q1ArSkpPOW15clJuND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVmQ0aENMcldwWUNNRkx4bHJSODNldEhVZk0yU3kwMlFJMGt5b3c1S2pRTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzTExiQWdjUWQ1ZDd0azY1MHNxYWJXTWYxaXJhZVBVL1cwNnZLcGxjQTBzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtS0xGNFZkQnJmTUluS3lUaHh1M1o3eFhwd1NTZ3FUUGJrVE15MGs2cVhJPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktDSmhmQWFhbkh6R3EvK3F2VHFWVVFkSVkzYkJ2SFFrZFpUdWJOSHZpbkE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik5jVnJjc2dESG5JUTRMMEZ0eHgvREt2WXVyNW1HWmtYWmtPV0RMak9ta2M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUM3ZTlKeUNLWHRUYStvQXlSN1BrMlpjaHZJQllBVFlnV1FDemRKaWpsMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOEJLSERHOU1yaWpJTmhDQld3YTdrbDdIUllKM3RaSVd0c0xlUHNWait5UT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtqOGVHR29TaXJzRnhUT2E4MzBzOTdZaCswcWhpQTh6dW81SUJJSEVwZC9uSkhaVU5hSUI2UU1weUtSS1M4cG1aVTJveVdzQU1ENkpKOXdLM3RaQkJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjI2LCJhZHZTZWNyZXRLZXkiOiJMQ3pKMUwzVEpqN3lubmoreDRsaXR6VU5xQjdNbG1WeHFJNWlEWExZRmZ3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJTcFo0T1BqNFRUNlZQenlrTTd0aDBnIiwicGhvbmVJZCI6ImRhNjg5MDk2LWZkMzYtNDIyNS05MmQ3LTJhNzA2NjhiOWNhMyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjV3VmYlYzT1U1Y2JoVE1ndW9OdjM5TFhXckk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidGpOdUh2T0YwMktEY0FaUXVDNHltKzJUMDlZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjFSSlpZRUMyIiwibWUiOnsiaWQiOiIyMzM1Mzc2MDU3OTc6MTNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoibGMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ00vaXlKOEdFTWZTc2JzR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InhIdVBlZEo3b2hjS1BuL3FDekpVS1FpWDZITzlBUm1BR3BuQlhDVnIzbkk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjJpMTNXNzByUXhmUW1ZVlRNT3JYbmZVcFBFdTJnQ3RDNUVtWVNScGEyaXFlaGp3eFpVMGk4dVZHeFh4UWZBczlFSkhQUkkrOGQrTjRTajlDVHpRY0NnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJTQTFKWFhmejE0RUlPeVdSQ1pxS01PRHlOVXNLV1RrNmdVU0lzdzNmelBxUzErVUhkOGpxdjA0cSt5QldJTXU4aHhkcEVQVElvczI5d0xVTmkwYzJEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzMzUzNzYwNTc5NzoxM0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjUjdqM25TZTZJWENqNS82Z3N5VkNrSWwraHp2UUVaZ0JxWndWd2xhOTV5In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM1MTU4MTAxLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUFQNyJ9';

const prefix = process.env.PREFIX || '.';
const mycode = process.env.CODE || "233";
const author = process.env.STICKER_AUTHOR || 'caleb';
const packname = process.env.PACKNAME || 'caleb';
const dev = process.env.DEV || '2330537605797';
const DevKeith = dev.split(",");
const botname = process.env.BOTNAME || 'CALEB'S BOT';
const mode = process.env.MODE || 'public';
const gcpresence = process.env.GC_PRESENCE || 'false';
const antionce = process.env.ANTIVIEWONCE || 'false';
const sessionName = "session";
const presence = process.env.WA_PRESENCE || 'false';

const antitag = process.env.ANTITAG || 'falsw';
const antispam = process.env.ANTISPAM || 'false';
const chatbot = process.env.CHAT_BOT || 'true';
const antilink = process.env.ANTILINK || 'false';
const autoreact = process.env.AUTOREACT || 'false';
const antibot = process.env.ANTIBOT || 'true';
const anticall = process.env.ANTICALL || 'false';
const antibad = process.env.ANTI_BAD_WORD || 'true';
const antidelete = process.env.ANTIDELETE || 'true';
const autoview = process.env.AUTOVIEW_STATUS || 'true';
const autolike = process.env.AUTOLIKE_STATUS || 'false';
const autoread = process.env.AUTOREAD || 'true';
const autobio = process.env.AUTOBIO || 'false';
const autosave = process.env.AUTOSAVE || 'true';
const autodownload = PROCESS.ENVAUTODOWNLOAD ||'true'; 
const createdby = process. ENVY.CREATEDBY ||'CALEB LARBI'; 

module.exports = {
  sessionName,
  presence,
  autoview,
  autoread,
  botname,
  autobio,
  autoreact,
  mode,
  antibad,
  antilink,
  prefix,
  anticall,
  chatbot,
  autolike,
  mycode,
  author,
  packname,
  dev,
  DevKeith,
  gcpresence,
  antionce,
  antibot,
  session,
  antitag,
  antidelete, 
  autosave, 
  autodownload, 
  Createdby
};
