using System.Net.Http;
using System.Threading.Tasks;

namespace WeatherInformation.BAL.ApiClients
{
    public interface IApiClient
    {
        Task<HttpResponseMessage> Get(string endpoint);
    }
}
