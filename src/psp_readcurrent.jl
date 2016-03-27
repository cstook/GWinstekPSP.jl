# read the output current
export psp_readcurrent

const READ_CURRENT = [0x41, 0x0d]

"Read the output current."
function psp_readcurrent(io_psp::IO)
  write(io_psp, READ_CURRENT)
  currentstring = bytestring(read(io_psp,UInt8, 9))
  if  currentstring[1] != 'A' ||
      currentstring[3] != '.' ||
      currentstring[7:9] != "\r\r\n"
        error("PSP Invalid Response: ",currentstring)
  end
  parse(Float64,currentstring[2:6])
end