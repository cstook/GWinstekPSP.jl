# add one unit to the power limit
# SP+
export psp_incrementplimit

const INCREMENT_PLIMIT = [0x53, 0x49, 0x2B, 0x0D]

function psp_incrementplimit(io_psp::IO)
  write(io_psp, INCREMENT_PLIMIT)
  return nothing
end