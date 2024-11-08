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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_00_38_11_08_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDUzLFxuICAgICAgICA0MCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDYwLFxuICAgICAgICA1MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI3LFxuICAgICAgICA5NSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAxNixcbiAgICAgICAgOCxcbiAgICAgICAgNjMsXG4gICAgICAgIDEyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEwN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTEsXG4gICAgICAgIDIxNixcbiAgICAgICAgODQsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjUzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjksXG4gICAgICAgIDczLFxuICAgICAgICAxNixcbiAgICAgICAgMTc1LFxuICAgICAgICAxODMsXG4gICAgICAgIDYxLFxuICAgICAgICAzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDMwLFxuICAgICAgICAyMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMzEsXG4gICAgICAgIDM4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTIxLFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMixcbiAgICAgICAgODAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMzgsXG4gICAgICAgIDUxLFxuICAgICAgICAxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NyxcbiAgICAgICAgMTcsXG4gICAgICAgIDQ5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDUwLFxuICAgICAgICAyMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxODcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA2OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExMixcbiAgICAgICAgMTgyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTk5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMSxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA2MyxcbiAgICAgICAgNjIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MCxcbiAgICAgICAgODMsXG4gICAgICAgIDUzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjEyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5MixcbiAgICAgICAgMjIyLFxuICAgICAgICAxODEsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODQsXG4gICAgICAgIDQ0LFxuICAgICAgICA5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE1NixcbiAgICAgICAgNTksXG4gICAgICAgIDU2LFxuICAgICAgICA5OCxcbiAgICAgICAgMjQxLFxuICAgICAgICAyMjAsXG4gICAgICAgIDI1LFxuICAgICAgICAyNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTA0LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTU2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjQzLFxuICAgICAgICA4NCxcbiAgICAgICAgODEsXG4gICAgICAgIDI4LFxuICAgICAgICA5NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTY0LFxuICAgICAgICA0OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDc0LFxuICAgICAgICAxNTEsXG4gICAgICAgIDc3LFxuICAgICAgICA5NixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTM4LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjQxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDE2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICA4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgOTJcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTksXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDgyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTM3LFxuICAgICAgICA4NyxcbiAgICAgICAgMjksXG4gICAgICAgIDIzNixcbiAgICAgICAgOCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4MixcbiAgICAgICAgNzUsXG4gICAgICAgIDU1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjI0LFxuICAgICAgICA2NixcbiAgICAgICAgMTEzLFxuICAgICAgICA4NSxcbiAgICAgICAgNzYsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTQ1LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAzMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0OSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNDYsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDY4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlZNTUpid1d6UTVUdDRoL1Z3SkRteStReWtabjNXcHVTRGc4T2pFUEdYS3M9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImgyVGsyaDYtUW5Ta1lQTFRFMjg4R1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiNTkwMDU1YmItNzU1My00YjNlLWE1MTItNjYzYTVlY2NkMjg3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwMCxcbiAgICAgIDk4LFxuICAgICAgMTM3LFxuICAgICAgMTgwLFxuICAgICAgNTQsXG4gICAgICAyMDQsXG4gICAgICAyNDMsXG4gICAgICAyMTAsXG4gICAgICAyMzIsXG4gICAgICAxMyxcbiAgICAgIDEzLFxuICAgICAgMTA0LFxuICAgICAgMTU2LFxuICAgICAgMTg4LFxuICAgICAgMTUxLFxuICAgICAgMTM5LFxuICAgICAgMzQsXG4gICAgICAxMzgsXG4gICAgICAzNyxcbiAgICAgIDIwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODcsXG4gICAgICA4MSxcbiAgICAgIDIsXG4gICAgICA1NixcbiAgICAgIDI0OSxcbiAgICAgIDIzMixcbiAgICAgIDIyNCxcbiAgICAgIDE1MCxcbiAgICAgIDgzLFxuICAgICAgOTQsXG4gICAgICA4NyxcbiAgICAgIDIyOSxcbiAgICAgIDE4OSxcbiAgICAgIDEyOSxcbiAgICAgIDYsXG4gICAgICAyMjEsXG4gICAgICAxMzgsXG4gICAgICAyNTMsXG4gICAgICAxMzMsXG4gICAgICAyM1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJXREs2OEJLU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjI1NDY1MjYzMjQ6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE5NTY3OTA2MjM3MjUyOToyM0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNOYkF0TjhHRUpXN3Ria0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIldoNXZ6Wi9QMlZTOTVZSVFIRUg0QXp5ekV2c2hKb3lZNkdSODJ6M0ZuR3c9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiK0xCam1CUjRoaWk3WXBIbklNQUxGWkRKYjc0T1o0MTFmaDIwZWlpc2hLMlkyUnFrMWJ6VC9GcHJ5am5iZFRWREVkN3JwWE5vS1E2T0JSMFN6Wmp2QlE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTnRGNklHN2VvNUdhY2ppR2Rwa3NqaE93bEp1QThZUjZpQXlkZmhoNzFKSGlONEt1R3RENTZOeGVvelh0VDJKeVBhYUdMUE4xMjFHQ3NIcFczVXNoQXc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjI1NDY1MjYzMjQ6MjNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA5MCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMDhcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMTAyNjMyOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdhTVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR2FNLmpzb24iOiAie1wia2V5RGF0YVwiOlwibDJYVzF6YUgwWWdqTTYxN1RFbG1KVEFDTnJwZENWeUNlR2hqR0ViVEdxZz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxODEwNzAyNDIyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzEwMjYzMzU2NTZcIn0iCn0="  // PUT your SESSION_ID 


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
