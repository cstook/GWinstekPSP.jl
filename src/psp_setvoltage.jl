# set voltage
# SV
export psp_setvoltage

"Set output voltage."
function psp_setvoltage(io_psp::IO,voltage::Real)
  @assert voltage<100 "voltage must be < 100V"
  vstring = @sprintf("%02.2f",voltage)
  if length(vstring) == 4
    set_voltage_string = "SV "*"0"*vstring*"\r"
  else
    set_voltage_string = "SV "*vstring*"\r"
  end
  write(io_psp, set_voltage_string)
  return nothing
end