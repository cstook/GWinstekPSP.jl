# set power limit
# SP
export psp_setplimit

function psp_setplimit(io_psp::IO,plim::Real)
  @assert plim<1000 "power limit must be < 1000W"
  plimstring = @sprintf("%03d",plim)
  set_power_limit_string = "SP "*plimstring*"\r"
  write(io_psp, set_power_limit_string)
  return nothing
end