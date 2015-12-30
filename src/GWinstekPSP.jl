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


module GWinstekPSP

# functions that read values
include("psp_status.jl")
include("psp_readvoltage.jl")
include("psp_readcurrent.jl")
include("psp_readpower.jl")
include("psp_readvlimit.jl")
include("psp_readilimit.jl")
include("psp_readplimit.jl")
include("psp_readflags.jl")

# functions that set values
include("psp_incrementvoltage.jl")  # SV+
include("psp_decrementvoltage.jl")  # SV-
include("psp_incrementvlimit.jl")   # SU+
include("psp_decrementvlimit.jl")   # SU-

include("psp_incrementilimit.jl")   # SI+
include("psp_decrementilimit.jl")   # SI-

include("psp_incrementplimit.jl")   # SP+
include("psp_decrementplimit.jl")   # SP-

include("psp_setvlimitmax.jl") # SUM
include("psp_setilimitmax.jl") # SIM
include("psp_setplimitmax.jl") # SPM

include("psp_setknobfine.jl") # KF
include("psp_setknobnormal.jl") # KN

include("psp_togglerelay.jl") # KO
include("psp_setrelayon.jl") # KOE
include("psp_setrelayoff.jl") # KOD

include("psp_savepreset.jl") # EEP




end # module