# read the output flags
export psp_readflags

const READ_FLAGS = [0x46, 0x0d]

"read status flags"
function psp_readflags(io_psp::IO)
  write(io_psp, READ_FLAGS)
  flagsstring = bytestring(read(io_psp,UInt8, 10))
  if  flagsstring[1] != 'F' ||
      flagsstring[8:10] != "\r\r\n"
        error("PSP Invalid Response: ",flagsstring)
  end
  isrelayon = flagsstring[2] == '1'
  isoverheat = flagsstring[3] == '1'
  isknobfine = flagsstring[4] =='1'
  isknobunlock = flagsstring[5] == '1'
  isremote = flagsstring[6] == '1'
  islock = flagsstring[7] == '1'
  return(isrelayon,isoverheat,isknobfine,isknobunlock,isremote,islock)
end

