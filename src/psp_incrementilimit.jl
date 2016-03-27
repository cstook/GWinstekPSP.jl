# add one unit to the current limit
# SI+
export psp_incrementilimit

const INCREMENT_ILIMIT = [0x53, 0x49, 0x2B, 0x0D]

"increments the current limit"
function psp_incrementilimit(io_psp::IO)
  write(io_psp, INCREMENT_ILIMIT)
  return nothing
end