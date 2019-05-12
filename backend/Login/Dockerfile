FROM microsoft/dotnet:2.2-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.2-sdk AS build
WORKDIR /src
COPY ["Login/Login.csproj", "Login/"]
RUN dotnet restore "Login/Login.csproj"
COPY . .
WORKDIR "/src/Login"
RUN dotnet build "Login.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Login.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Login.dll"]