# read the output power
export psp_readpower

const READ_POWER = [0x57, 0x0d]

"Read the output power."
function psp_readpower(io_psp::IO)
  write(io_psp, READ_POWER)
  powerstring = bytestring(read(io_psp,UInt8, 9))
  if  powerstring[1] != 'W' ||
      powerstring[5] != '.' ||
      powerstring[7:9] != "\r\r\n"
        error("PSP Invalid Response: ",powerstring)
  end
  parse(Float64,powerstring[2:6])
end