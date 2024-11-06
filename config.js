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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_22_57_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNCxcbiAgICAgICAgODEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEyLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDc1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OSxcbiAgICAgICAgNDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDY1LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjUzLFxuICAgICAgICA4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDI1NCxcbiAgICAgICAgOTIsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAzNixcbiAgICAgICAgNzksXG4gICAgICAgIDY0LFxuICAgICAgICA3OCxcbiAgICAgICAgMjA3LFxuICAgICAgICA2NixcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTI1LFxuICAgICAgICA2OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyNTMsXG4gICAgICAgIDM2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODUsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDI4LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTE2LFxuICAgICAgICA0NixcbiAgICAgICAgMTcyLFxuICAgICAgICA2OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTgzLFxuICAgICAgICA2MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgOTEsXG4gICAgICAgIDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgODIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNCxcbiAgICAgICAgNDksXG4gICAgICAgIDQ5LFxuICAgICAgICAxODksXG4gICAgICAgIDkzLFxuICAgICAgICA5MixcbiAgICAgICAgMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjAsXG4gICAgICAgIDI2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDQzLFxuICAgICAgICAyOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDY1LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4NyxcbiAgICAgICAgNjcsXG4gICAgICAgIDc4LFxuICAgICAgICA4MixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMyxcbiAgICAgICAgOTIsXG4gICAgICAgIDE5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDksXG4gICAgICAgIDg1LFxuICAgICAgICA0MCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgOTAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNyxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDU5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg2LFxuICAgICAgICAxODAsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE2MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDY5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAzNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk4LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE5LFxuICAgICAgICA4OSxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgOSxcbiAgICAgICAgNTMsXG4gICAgICAgIDQzLFxuICAgICAgICAxODMsXG4gICAgICAgIDEzLFxuICAgICAgICA1MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMCxcbiAgICAgICAgMTgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3MCxcbiAgICAgICAgODEsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMSxcbiAgICAgICAgODgsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxOSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNDcsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEwLFxuICAgICAgICA1NyxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTUwLFxuICAgICAgICA2LFxuICAgICAgICAxMDMsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTE3LFxuICAgICAgICA0MCxcbiAgICAgICAgMjMwLFxuICAgICAgICAzOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTIzLFxuICAgICAgICA5NyxcbiAgICAgICAgMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyNixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJHckJMdTllNmpVakR0WWwzZThhZEdpUHBXQU9rUUw3Vys4clM2V0xtd0tZPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJzaExfOUpzRVN3V1NuLUQzbXFCY3Z3XCIsXG4gIFwicGhvbmVJZFwiOiBcImZiYzg5ZmI2LWFmMWMtNDk5YS04MzdlLTQ4NWNhZDBjMDFmN1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNTMsXG4gICAgICAxODgsXG4gICAgICA4MCxcbiAgICAgIDIwNCxcbiAgICAgIDI2LFxuICAgICAgOTQsXG4gICAgICAyMTksXG4gICAgICAxNSxcbiAgICAgIDIsXG4gICAgICAyMDIsXG4gICAgICAxMjIsXG4gICAgICAzMCxcbiAgICAgIDc4LFxuICAgICAgODMsXG4gICAgICAyMTMsXG4gICAgICAyMzAsXG4gICAgICA2MSxcbiAgICAgIDIwNyxcbiAgICAgIDMyLFxuICAgICAgNTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY5LFxuICAgICAgMzYsXG4gICAgICA1NCxcbiAgICAgIDExNCxcbiAgICAgIDMzLFxuICAgICAgMTI4LFxuICAgICAgMTQ0LFxuICAgICAgOCxcbiAgICAgIDExNixcbiAgICAgIDIzMSxcbiAgICAgIDE1OSxcbiAgICAgIDE1NSxcbiAgICAgIDM0LFxuICAgICAgODQsXG4gICAgICAyMDEsXG4gICAgICA4OSxcbiAgICAgIDE2OCxcbiAgICAgIDQ4LFxuICAgICAgNDAsXG4gICAgICAxODJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiMTVLR0M0TDdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIyNTQ2NTI2MzI0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTU2NzkwNjIzNzI1Mjk6MjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTlRBdE44R0VPem9yN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJXaDV2elovUDJWUzk1WUlRSEVINEF6eXpFdnNoSm95WTZHUjgyejNGbkd3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIko4QmJ0bG9hWFQ0UVg0UDg1YkNkaTRuS1lFZlNUSVZLTUFFNTMvdUkwZVFGSEM4UWdJVEZHTHVCajdzWU54SWdQNWdSdTZqemV1NDBvMmFZSS9XWENRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInJWYkxpSFRkalliNDlieHYzc015RzBwZlo4ZnlhRVM3dnBWaDBUbTNvTEtCVG1aUTBycVFEYU1wMWJTL1VNWUVkeFQxRTlPbFp4SWlkdEZVM1NLaUF3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIyNTQ2NTI2MzI0OjIxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTA4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA5MzM4NzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMMHZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUwwdi5qc29uIjogIntcImtleURhdGFcIjpcIjVFMkh1eDNZSkliZmVreTB4ei9EaTg2WHRxWW1zRjE2bUNkS1ZMaDBtUVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTgxMDcwMjQxOSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDkzMzY2MTc4OFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ",",
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
