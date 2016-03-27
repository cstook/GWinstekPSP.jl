# subtract one unit to the voltage setting
# SV-
export psp_decrementvoltage

const DECREMENT_VOLTAGE = [0x53, 0x56, 0x2D, 0x0D]

"Subtract one unit to the voltage setting."
function psp_decrementvoltage(io_psp::IO)
  write(io_psp, DECREMENT_VOLTAGE)
  return nothing
end
