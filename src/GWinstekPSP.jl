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

# not including margining commands

module GWinstekPSP

# functions that read values
include("psp_status.jl") # L
include("psp_readvoltage.jl") # V
include("psp_readcurrent.jl") # A
include("psp_readpower.jl") # W
include("psp_readvlimit.jl") # U
include("psp_readilimit.jl") # I
include("psp_readplimit.jl") # P
include("psp_readflags.jl") # F

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

include("psp_setvoltage.jl") # SV
include("psp_setvlimit.jl") # SU
include("psp_setilimit.jl") # SI
include("psp_setplimit.jl") # SP

end # module