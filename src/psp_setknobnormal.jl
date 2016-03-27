# set knob to normal
# KN
export psp_setknobnormal

const KNOB_NORMAL = [0x4b, 0x4E, 0x0d]

"set knob to normal"
function psp_setknobnormal(io_psp::IO)
  write(io_psp, KNOB_NORMAL)
  return nothing
end