# set power limit to max value
# SPM
export psp_setplimitmax

const PLIMIT_MAX = [0x53, 0x50, 0x4D, 0x0D]

"set power limit to max value"
function psp_setplimitmax(io_psp::IO)
  write(io_psp, PLIMIT_MAX)
  return nothing
end