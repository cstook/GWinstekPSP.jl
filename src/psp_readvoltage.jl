# read the output voltage
export psp_readvoltage

const READ_VOLTAGE = [0x56, 0x0d]

"read output voltage"
function psp_readvoltage(io_psp::IO)
  write(io_psp, READ_VOLTAGE)
  voltagestring = bytestring(read(io_psp,UInt8, 9))
  if  voltagestring[1] != 'V' ||
      voltagestring[4] != '.' ||
      voltagestring[7:9] != "\r\r\n"
        error("PSP Invalid Response: ",voltagestring)
  end
  parse(Float64,voltagestring[2:6])
end