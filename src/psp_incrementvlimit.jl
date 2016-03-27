# add one unit to the voltage limit
# SU+
export psp_incrementvlimit

const INCREMENT_VLIMIT = [0x53, 0x55, 0x2B, 0x0D]

"Add one unit to the voltage limit."
function psp_incrementvlimit(io_psp::IO)
  write(io_psp, INCREMENT_VLIMIT)
  return nothing
end

