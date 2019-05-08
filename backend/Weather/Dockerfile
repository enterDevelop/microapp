FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["WeatherInformation/WeatherInformation.csproj", "WeatherInformation/"]
COPY ["WeatherInformation.BAL/WeatherInformation.BAL.csproj", "WeatherInformation.BAL/"]
RUN dotnet restore "WeatherInformation/WeatherInformation.csproj"
COPY . .
WORKDIR "/src/WeatherInformation"
RUN dotnet build "WeatherInformation.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "WeatherInformation.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "WeatherInformation.dll"]