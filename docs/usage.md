# Usage

GWinstekPSP needs to communicate with the power supply via a serial port.  If the power supply is connected with a [FTDI](http://www.ftdichip.com) USB to serial converter, [FTD2XX.jl](https://github.com/cstook/FTD2XX.jl) my be used.

Note: The serial port on some supplies is non standard.  +12V must be externaly supplied.  See the documentation for your supply.

Load the modules we will need.
```julia
using FTD2XX
using GWinstekPSP
```

Open the serial port.
```julia
uartconfig = UARTConfiguration(2400,8,1,"n",
                               readtimeout = 1000,   # in milliseconds
                               writetimeout = 1000)  # in milliseconds
# Replace "PSP-603" with the description for your converter
io_psp603 = open(FT_Description("PSP-603"),uartconfig)
```

Get power supply status.
```julia
purge(io_psp603)  # purge buffer, just to be safe
wait(Timer(0.1))
status = psp_status(io_psp603)
```

Ramp voltage from 0V to 60V in 1V steps, 1 per second.
```julia
for v in 0:60
    psp_setvoltage(io_psp603,v)
    wait(Timer(1))
end
```