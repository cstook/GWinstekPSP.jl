# add one unit to the voltage limit
# SU-
export psp_decrementvlimit

const DECREMENT_VLIMIT = [0x53, 0x55, 0x2D, 0x0D]

"""
    psp_decrementvlimit(io)

Add one unit to the voltage limit.
"""
function psp_decrementvlimit(io_psp::IO)
  write(io_psp, DECREMENT_VLIMIT)
  return nothing
end
