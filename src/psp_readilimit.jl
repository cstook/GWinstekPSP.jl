# read the output ilimit
export psp_readilimit

const READ_ILIMIT = [0x49, 0x0d]

function psp_readilimit(io_psp::IO)
  write(io_psp, READ_ILIMIT)
  ilimitstring = bytestring(read(io_psp,UInt8, 8))
  if  uppercase(ilimitstring[1]) != 'I' ||
      ilimitstring[3] != '.' ||
      ilimitstring[6:8] != "\r\r\n"
        error("PSP Invalid Response: ",ilimitstring)
  end
  parse(Float64,ilimitstring[2:5])
end