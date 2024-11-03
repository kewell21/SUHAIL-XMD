const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


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

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_20_00_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTMwLFxuICAgICAgICA1LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNixcbiAgICAgICAgODksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNDIsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNzYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAzMixcbiAgICAgICAgMzIsXG4gICAgICAgIDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEwLFxuICAgICAgICA5LFxuICAgICAgICAyMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NixcbiAgICAgICAgNTksXG4gICAgICAgIDkxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDc3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMTAsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTYyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDY5LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDg1LFxuICAgICAgICA4NixcbiAgICAgICAgNDQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMTksXG4gICAgICAgIDE5NixcbiAgICAgICAgMjA3LFxuICAgICAgICA1NixcbiAgICAgICAgMTE0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxODgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzksXG4gICAgICAgIDQzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMzksXG4gICAgICAgIDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICA3MSxcbiAgICAgICAgODYsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjE0LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjksXG4gICAgICAgIDgxLFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMDEsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTc0LFxuICAgICAgICAyMTIsXG4gICAgICAgIDE4MixcbiAgICAgICAgOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTgyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTg4LFxuICAgICAgICAzNixcbiAgICAgICAgMjI0LFxuICAgICAgICAxOTksXG4gICAgICAgIDg5LFxuICAgICAgICAxMzgsXG4gICAgICAgIDIxOSxcbiAgICAgICAgNzcsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDQzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgODIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODAsXG4gICAgICAgIDE4MixcbiAgICAgICAgMCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNzYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA1NyxcbiAgICAgICAgNyxcbiAgICAgICAgMTA2LFxuICAgICAgICAxNDIsXG4gICAgICAgIDQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxNSxcbiAgICAgICAgOTksXG4gICAgICAgIDExNixcbiAgICAgICAgMTEyLFxuICAgICAgICAzNSxcbiAgICAgICAgOTksXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzEsXG4gICAgICAgIDIyNixcbiAgICAgICAgNixcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICA4NixcbiAgICAgICAgMTU5LFxuICAgICAgICA1OCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjIsXG4gICAgICAgIDQzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxNTMsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNjMsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTYzLFxuICAgICAgICA0OSxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTIyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxNjksXG4gICAgICAgIDkzLFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICA5MixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA0OVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTEsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICA1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDMyLFxuICAgICAgICA3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA5NixcbiAgICAgICAgNTcsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDY4LFxuICAgICAgICA5MixcbiAgICAgICAgMTQzLFxuICAgICAgICA1NyxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg0LFxuICAgICAgICAxMixcbiAgICAgICAgMTY2LFxuICAgICAgICA0NSxcbiAgICAgICAgNzgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjMsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDkzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNDgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTczLFxuICAgICAgICA3OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE0NixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJOblovMlhQcUIzVlFJaC9YcUhVU0dOQS9NTHRLSGJSL0poS0ZmVFdmMk1jPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJucnpMVTkxQlRlbUFndHdKYzdld2V3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjA3Y2RjZjkzLTFlNGMtNDRlYS05NTUyLWRhNWI2MzU3NDYwNFwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjQsXG4gICAgICAxMTYsXG4gICAgICAxMTgsXG4gICAgICAxODksXG4gICAgICAyNDEsXG4gICAgICAwLFxuICAgICAgMjA2LFxuICAgICAgMjQ1LFxuICAgICAgNDEsXG4gICAgICAzNixcbiAgICAgIDExNCxcbiAgICAgIDEwOCxcbiAgICAgIDIyOCxcbiAgICAgIDUzLFxuICAgICAgODQsXG4gICAgICAyNDYsXG4gICAgICA4NixcbiAgICAgIDIzNixcbiAgICAgIDEzMSxcbiAgICAgIDcyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEzNSxcbiAgICAgIDE4MSxcbiAgICAgIDY4LFxuICAgICAgMSxcbiAgICAgIDEwNCxcbiAgICAgIDM4LFxuICAgICAgMTE3LFxuICAgICAgNTYsXG4gICAgICAxMCxcbiAgICAgIDEwMixcbiAgICAgIDIxNCxcbiAgICAgIDEyOCxcbiAgICAgIDE3OSxcbiAgICAgIDIzNyxcbiAgICAgIDEyNSxcbiAgICAgIDIzLFxuICAgICAgMjM4LFxuICAgICAgNzcsXG4gICAgICA1NSxcbiAgICAgIDc1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlZWSDFDTUJOXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMjU0NjUyNjMyNDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTk1Njc5MDYyMzcyNTI5OjIwQGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05QQXROOEdFTmVzbjdrR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiV2g1dnpaL1AyVlM5NVlJUUhFSDRBenl6RXZzaEpveVk2R1I4MnozRm5Hdz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJkKzhSem1PUjdLUWtoSHkrbG5HTmxtejRvRFpKRjREcWlrU1hZL2FXR01mT0grTkM4a3h0cDBUbTcrMmZNY0lMYkZ4TncxaCsrVHBXdHI3dHRjWWtDQT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJWQ2dXaDVhQXNyNURTUDFBNEhROHVTWDM3RmpGZmdLdFF5dmxXMHFEMW1CcFZwY0ZvVHREUlNVSkxpMEVzdGdQZVM4RHFkY0hEZi9hUmZZVFFsQnFpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMjU0NjUyNjMyNDoyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDEwOFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNjY0MDI3XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "𓆩᪣ᬼ⃟𝞙𝞖𝞓𝙇𝞘𝙇🍆 𝘿𝞗𝙐𝞑𝙇𝞢🥷🏾 𝙁𝞓𝘾𝞢🌴᪣ᬼ⃟𓆩♡𓆪",
  botname : process.env.BOT_NAME  || "HAKAI-XM8",
  ownername:process.env.OWNER_NAME|| "KHALIL_UNKNOW-X",


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
