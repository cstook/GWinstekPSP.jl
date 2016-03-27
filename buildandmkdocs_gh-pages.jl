# build the API
include("build.jl")

# build and run server
cd("..")
run(`mkdocs gh-deploy --clean`)
