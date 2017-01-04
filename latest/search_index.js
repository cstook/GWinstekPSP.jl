var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": "#GWinstekPSP.jlGWinstekPSP simplifies control of GW instek PSP-Series power supplies."
},

{
    "location": "install.html#",
    "page": "Instalation",
    "title": "Instalation",
    "category": "page",
    "text": "#InstallationGWinstekPSP.jl is currently unregistered.  It can be installed using Pkg.clone.Pkg.clone(\"https://github.com/cstook/GWinstekPSP.jl.git\")The julia documentation section on installing unregistered packages provides more information."
},

{
    "location": "usage.html#",
    "page": "Usage",
    "title": "Usage",
    "category": "page",
    "text": ""
},

{
    "location": "usage.html#Usage-1",
    "page": "Usage",
    "title": "Usage",
    "category": "section",
    "text": "GWinstekPSP needs to communicate with the power supply via a serial port.  If the power supply is connected with a FTDI USB to serial converter, FTD2XX.jl may be used.Note: The serial port on some supplies is non standard.  +12V must be externaly supplied.  See the documentation for your supply.Load the modules we will need.using FTD2XX\nusing GWinstekPSPOpen the serial port.uartconfig = UARTConfiguration(2400,8,1,\"n\",\n                               readtimeout = 1000,   # in milliseconds\n                               writetimeout = 1000)  # in milliseconds\n# Replace \"PSP-603\" with the description for your converter\nio_psp603 = open(FT_Description(\"PSP-603\"),uartconfig)Get power supply status.purge(io_psp603)  # purge buffer, just to be safe\nwait(Timer(0.1))\nstatus = psp_status(io_psp603)Ramp voltage from 0V to 60V in 1V steps, 1 per second.for v in 0:60\n    psp_setvoltage(io_psp603,v)\n    wait(Timer(1))\nend"
},

{
    "location": "api.html#",
    "page": "API",
    "title": "API",
    "category": "page",
    "text": ""
},

{
    "location": "api.html#API-1",
    "page": "API",
    "title": "API",
    "category": "section",
    "text": "API for GWinstekPSP"
},

{
    "location": "api.html#Index-1",
    "page": "API",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"api.md\"]"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementilimit",
    "category": "Function",
    "text": "psp_decrementilimit(io_psp::IO)\n\nSubtract one unit to the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementplimit",
    "category": "Function",
    "text": "Subtract one unit to the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementvlimit",
    "category": "Function",
    "text": "Add one unit to the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementvoltage",
    "category": "Function",
    "text": "Subtract one unit to the voltage setting.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementilimit",
    "category": "Function",
    "text": "Add one unit to the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementplimit",
    "category": "Function",
    "text": "Add one unit to the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementvlimit",
    "category": "Function",
    "text": "Add one unit to the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementvoltage",
    "category": "Function",
    "text": "Add one unit to the voltage setting.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readcurrent",
    "page": "API",
    "title": "GWinstekPSP.psp_readcurrent",
    "category": "Function",
    "text": "Read the output current.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readflags",
    "page": "API",
    "title": "GWinstekPSP.psp_readflags",
    "category": "Function",
    "text": "Read the flags.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readilimit",
    "category": "Function",
    "text": "Read the output current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readplimit",
    "category": "Function",
    "text": "Read the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readpower",
    "page": "API",
    "title": "GWinstekPSP.psp_readpower",
    "category": "Function",
    "text": "Read the output power.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readvlimit",
    "category": "Function",
    "text": "Read the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_readvoltage",
    "category": "Function",
    "text": "Read output voltage.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_savepreset",
    "page": "API",
    "title": "GWinstekPSP.psp_savepreset",
    "category": "Function",
    "text": "Save current configuration to EEPROM.  Power supply will power up in this state.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setilimit",
    "category": "Function",
    "text": "Set the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setilimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setilimitmax",
    "category": "Function",
    "text": "Set current limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setknobfine",
    "page": "API",
    "title": "GWinstekPSP.psp_setknobfine",
    "category": "Function",
    "text": "Set knob to fine.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setknobnormal",
    "page": "API",
    "title": "GWinstekPSP.psp_setknobnormal",
    "category": "Function",
    "text": "Set knob to normal.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setplimit",
    "category": "Function",
    "text": "Set the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setplimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setplimitmax",
    "category": "Function",
    "text": "Set power limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setrelayoff",
    "page": "API",
    "title": "GWinstekPSP.psp_setrelayoff",
    "category": "Function",
    "text": "Set output relay off.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setrelayon",
    "page": "API",
    "title": "GWinstekPSP.psp_setrelayon",
    "category": "Function",
    "text": "Set output relay on.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setvlimit",
    "category": "Function",
    "text": "Set the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvlimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setvlimitmax",
    "category": "Function",
    "text": "Set voltage limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_setvoltage",
    "category": "Function",
    "text": "Set output voltage.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.Status",
    "page": "API",
    "title": "GWinstekPSP.Status",
    "category": "Type",
    "text": "Power supply status\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_status!",
    "page": "API",
    "title": "GWinstekPSP.psp_status!",
    "category": "Function",
    "text": "Read status of the power supply\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_status",
    "page": "API",
    "title": "GWinstekPSP.psp_status",
    "category": "Function",
    "text": "Read status of the power supply\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_togglerelay",
    "page": "API",
    "title": "GWinstekPSP.psp_togglerelay",
    "category": "Function",
    "text": "Toggle output relay.\n\n\n\n"
},

{
    "location": "api.html#Functions-and-Types-1",
    "page": "API",
    "title": "Functions and Types",
    "category": "section",
    "text": "psp_decrementilimit\npsp_decrementplimit\npsp_decrementvlimit\npsp_decrementvoltage\npsp_incrementilimit\npsp_incrementplimit\npsp_incrementvlimit\npsp_incrementvoltage\npsp_readcurrent\npsp_readflags\npsp_readilimit\npsp_readplimit\npsp_readpower\npsp_readvlimit\npsp_readvoltage\npsp_savepreset\npsp_setilimit\npsp_setilimitmax\npsp_setknobfine\npsp_setknobnormal\npsp_setplimit\npsp_setplimitmax\npsp_setrelayoff\npsp_setrelayon\npsp_setvlimit\npsp_setvlimitmax\npsp_setvoltage\nGWinstekPSP.Status\npsp_status!\npsp_status\npsp_togglerelay"
},

]}
