using Microsoft.AspNetCore.Mvc;

namespace Eventos.Controllers
{
    public class EventosController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
