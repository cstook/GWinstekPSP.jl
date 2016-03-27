# set current limit to max value
# SIM
export psp_setilimitmax

const ILIMIT_MAX = [0x53, 0x49, 0x4D, 0x0D]

"Set current limit to maximum value."
function psp_setilimitmax(io_psp::IO)
  write(io_psp, ILIMIT_MAX)
  return nothing
end