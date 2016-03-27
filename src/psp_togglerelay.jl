# toggle output relay
# KO
export psp_togglerelay

const TOGGLE_RELAY = [0x4b, 0x4F, 0x0d]

"Toggle output relay."
function psp_togglerelay(io_psp::IO)
  write(io_psp, TOGGLE_RELAY)
  return nothing
end