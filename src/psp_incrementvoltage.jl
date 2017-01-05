# add one unit to the voltage setting
# SV+
export psp_incrementvoltage

const INCREMENT_VOLTAGE = [0x53, 0x56, 0x2B, 0x0D]

"""
    psp_incrementvoltage(io)
    
Add one unit to the voltage setting.
"""
function psp_incrementvoltage(io_psp::IO)
  write(io_psp, INCREMENT_VOLTAGE)
  return nothing
end
