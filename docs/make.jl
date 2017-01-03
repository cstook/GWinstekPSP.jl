using Documenter, GWinstekPSP

makedocs(
  modules = [GWinstekPSP],
  clean = false,
  format = :html,
  sitename = "GWinstekPSP.jl",
  authors = "Chris Stook",
  linkcheck = !("skiplinks" in ARGS),
  pages = [
    "Home" => "index.md",
    "Instalation" => "install.md",
    "Usage" => "usage.md",
    "API" => "api.md"
    ],
  )

deploydocs(
  repo = "github.com/cstook/GWinstekPSP.jl.git",
  target = "build",
  julia = "0.5",
  osname = "windows",
  deps = nothing,
  make = nothing,
  )
