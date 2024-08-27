using backend.Models;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics;

namespace backend.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }
        // GET: ExampleController
        public ActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public string Get()
        {
            return "example";
        }

    }
}