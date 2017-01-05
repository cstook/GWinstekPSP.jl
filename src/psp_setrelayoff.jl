# output relay off
# KOD
export psp_setrelayoff

const RELAY_OFF = [0x4b, 0x4F, 0x44, 0x0d]

"""
    psp_setrelayoff(io)

Set output relay off.
"""
function psp_setrelayoff(io_psp::IO)
  write(io_psp, RELAY_OFF)
  return nothing
end
