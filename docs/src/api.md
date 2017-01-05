# API

API for `GWinstekPSP`.  For full description of commands see [users manual](http://www.gwinstek.com/en-global/Download/DownloadFile/DownloadFile/download%23_%2304_DCPower%23_%2382SP-60300MD.pdf).

## Index

```@index
Pages = ["api.md"]
```

## Functions and Types

```@docs
GWinstekPSP.Status
psp_status!
psp_status
psp_readvoltage
psp_readcurrent
psp_readpower
psp_readvlimit
psp_readilimit
psp_readplimit
psp_readflags
psp_incrementvoltage
psp_decrementvoltage
psp_incrementvlimit
psp_decrementvlimit
psp_incrementilimit
psp_decrementilimit
psp_incrementplimit
psp_decrementplimit
psp_setvlimitmax
psp_setilimitmax
psp_setplimitmax
psp_setknobfine
psp_setknobnormal
psp_togglerelay
psp_setrelayon
psp_setrelayoff
psp_savepreset
psp_setvoltage
psp_setvlimit
psp_setilimit
psp_setplimit
```
