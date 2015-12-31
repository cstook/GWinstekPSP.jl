# Read status of the power supply

# command not working reliably ???

export psp_status!, psp_status

const READ_STATUS = [0x4c, 0x0d]

type Status
  voltage :: Float64
  current :: Float64 
  power   :: Float64
  vlimit  :: Float64 
  ilimit  :: Float64 
  plimit  :: Float64 
  isrelayon  :: Bool 
  isoverheat :: Bool   
  isknobfine :: Bool   
  isknobunlock :: Bool   
  isremote   :: Bool 
  islock     :: Bool
end

Status() = Status(0.0,0.0,0.0,0.0,0.0,0.0,false,false,false,false,false,false)

function Base.show(io::IO, s::Status)
  println("Status")
  println("voltage = ",s.voltage)
  println("curent  = ",s.current)
  println("power   = ",s.power)
  println("vlimit  = ",s.vlimit)
  println("ilimit  = ",s.ilimit)
  println("plimit  = ",s.plimit)
  println("isrelayon    = ",s.isrelayon)
  println("isoverheat   = ",s.isoverheat)
  println("isknobfine   = ",s.isknobfine)
  println("isknobunlock = ",s.isknobunlock)
  println("isremote     = ",s.isremote)
  println("islock       = ",s.islock)
end

function psp_status!(io_psp::IO, s::Status)
    write(io_psp, READ_STATUS)  # obtain all status from power supply
    status = bytestring(read(io_psp,UInt8, 40))
    if  status[1] != 'V' ||
        status[4] != '.' ||
        status[7] != 'A' ||
        status[9] != '.' ||
        status[13] != 'W' ||
        status[17] != '.' ||
        status[19] != 'U' ||
        status[22] != 'I' ||
        status[24] != '.' ||
        status[27] != 'P' ||
        status[31] != 'F' ||
        status[38:40] != "\r\r\n"
          error("PSP Invalid Response: ",status)
    end
    s.voltage = parse(Float64,status[2:6])
    s.current = parse(Float64,status[8:12])
    s.power = parse(Float64,status[14:18])
    s.vlimit = parse(Float64,status[20:21])
    s.ilimit = parse(Float64,status[23:26])
    s.plimit = parse(Float64,status[28:30])
    s.isrelayon = status[32] == '1'
    s.isoverheat = status[33] == '1'
    s.isknobfine = status[34] == '1'
    s.isknobunlock = status[35] == '1'
    s.isremote = status[36] == '1'
    s.islock = status[37] == '1'
    return s
end

function psp_status(io_psp::IO)
  s = Status()
  psp_status!(io_psp,s)
end

