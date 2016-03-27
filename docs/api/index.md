# API-INDEX


## MODULE: GWinstekPSP

---

## Functions [Exported]

[GWinstekPSP.psp_status](GWinstekPSP.md#function__psp_status.1)  Read status of the power supply

[GWinstekPSP.psp_status!](GWinstekPSP.md#function__psp_status.2)  Read status of the power supply

---

## Methods [Exported]

[psp_decrementilimit(io_psp::IO)](GWinstekPSP.md#method__psp_decrementilimit.1)  Subtract one unit to the current limit.

[psp_decrementplimit(io_psp::IO)](GWinstekPSP.md#method__psp_decrementplimit.1)  Subtract one unit to the power limit.

[psp_decrementvlimit(io_psp::IO)](GWinstekPSP.md#method__psp_decrementvlimit.1)  Add one unit to the voltage limit.

[psp_decrementvoltage(io_psp::IO)](GWinstekPSP.md#method__psp_decrementvoltage.1)  Subtract one unit to the voltage setting.

[psp_incrementilimit(io_psp::IO)](GWinstekPSP.md#method__psp_incrementilimit.1)  Add one unit to the current limit.

[psp_incrementplimit(io_psp::IO)](GWinstekPSP.md#method__psp_incrementplimit.1)  Add one unit to the power limit.

[psp_incrementvlimit(io_psp::IO)](GWinstekPSP.md#method__psp_incrementvlimit.1)  Add one unit to the voltage limit.

[psp_incrementvoltage(io_psp::IO)](GWinstekPSP.md#method__psp_incrementvoltage.1)  Add one unit to the voltage setting.

[psp_readcurrent(io_psp::IO)](GWinstekPSP.md#method__psp_readcurrent.1)  Read the output current.

[psp_readflags(io_psp::IO)](GWinstekPSP.md#method__psp_readflags.1)  Read the flags.

[psp_readilimit(io_psp::IO)](GWinstekPSP.md#method__psp_readilimit.1)  Read the output current limit.

[psp_readplimit(io_psp::IO)](GWinstekPSP.md#method__psp_readplimit.1)  Read the power limit.

[psp_readpower(io_psp::IO)](GWinstekPSP.md#method__psp_readpower.1)  Read the output power.

[psp_readvlimit(io_psp::IO)](GWinstekPSP.md#method__psp_readvlimit.1)  Read the voltage limit.

[psp_readvoltage(io_psp::IO)](GWinstekPSP.md#method__psp_readvoltage.1)  Read output voltage.

[psp_savepreset(io_psp::IO)](GWinstekPSP.md#method__psp_savepreset.1)  Save current configuration to EEPROM.  Power supply will power up in this state.

[psp_setilimit(io_psp::IO,  ilim::Real)](GWinstekPSP.md#method__psp_setilimit.1)  Set the current limit.

[psp_setilimitmax(io_psp::IO)](GWinstekPSP.md#method__psp_setilimitmax.1)  Set current limit to maximum value.

[psp_setknobfine(io_psp::IO)](GWinstekPSP.md#method__psp_setknobfine.1)  Set knob to fine.

[psp_setknobnormal(io_psp::IO)](GWinstekPSP.md#method__psp_setknobnormal.1)  Set knob to normal.

[psp_setplimit(io_psp::IO,  plim::Real)](GWinstekPSP.md#method__psp_setplimit.1)  Set the power limit.

[psp_setplimitmax(io_psp::IO)](GWinstekPSP.md#method__psp_setplimitmax.1)  Set power limit to maximum value.

[psp_setrelayoff(io_psp::IO)](GWinstekPSP.md#method__psp_setrelayoff.1)  Set output relay off.

[psp_setrelayon(io_psp::IO)](GWinstekPSP.md#method__psp_setrelayon.1)  Set output relay on.

[psp_setvlimit(io_psp::IO,  vlim::Real)](GWinstekPSP.md#method__psp_setvlimit.1)  Set the voltage limit.

[psp_setvlimitmax(io_psp::IO)](GWinstekPSP.md#method__psp_setvlimitmax.1)  Set voltage limit to maximum value.

[psp_setvoltage(io_psp::IO,  voltage::Real)](GWinstekPSP.md#method__psp_setvoltage.1)  Set output voltage.

[psp_togglerelay(io_psp::IO)](GWinstekPSP.md#method__psp_togglerelay.1)  Toggle output relay.

---

## Types [Internal]

[GWinstekPSP.Status](GWinstekPSP.md#type__status.1)  Power supply status

