FROM microsoft/dotnet:2.1-aspnetcore-runtime AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/dotnet:2.1-sdk AS build
WORKDIR /src
COPY ["CurrencyConvert.WebApi/CurrencyConvert.WebApi.csproj", "CurrencyConvert.WebApi/"]
COPY ["CurrencyConvert.BAL/CurrencyConvert.BAL.csproj", "CurrencyConvert.BAL/"]
RUN dotnet restore "CurrencyConvert.WebApi/CurrencyConvert.WebApi.csproj"
COPY . .
WORKDIR "/src/CurrencyConvert.WebApi"
RUN dotnet build "CurrencyConvert.WebApi.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "CurrencyConvert.WebApi.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "CurrencyConvert.WebApi.dll"]