# set voltage limit
# SU
export psp_setvlimit

"set voltage limit"
function psp_setvlimit(io_psp::IO,vlim::Real)
  @assert vlim<100 "voltage limit must be < 100V"
  vlimstring = @sprintf("%02d",vlim)
  set_voltage_limit_string = "SU "*vlimstring*"\r"
  write(io_psp, set_voltage_limit_string)
  return nothing
end