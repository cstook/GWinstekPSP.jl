# output relay on
# KOE
export psp_setrelayon

const RELAY_ON = [0x4b, 0x4F, 0x45, 0x0d]

function psp_setrelayon(io_psp::IO)
  write(io_psp, RELAY_ON)
  return nothing
end