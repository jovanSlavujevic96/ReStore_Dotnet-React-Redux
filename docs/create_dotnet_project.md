to create new solution file: \
`$ dotnet new sln`

to create new web API project: \
`$ dotnet new webapi -n API -controllers`
* `-controllers` stands for switch for using controllers template instead of minimali API
* `-n` argument stands for the name

to add new project to sln file: \
`$ dotnet sln add API/`

to run web API:
1. navigate to API: `$ cd API/`
2. `$ dotnet run`
3. dotnet will return something like: `Now listening on: http://localhost:5113`
