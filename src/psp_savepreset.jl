# save current configuration to EEPROM
# power supply will power up in this state.
# EEP
export psp_savepreset

const SAVE_PRESET = [0x45, 0x45, 0x50, 0x0d]

function psp_savepreset(io_psp::IO)
  write(io_psp, SAVE_PRESET)
  return nothing
end