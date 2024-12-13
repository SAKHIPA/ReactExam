using BookMgnt.Data;
using BookMgnt.Model;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BookMgnt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthersController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public AuthersController(ApplicationDbContext context)
        {
            _context = context;



        }

        //[HttpGet]
        //public async Task<ActionResult<IEnumerable<Auther>>> GetAuther()
        //{
        //    var authers = await _context.Authers.Select(x => new { x.id, x.name }).ToListAsync();
        //    return Ok(authers);
        //}
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Auther>>> Getcategory()
        {
            return _context.Authers.ToList();
        }

        [HttpPost("Author")]
        public async Task<ActionResult<Auther>> Author(Auther author)
        {
            if (_context.Authers.Any(x => x.id == author.id))
            {
                return BadRequest(" already exists.");
            }
            var athor = new Auther
            {
                name = author.name,
                bio = author.bio,



            };
            _context.Authers.Add(athor);
            _context.SaveChanges();
            return Ok("Successfully Added");
        }


    }
}
