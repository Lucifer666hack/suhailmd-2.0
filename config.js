const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_56_12_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDU4LFxuICAgICAgICAwLFxuICAgICAgICA1NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDM2LFxuICAgICAgICA0NixcbiAgICAgICAgMTI4LFxuICAgICAgICA1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDg5LFxuICAgICAgICAxNTUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTQwLFxuICAgICAgICA0OCxcbiAgICAgICAgMTA2LFxuICAgICAgICA0OSxcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMTcsXG4gICAgICAgIDMxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTU3LFxuICAgICAgICA3OSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDgxLFxuICAgICAgICA5OSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTEsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDYsXG4gICAgICAgIDUzLFxuICAgICAgICAxODAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDk4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDYxLFxuICAgICAgICA1MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODYsXG4gICAgICAgIDYwLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMixcbiAgICAgICAgNzksXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE1MixcbiAgICAgICAgMzgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDc5LFxuICAgICAgICA0OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAzMyxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNixcbiAgICAgICAgMTY4LFxuICAgICAgICA4NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxOTksXG4gICAgICAgIDExMixcbiAgICAgICAgNzksXG4gICAgICAgIDUzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEzLFxuICAgICAgICA4MyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDkyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICA4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE3LFxuICAgICAgICA4MixcbiAgICAgICAgMTc2LFxuICAgICAgICAxMyxcbiAgICAgICAgODQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDEzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEwMlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MixcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTY2LFxuICAgICAgICA0OCxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NSxcbiAgICAgICAgODEsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDY5LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUsXG4gICAgICAgIDE4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA3MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDYyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMyxcbiAgICAgICAgMTksXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzAsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzksXG4gICAgICAgIDczLFxuICAgICAgICA5NyxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNzksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDI1LFxuICAgICAgICAxNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjI0LFxuICAgICAgICA0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMyxcbiAgICAgICAgNjUsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODgsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxODIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMDIsXG4gICAgICAgIDcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTMwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA1NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJqS1g5TExLejZZVjlPaGJXZ2hFTjEyT1hmT1UzLzFJS1hRQlRRd09DaU0wPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJlZmZBNllWUFF5R0t6RnR5M3AxMXl3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZmNzQ3YWExLWMzNzUtNDkwZC1iZWUyLTJiNDIxMzJhMjI5NVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NSxcbiAgICAgIDUxLFxuICAgICAgMTUsXG4gICAgICAyNDIsXG4gICAgICA1LFxuICAgICAgMTYxLFxuICAgICAgMTg5LFxuICAgICAgNTgsXG4gICAgICAxMzgsXG4gICAgICAxNDIsXG4gICAgICA0MyxcbiAgICAgIDEsXG4gICAgICA0NixcbiAgICAgIDIyNixcbiAgICAgIDYyLFxuICAgICAgMTE1LFxuICAgICAgMTk2LFxuICAgICAgMTQ2LFxuICAgICAgMTY3LFxuICAgICAgMTMxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIyNCxcbiAgICAgIDE5NixcbiAgICAgIDExNCxcbiAgICAgIDIxLFxuICAgICAgMjQ4LFxuICAgICAgNzYsXG4gICAgICAyMjAsXG4gICAgICAzMixcbiAgICAgIDE2LFxuICAgICAgMTE5LFxuICAgICAgMTcyLFxuICAgICAgNDYsXG4gICAgICAxNTIsXG4gICAgICAyMzYsXG4gICAgICAyMzEsXG4gICAgICAxMSxcbiAgICAgIDIyNyxcbiAgICAgIDc2LFxuICAgICAgNDQsXG4gICAgICAyN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJZRDdOMU4xNlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiNTA5Mzk0OTYzMzQ6MzFAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjc3NTAzMTM3ODYxNjMyOjMxQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0lxWXdxNEJFT1B6MTdvR0dCRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYW4xWUgwTDRPYktYTVpLM3ZrU3R1SEp1YjlKNUxSRHNHQWh4dks5WldVZz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCIxUW96YUlFQWRsYllIVnpENitRbDJ2eUNRYzFDNXljVWRpY3IvTUR6cTJWQWUzaGozUmRLMXpWcDhWeXJhZFF4WnRnZlQ1UzZ5eldkMGZBdTF5QkNCQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJyZlZySUw1TWZIR09yajcvWkVmWTZ4dXIybEtzdGd5OGFtY3FORzB1V1ZGcHNoVFlaOEhWTmxKVUJkWkZ2VXQvWEIzZWdJaVZjRndKSzRwb2wra3RnUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCI1MDkzOTQ5NjMzNDozMUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNDksXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDcyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM2ODc3ODMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFQWjJcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQVBaMi5qc29uIjogIntcImtleURhdGFcIjpcInpnUWJUVytXcWtFUjExdndnMDdFN1RQbkNxem1nZXhvemtJaTlGTklNUFk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzY1OTg4ODc0LFwiY3VycmVudEluZGV4XCI6MTYsXCJkZXZpY2VJbmRleGVzXCI6WzAsNCw5LDEyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
