# set voltage limit to max value
# SUM
export psp_setvlimitmax

const VLIMIT_MAX = [0x53, 0x55, 0x4D, 0x0D]

"Set voltage limit to maximum value."
function psp_setvlimitmax(io_psp::IO)
  write(io_psp, VLIMIT_MAX)
  return nothing
end