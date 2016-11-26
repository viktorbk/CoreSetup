using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using CoreSetup.Data;
using Microsoft.EntityFrameworkCore;

namespace CoreSetup.Controllers
{
    public class HomeController : Controller
    {
        ApplicationDbContext _context;

        public HomeController(ApplicationDbContext context)
        {
            _context = context;
        }

        public IActionResult Index()
        {
            return View();
        }

        public async Task<IActionResult> Persona()
        {
            var result = await _context.Persona.ToListAsync();
            return Json(result);
        }

        public IActionResult DataInit()
        {
            _context.Database.ExecuteSqlCommand("DELETE FROM Persona");
            _context.Persona.Add(new Persona
            {
                Name = "John Doe",
                Email = "janeinar@gmail.com",
                Type = 1
            });
            _context.Persona.Add(new Persona
            {
                Name = "Mary Moe",
                Email = "tmo@internova.no",
                Type = 2
            });
            _context.Persona.Add(new Persona
            {
                Name = "Viktor Kjartansson",
                Email = "viktor@viktor.is",
                Type = 1
            });
            _context.Persona.Add(new Persona
            {
                Name = "Tester",
                Email = "test@test.no",
                Type = 1
            });
            _context.SaveChanges();

            _context.Database.ExecuteSqlCommand("DELETE FROM Course");
            var participants = new List<Persona>();
            participants.Add(_context.Persona.First(w => w.Name == "John Doe"));
            participants.Add(_context.Persona.First(w => w.Name == "Viktor Kjartansson"));
            participants.Add(_context.Persona.First(w => w.Name == "Tester"));
            _context.Course.Add(new Course
            {
                Name = "Surgery",
                Description = "Desc",
                When = new DateTime(2017, 3, 1),
                Teacher = _context.Persona.First(w => w.Name == "John Doe"),
                Participants = participants
            });
            _context.SaveChanges();
            return Ok();
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
            return View();
        }
    }
}
