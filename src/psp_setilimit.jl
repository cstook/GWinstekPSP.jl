# set current limit
# SI
export psp_setilimit

"Set the current limit."
function psp_setilimit(io_psp::IO,ilim::Real)
  @assert ilim<10 "current limit must be < 10A"
  ilimstring = @sprintf("%01.2f",ilim)
  set_current_limit_string = "SI "*ilimstring*"\r"
  write(io_psp, set_current_limit_string)
  return nothing
end