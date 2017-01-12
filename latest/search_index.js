var documenterSearchIndex = {"docs": [

{
    "location": "index.html#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "index.html#GWinstekPSP.jl-1",
    "page": "Home",
    "title": "GWinstekPSP.jl",
    "category": "section",
    "text": "GWinstekPSP simplifies control of GW instek PSP-Series power supplies."
},

{
    "location": "install.html#",
    "page": "Instalation",
    "title": "Instalation",
    "category": "page",
    "text": ""
},

{
    "location": "install.html#Installation-1",
    "page": "Instalation",
    "title": "Installation",
    "category": "section",
    "text": "GWinstekPSP.jl is currently unregistered.  It can be installed using Pkg.clone.Pkg.clone(\"https://github.com/cstook/GWinstekPSP.jl.git\")The julia documentation section on installing unregistered packages provides more information."
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
    "text": "API for GWinstekPSP.  For full description of commands see users manual."
},

{
    "location": "api.html#Index-1",
    "page": "API",
    "title": "Index",
    "category": "section",
    "text": "Pages = [\"api.md\"]"
},

{
    "location": "api.html#GWinstekPSP.Status",
    "page": "API",
    "title": "GWinstekPSP.Status",
    "category": "Type",
    "text": "Power supply status\n\nfields\n\nvoltage     – Output voltage\ncurrent     – Output current\npower       – Output power\nvlimit      – Voltage limit\nilimit      – Current limit\nplimit      – Power limit\nisrelayon   – True if output relay is on\nisoverheat  – True if power supply temperature is too high\nisknobfine  – True if knob is in fine mode\nisknobunlock– True if knob is unlocked\nisremote    – True if power supply is in remote control mode\nislock      – True if front panel controls are locked\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_status!",
    "page": "API",
    "title": "GWinstekPSP.psp_status!",
    "category": "Function",
    "text": "psp_status!(io, status)\n\nRead status of the power supply and update status.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_status",
    "page": "API",
    "title": "GWinstekPSP.psp_status",
    "category": "Function",
    "text": "psp_status(io)\n\nRead status of the power supply and return status.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_readvoltage",
    "category": "Function",
    "text": "psp_readvoltage(io)\n\nRead the output voltage.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readcurrent",
    "page": "API",
    "title": "GWinstekPSP.psp_readcurrent",
    "category": "Function",
    "text": "psp_readcurrent(io)\n\nRead the output current.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readpower",
    "page": "API",
    "title": "GWinstekPSP.psp_readpower",
    "category": "Function",
    "text": "psp_readpower(io)\n\nRead the output power.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readvlimit",
    "category": "Function",
    "text": "psp_readvlimit(io)\n\nRead the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readilimit",
    "category": "Function",
    "text": "psp_readilimit(io)\n\nRead the output current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_readplimit",
    "category": "Function",
    "text": "psp_readplimit(io)\n\nRead the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_readflags",
    "page": "API",
    "title": "GWinstekPSP.psp_readflags",
    "category": "Function",
    "text": "psp_readflags(io)\n\nRead the flags.\n\nReturns the tuple (isrelayon, isoverheat, isknobfine, isknobunlock, isremote, islock)\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementvoltage",
    "category": "Function",
    "text": "psp_incrementvoltage(io)\n\nAdd one unit to the voltage setting.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementvoltage",
    "category": "Function",
    "text": "psp_decrementvoltage(io)\n\nSubtract one unit to the voltage setting.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementvlimit",
    "category": "Function",
    "text": "psp_incrementvlimit(io)\n\nAdd one unit to the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementvlimit",
    "category": "Function",
    "text": "psp_decrementvlimit(io)\n\nAdd one unit to the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementilimit",
    "category": "Function",
    "text": "psp_incrementilimit(io)\n\nAdd one unit to the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementilimit",
    "category": "Function",
    "text": "psp_decrementilimit(io)\n\nSubtract one unit to the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_incrementplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_incrementplimit",
    "category": "Function",
    "text": "psp_incrementplimit(io)\n\nAdd one unit to the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_decrementplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_decrementplimit",
    "category": "Function",
    "text": "psp_decrementplimit(io)\n\nSubtract one unit to the power limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvlimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setvlimitmax",
    "category": "Function",
    "text": "psp_setvlimitmax(io)\n\nSet voltage limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setilimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setilimitmax",
    "category": "Function",
    "text": "psp_setilimitmax(io)\n\nSet current limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setplimitmax",
    "page": "API",
    "title": "GWinstekPSP.psp_setplimitmax",
    "category": "Function",
    "text": "psp_setplimitmax(io)\n\nSet power limit to maximum value.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setknobfine",
    "page": "API",
    "title": "GWinstekPSP.psp_setknobfine",
    "category": "Function",
    "text": "psp_setknobfine(io)\n\nSet knob to fine.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setknobnormal",
    "page": "API",
    "title": "GWinstekPSP.psp_setknobnormal",
    "category": "Function",
    "text": "psp_setknobnormal(io)\n\nSet knob to normal.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_togglerelay",
    "page": "API",
    "title": "GWinstekPSP.psp_togglerelay",
    "category": "Function",
    "text": "psp_togglerelay(io)\n\nToggle output relay.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setrelayon",
    "page": "API",
    "title": "GWinstekPSP.psp_setrelayon",
    "category": "Function",
    "text": "psp_setrelayon(io)\n\nSet output relay on.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setrelayoff",
    "page": "API",
    "title": "GWinstekPSP.psp_setrelayoff",
    "category": "Function",
    "text": "psp_setrelayoff(io)\n\nSet output relay off.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_savepreset",
    "page": "API",
    "title": "GWinstekPSP.psp_savepreset",
    "category": "Function",
    "text": "psp_savepreset(io)\n\nSave current configuration to EEPROM.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvoltage",
    "page": "API",
    "title": "GWinstekPSP.psp_setvoltage",
    "category": "Function",
    "text": "psp_setvoltage(io, voltage)\n\nSet output voltage.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setvlimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setvlimit",
    "category": "Function",
    "text": "psp_setvlimit(io, voltage_limit)\n\nSet the voltage limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setilimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setilimit",
    "category": "Function",
    "text": "psp_setilimit(io, current_limit)\n\nSet the current limit.\n\n\n\n"
},

{
    "location": "api.html#GWinstekPSP.psp_setplimit",
    "page": "API",
    "title": "GWinstekPSP.psp_setplimit",
    "category": "Function",
    "text": "psp_setplimit(io, power_limit)\n\nSet the power limit.\n\n\n\n"
},

{
    "location": "api.html#Functions-and-Types-1",
    "page": "API",
    "title": "Functions and Types",
    "category": "section",
    "text": "GWinstekPSP.Status\npsp_status!\npsp_status\npsp_readvoltage\npsp_readcurrent\npsp_readpower\npsp_readvlimit\npsp_readilimit\npsp_readplimit\npsp_readflags\npsp_incrementvoltage\npsp_decrementvoltage\npsp_incrementvlimit\npsp_decrementvlimit\npsp_incrementilimit\npsp_decrementilimit\npsp_incrementplimit\npsp_decrementplimit\npsp_setvlimitmax\npsp_setilimitmax\npsp_setplimitmax\npsp_setknobfine\npsp_setknobnormal\npsp_togglerelay\npsp_setrelayon\npsp_setrelayoff\npsp_savepreset\npsp_setvoltage\npsp_setvlimit\npsp_setilimit\npsp_setplimit"
},

]}
