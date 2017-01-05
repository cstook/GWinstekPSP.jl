# read the output vlimit
export psp_readvlimit

const READ_VLIMIT = [0x55, 0x0d]

"""
    psp_readvlimit(io)

Read the voltage limit.
"""
function psp_readvlimit(io_psp::IO)
  write(io_psp, READ_VLIMIT)
  vlimitstring = bytestring(read(io_psp,UInt8, 6))
  # U - if limit is set
  # u - if limit is being set
  if  uppercase(vlimitstring[1]) != 'U' ||
      vlimitstring[4:6] != "\r\r\n"
        error("PSP Invalid Response: ",vlimitstring)
  end
  parse(Float64,vlimitstring[2:3])
end
