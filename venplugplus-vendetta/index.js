(function(o,i,c,s,u,d){"use strict";const{FormSection:a,FormSwitch:n,FormInput:l,FormSlider:r,FormSelect:m}=d.Forms;function b(){const e=u.useProxy(s.storage);return React.createElement(React.Fragment,null,React.createElement(a,{title:"Connection Settings"},React.createElement(n,{label:"Connect Automatically",subLabel:"Connect to intiface on startup",value:e.connectAutomatically??!0,onValueChange:function(t){e.connectAutomatically=t}}),React.createElement(l,{label:"WebSocket URL",subLabel:"The URL of the websocket server",value:e.websocketUrl??"ws://localhost:12345",placeholder:"ws://localhost:12345",onChange:function(t){e.websocketUrl=t}})),React.createElement(a,{title:"Vibration Settings"},React.createElement(n,{label:"Ramp Up and Down",subLabel:"Smoothly ramp the vibration intensity up and down",value:e.rampUpAndDown??!0,onValueChange:function(t){e.rampUpAndDown=t}}),React.createElement(r,{label:"Ramp Steps",subLabel:"Steps to use when ramping up and down",value:e.rampUpAndDownSteps??20,minimumValue:0,maximumValue:40,step:1,onValueChange:function(t){e.rampUpAndDownSteps=t}}),React.createElement(r,{label:"Max Vibration Intensity",value:e.maxVibrationIntensity??70,minimumValue:0,maximumValue:100,step:1,onValueChange:function(t){e.maxVibrationIntensity=t}})),React.createElement(a,{title:"Trigger Words"},React.createElement(l,{label:"Target Words",subLabel:"Comma-separated list of words to use as targets",value:e.targetWords??"",placeholder:"word1,word2,word3",onChange:function(t){e.targetWords=t}}),React.createElement(l,{label:"Trigger Words",subLabel:"Comma-separated list of words to use as triggers",value:e.triggerWords??"",placeholder:"word1,word2,word3",onChange:function(t){e.triggerWords=t}}),React.createElement(l,{label:"Add-On Words",subLabel:"Comma-separated list of words to add to the trigger words",value:e.addOnWords??"",placeholder:"word1,word2,word3",onChange:function(t){e.addOnWords=t}})),React.createElement(a,{title:"Filtering"},React.createElement(n,{label:"Switch Blacklist to Whitelist",value:e.switchBlacklistToWhitelist??!1,onValueChange:function(t){e.switchBlacklistToWhitelist=t}}),React.createElement(l,{label:"Listed Users",subLabel:"Comma-separated list of user IDs to blacklist/whitelist",value:e.listedUsers??"",placeholder:"123456789,987654321",onChange:function(t){e.listedUsers=t}}),React.createElement(l,{label:"Listed Channels",subLabel:"Comma-separated list of channel IDs to blacklist/whitelist",value:e.listedChannels??"",placeholder:"123456789,987654321",onChange:function(t){e.listedChannels=t}}),React.createElement(l,{label:"Listed Guilds",subLabel:"Comma-separated list of guild IDs to blacklist/whitelist",value:e.listedGuilds??"",placeholder:"123456789,987654321",onChange:function(t){e.listedGuilds=t}})),React.createElement(a,{title:"Other Options"},React.createElement(m,{label:"Alternative Options",value:e.altOptions??"none",options:[{label:"None (Default)",value:"none"},{label:"DM Only",value:"dmOnly"},{label:"Current Channel Only",value:"currentChannelOnly"},{label:"Current Guild Only",value:"currentGuildOnly"}],onChange:function(t){e.altOptions=t}})),React.createElement(a,{title:"Rich Presence"},React.createElement(n,{label:"Enable Rich Presence",subLabel:"Requires restart",value:e.richPresence??!1,onValueChange:function(t){e.richPresence=t}}),React.createElement(l,{label:"Rich Presence Title",value:e.richPresenceTitle??"venPlugPlus",onChange:function(t){e.richPresenceTitle=t}}),React.createElement(r,{label:"RPC Disconnect Timeout",subLabel:"Timeout for the 'Intiface not connected' RPC (in minutes)",value:e.rpcDisconnectTimeout??5,minimumValue:1,maximumValue:30,step:1,onValueChange:function(t){e.rpcDisconnectTimeout=t}})),React.createElement(a,{title:"Direct User Control"},React.createElement(n,{label:"Allow Direct User Control",subLabel:"Allow other users to directly control your toy",value:e.allowDirectUserControl??!1,onValueChange:function(t){e.allowDirectUserControl=t}}),React.createElement(l,{label:"Allowed Users",subLabel:"UserIDs to grant command access to",value:e.directControlAllowedUsers??"",placeholder:"123456789 987654321",onChange:function(t){e.directControlAllowedUsers=t}}),React.createElement(l,{label:"Command Prefix",subLabel:"The prefix for the command to be used",value:e.directControlCommandPrefix??">.",onChange:function(t){e.directControlCommandPrefix=t||">."}})))}c.findByProps("sendBotMessage");var h={onLoad:function(){i.logger.log("Hello world! test")},onUnload:function(){i.logger.log("Goodbye, world.")},settings:b};return o.default=h,Object.defineProperty(o,"__esModule",{value:!0}),o})({},vendetta,vendetta.metro,vendetta.plugin,vendetta.storage,vendetta.ui.components);
