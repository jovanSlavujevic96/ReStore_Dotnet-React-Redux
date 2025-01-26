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

for hot reload enable:
`$ dotnet watch`

if there are any issues with https certificates:
1. `$ dotnet dev-certs https --clean`
2. `$ dotnet dev-certs https --trust`

to manage migrations you need to install `dotnef-ef`:
`$ dotnet tool install --global dotnet-ef`

to add migration:
`$ dotnet ef migrations add InitialCreate -o Data/Migrations`

to apply migration:
`$ dotnet ef database update`
