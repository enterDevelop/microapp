using System.Net.Http;
using System.Threading.Tasks;

namespace CurrencyConvert.BAL.ApiClients
{
    public interface IApiClient
    {
        Task<HttpResponseMessage> Get(string endpoint);
    }
}
