# set knob to fine
# KF
export psp_setknobfine

const KNOB_FINE = [0x4b, 0x46, 0x0d]

"set knob to fine"
function psp_setknobfine(io_psp::IO)
  write(io_psp, KNOB_FINE)
  return nothing
end