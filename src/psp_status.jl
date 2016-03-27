# Read status of the power supply

# command not working reliably ???

export psp_status!, psp_status

const READ_STATUS = [0x4c, 0x0d]

"Power supply status"
type Status
  "Output voltage"
  voltage :: Float64
  "Output current"
  current :: Float64
  "Output power"
  power   :: Float64
  "Voltage limit"
  vlimit  :: Float64
  "Current limit"
  ilimit  :: Float64
  "Power limit"
  plimit  :: Float64 
  "True if output relay is on"
  isrelayon  :: Bool
  "True if power supply temperature is too high"
  isoverheat :: Bool 
  "True if knob is in fine mode"  
  isknobfine :: Bool
  "True if knob is unlocked"
  isknobunlock :: Bool 
  "True if power supply is in remote control mode"
  isremote   :: Bool 
  "True is front panel controls are locked"
  islock     :: Bool
end

Status() = Status(0.0,0.0,0.0,0.0,0.0,0.0,false,false,false,false,false,false)

function Base.show(io::IO, s::Status)
  println(io,"Status")
  println(io,"voltage = ",s.voltage)
  println(io,"curent  = ",s.current)
  println(io,"power   = ",s.power)
  println(io,"vlimit  = ",s.vlimit)
  println(io,"ilimit  = ",s.ilimit)
  println(io,"plimit  = ",s.plimit)
  println(io,"isrelayon    = ",s.isrelayon)
  println(io,"isoverheat   = ",s.isoverheat)
  println(io,"isknobfine   = ",s.isknobfine)
  println(io,"isknobunlock = ",s.isknobunlock)
  println(io,"isremote     = ",s.isremote)
  println(io,"islock       = ",s.islock)
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

"Read status of the power supply"
psp_status, psp_status!