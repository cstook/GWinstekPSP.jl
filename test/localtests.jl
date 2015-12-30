using FTD2XX
using GWinstekPSP
using Base.Test

uartconfig = UARTConfiguration(2400,8,1,"n",
                               readtimeout = 1000,   # in milliseconds
                               writetimeout = 1000)  # in milliseconds
io_psp603 = open(FT_Description("PSP-603"),uartconfig)

status = psp_status(io_psp603)
show(status)

voltage = psp_readvoltage(io_psp603)
current = psp_readcurrent(io_psp603)
power = psp_readpower(io_psp603)
vlimit = psp_readvlimit(io_psp603)
ilimit = psp_readilimit(io_psp603)
plimit = psp_readplimit(io_psp603)
(isrelayon,isoverheat,isknobfine,isknobunlock,isremote,islock) = psp_readflags(io_psp603)

voltage = psp_readvoltage(io_psp603)
@test voltage == status.voltage
current = psp_readcurrent(io_psp603)
@test current == status.current
power = psp_readpower(io_psp603)
@test power == status.power
vlimit = psp_readvlimit(io_psp603)
@test vlimit == status.vlimit
ilimit = psp_readilimit(io_psp603)
@test ilimit == status.ilimit
plimit = psp_readplimit(io_psp603)
@test plimit == status.plimit
(isrelayon,isoverheat,isknobfine,isknobunlock,isremote,islock) = psp_readflags(io_psp603)
@test isrelayon == status.isrelayon
@test isoverheat == status.isoverheat
@test isknobfine == status.isknobfine
@test isknobunlock == status.isknobunlock
@test isremote == status.isremote
@test islock == status.islock

psp_setrelayoff(io_psp603)
psp_incrementvoltage(io_psp603)
psp_decrementvoltage(io_psp603)
psp_incrementvlimit(io_psp603)
psp_decrementvlimit(io_psp603)
psp_incrementilimit(io_psp603)
psp_decrementilimit(io_psp603)
psp_incrementplimit(io_psp603)
psp_decrementplimit(io_psp603)

psp_setvlimitmax(io_psp603)
psp_setilimitmax(io_psp603)
psp_setplimitmax(io_psp603)
psp_setknobfine(io_psp603)
psp_setknobnormal(io_psp603)

psp_togglerelay(io_psp603)
psp_setrelayon(io_psp603)
psp_setrelayoff(io_psp603)

psp_savepreset(io_psp603)

close(io_psp603)
