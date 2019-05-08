using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using WeatherInformation.BAL.ApiClients;

namespace WeatherInformation.BAL
{
    public static class DomainRegistration
    {
        public static IServiceCollection AddDomainServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IApiClient, OpenWeatherMapApiClient>(client => new OpenWeatherMapApiClient(configuration));

            return services;
        }
    }
}
