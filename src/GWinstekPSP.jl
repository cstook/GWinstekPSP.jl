# Module to communicate with GW instek PSP series power supplies
#=
note: 
1)  The serial port on the PSP-603 (and possibly others) is non standard.  
    Pin 4 needs +12V to power the line driver.  The transmitter will swing from
    Vpin4 - 4v to 0v.  This worked with my RS232 adapter.
2)  The equipment and probably your computer are both DTE.  Null modem 
    is required.
3)  Configure COM port for 2400,8,1,N flow control none.
=#


module GWInstekPSP

include("psp_status.jl")

end # module