# subtract one unit to the current limit
# SI-
export psp_decrementilimit

const DECREMENT_ILIMIT = [0x53, 0x49, 0x2D, 0x0D]
"Decerments the current limit"
function psp_decrementilimit(io_psp::IO)
  write(io_psp, DECREMENT_ILIMIT)
  return nothing
end