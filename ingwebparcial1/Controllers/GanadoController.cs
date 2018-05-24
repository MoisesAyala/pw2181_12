using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace ingwebparcial1.Controllers
{
    public class GanadoController : Controller
    {
        public IActionResult Index()
        {
            var model = new List<Ganado>();
            model.Add(new Ganado(){
                Id = 1,
                tipoAnimal = "vaca",
                Nombre = "juan",
                peso = 100,
                color = "verde"
            });     
            return View();
        }

        public IActionResult About()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }

        public IActionResult Contact()
        {
            ViewData["Message"] = "Your contact page.";

            return View();
        }
        
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}
