using CurrencyConvert.BAL.ApiClients;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CurrencyConvert.BAL
{
    public static class DomainRegistration
    {
        public static IServiceCollection AddDomainServices(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddTransient<IApiClient, CurrencyLayerApiClient>(client => new CurrencyLayerApiClient(configuration));

            return services;
        }
    }
}
